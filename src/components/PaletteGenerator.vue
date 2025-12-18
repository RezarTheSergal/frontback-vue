<template>
	<div class="palette-generator">
		<div class="controls-section">
			<div class="control-group">
				<label>Количество цветов:</label>
				<div class="button-group">
					<button
						v-for="num in [3, 5, 7]"
						:key="num"
						@click="colorCount = num"
						:class="{ active: colorCount === num }"
						class="count-button"
					>
						{{ num }}
					</button>
				</div>
			</div>

			<div class="control-group">
				<label>Тип палитры:</label>
				<select v-model="paletteType" class="palette-type-select">
					<option value="harmonious">Гармоничная</option>
					<option value="monochromatic">Монохромная</option>
					<option value="analogous">Аналогичная</option>
					<option value="complementary">Комплементарная</option>
					<option value="triadic">Триада</option>
					<option value="tetradic">Тетрада</option>
				</select>
			</div>

			<div class="control-group">
				<label>Настроение:</label>
				<select v-model="moodType" class="mood-select">
					<option value="none">Без настроения</option>
					<option value="calm">Спокойное</option>
					<option value="energetic">Энергичное</option>
					<option value="professional">Профессиональное</option>
					<option value="playful">Игривое</option>
				</select>
			</div>

			<div class="control-group">
				<label>Формат отображения:</label>
				<div class="button-group">
					<button
						v-for="format in ['HEX', 'RGB', 'HSL']"
						:key="format"
						@click="displayFormat = format"
						:class="{ active: displayFormat === format }"
						class="format-button"
					>
						{{ format }}
					</button>
				</div>
				<small class="format-hint">
					Формат отображения цветовых значений в карточках палитры
				</small>
			</div>
		</div>
		<div class="base-color-section">
			<div class="control-group">
				<label>Базовый цвет:</label>
				<div class="color-picker-group">
					<input
						type="color"
						v-model="baseColor"
						class="color-picker"
						@input="updateBaseColor"
					/>
					<input
						type="text"
						v-model="baseColor"
						class="color-input"
						placeholder="#FF6B6B"
						@input="updateBaseColor"
					/>
					<button @click="generateFromBase" class="generate-base-button">
						Генерировать из базового цвета
					</button>
				</div>
			</div>
		</div>

		<div class="action-buttons">
			<button @click="generatePalette" class="generate-button">
				Случайная палитра
			</button>
			<button @click="generateFromBase" class="generate-button secondary">
				Из базового цвета
			</button>
		</div>

		<div v-if="palette.length > 0" class="palette-display">
			<div
				v-for="(color, index) in palette"
				:key="index"
				class="color-card"
				:style="{ backgroundColor: color.hex }"
				@click="copyToClipboard(color.hex)"
				:class="{ pinned: pinnedColors.has(index) }"
			>
				<div class="color-overlay">
					<div class="color-value">
						{{ getColorValue(color) }}
					</div>
					<div class="color-actions">
						<button
							@click.stop="togglePin(index)"
							:class="{ pinned: pinnedColors.has(index) }"
							class="pin-button"
							:title="
								pinnedColors.has(index) ? 'Открепить цвет' : 'Закрепить цвет'
							"
						>
							{{ pinnedColors.has(index) ? 'P' : 'O' }}
						</button>
						<button
							@click.stop="editColor(index)"
							class="edit-button"
							title="Редактировать цвет"
						>
							Edit
						</button>
					</div>
				</div>
			</div>
		</div>

		<div v-if="showColorWheel" class="color-wheel-section">
			<h3>Цветовой круг</h3>
			<div class="color-wheel-container">
				<canvas ref="colorWheelCanvas" width="300" height="300"></canvas>
				<div class="color-wheel-info">
					<p>Выберите цвет на круге для добавления в палитру</p>
				</div>
			</div>
		</div>

		<div v-if="palette.length > 0" class="accessibility-section">
			<h3>Анализ доступности (WCAG)</h3>
			<div class="contrast-grid">
				<div
					v-for="(combo, idx) in contrastCombinations"
					:key="idx"
					class="contrast-item"
				>
					<div class="contrast-preview">
						<div
							class="contrast-sample"
							:style="{
								backgroundColor: combo.bg,
								color: combo.fg,
							}"
						>
							Aa
						</div>
					</div>
					<div class="contrast-info">
						<div class="contrast-colors">
							<span
								class="color-dot"
								:style="{ backgroundColor: combo.fg }"
							></span>
							на
							<span
								class="color-dot"
								:style="{ backgroundColor: combo.bg }"
							></span>
						</div>
						<div class="contrast-ratio">
							Контраст: <strong>{{ combo.ratio }}</strong>
						</div>
						<div class="contrast-badges">
							<span
								v-if="combo.levelAA"
								class="badge badge-success"
								title="WCAG AA для обычного текста"
							>
								AA (ok)
							</span>
							<span
								v-else
								class="badge badge-fail"
								title="Не соответствует WCAG AA"
							>
								AA (no)
							</span>
							<span
								v-if="combo.levelAAA"
								class="badge badge-success"
								title="WCAG AAA для обычного текста"
							>
								AAA (ok)
							</span>
							<span
								v-else
								class="badge badge-fail"
								title="Не соответствует WCAG AAA"
							>
								AAA (no)
							</span>
						</div>
					</div>
				</div>
			</div>

			<div class="accent-suggestions">
				<h4>Рекомендуемые акцентные цвета</h4>
				<div class="accent-colors">
					<div
						v-for="(accent, idx) in suggestedAccents"
						:key="idx"
						class="accent-color"
						:style="{ backgroundColor: accent }"
						@click="addAccentToPalette(accent)"
						:title="`Добавить ${accent} в палитру`"
					>
						{{ accent }}
					</div>
				</div>
			</div>
		</div>

		<transition name="notification">
			<div v-if="showCopyNotification" class="notification">
				Скопировано в буфер обмена!
			</div>
		</transition>

		<div class="preview-section">
			<h3>Превью в интерфейсе</h3>

			<div class="preview-container">
				<div class="preview-light">
					<h4>Светлый фон</h4>
					<button
						:style="{
							backgroundColor: palette[0]?.hex,
							color: palette[4]?.hex,
						}"
					>
						Основная кнопка
					</button>
					<div
						:style="{
							backgroundColor: palette[1]?.hex,
							color: palette[4]?.hex,
						}"
						class="preview-card"
					>
						Карточка с цветом #1
					</div>
					<h5 :style="{ color: palette[2]?.hex }">Заголовок цветом #2</h5>
					<p :style="{ color: palette[3]?.hex }">Текст цветом #3</p>
				</div>

				<div class="preview-dark">
					<h4>Темный фон</h4>
					<button :style="{ backgroundColor: palette[0]?.hex, color: '#fff' }">
						Основная кнопка
					</button>
					<div
						:style="{ backgroundColor: palette[1]?.hex, color: '#fff' }"
						class="preview-card"
					>
						Карточка с цветом #1
					</div>
					<h5 :style="{ color: palette[2]?.hex }">Заголовок цветом #2</h5>
					<p :style="{ color: palette[3]?.hex }">Текст цветом #3</p>
				</div>
			</div>
		</div>

		<div class="tools-section">
			<h3>Управление палитрами</h3>

			<div class="save-palette-form">
				<input
					v-model="paletteName"
					type="text"
					placeholder="Название палитры"
					class="palette-name-input"
				/>
				<input
					v-model="paletteTags"
					type="text"
					placeholder="Теги (через запятую)"
					class="palette-tags-input"
				/>
				<button @click="savePalette" class="tool-button save">
					Сохранить палитру
				</button>
			</div>

			<div class="tool-group">
				<button @click="loadPalette" class="tool-button load">
					Загрузить последнюю
				</button>
				<button @click="toggleFavorites" class="tool-button favorite">
					{{ showOnlyFavorites ? 'Все палитры' : 'Избранное' }}
				</button>
				<button @click="showColorWheel = !showColorWheel" class="tool-button">
					Цветовой круг
				</button>
			</div>

			<div v-if="savedPalettes.length > 0" class="search-section">
				<input
					v-model="searchQuery"
					type="text"
					placeholder="Поиск по названию или тегам..."
					class="search-input"
				/>
			</div>

			<div v-if="filteredPalettes.length > 0" class="saved-palettes">
				<h4>
					Сохраненные палитры ({{ filteredPalettes.length }}/{{
						savedPalettes.length
					}})
				</h4>
				<div class="palette-list">
					<div
						v-for="(saved, idx) in filteredPalettes"
						:key="saved.id"
						class="saved-palette-item"
						:class="{ favorite: saved.favorite }"
					>
						<div class="saved-palette-header">
							<strong>{{ saved.name || `Палитра ${idx + 1}` }}</strong>
							<button
								@click.stop="toggleFavorite(saved.id)"
								class="favorite-button"
								:title="saved.favorite ? 'Убрать из избранного' : 'В избранное'"
							>
								{{ saved.favorite ? '*' : 'o' }}
							</button>
						</div>
						<div v-if="saved.tags && saved.tags.length" class="palette-tags">
							<span
								v-for="tag in saved.tags"
								:key="tag"
								class="tag"
								@click="searchQuery = tag"
							>
								{{ tag }}
							</span>
						</div>
						<div class="saved-palette-colors">
							<div
								v-for="(color, colorIdx) in saved.colors"
								:key="colorIdx"
								class="mini-color"
								:style="{ backgroundColor: color.hex }"
								:title="color.hex"
							></div>
						</div>
						<div class="saved-palette-actions">
							<button @click="applyPalette(saved)" class="mini-button">
								Применить
							</button>
							<button @click="editSavedPalette(saved)" class="mini-button edit">
								Изменить
							</button>
							<button
								@click="removeSavedPalette(saved.id)"
								class="mini-button delete"
							>
								Удалить
							</button>
						</div>
					</div>
				</div>
			</div>

			<div
				v-else-if="savedPalettes.length > 0 && filteredPalettes.length === 0"
				class="no-results"
			>
				<p>Ничего не найдено по запросу "{{ searchQuery }}"</p>
			</div>
		</div>

		<div class="export-section">
			<h3>Экспорт палитры</h3>
			<div class="export-buttons">
				<button @click="exportFormat = 'css'" class="export-btn">
					CSS Variables
				</button>
				<button @click="exportFormat = 'scss'" class="export-btn">
					SCSS Variables
				</button>
				<button @click="exportFormat = 'tailwind'" class="export-btn">
					Tailwind Config
				</button>
				<button @click="exportFormat = 'json'" class="export-btn">JSON</button>
			</div>

			<div v-if="exportFormat" class="css-export">
				<h4>{{ exportTitles[exportFormat] }}</h4>
				<pre class="code-block">{{ exportedCode }}</pre>
				<button @click="copyCodeToClipboard" class="copy-css-button">
					Скопировать код
				</button>
			</div>
		</div>

		<div
			v-if="editingColorIndex !== null"
			class="modal-overlay"
			@click="closeEdit"
		>
			<div class="modal-content" @click.stop>
				<h3>Редактирование цвета</h3>
				<div class="color-edit-form">
					<label>
						Цвет:
						<input
							type="color"
							v-model="editingColor"
							class="color-picker-large"
						/>
					</label>
					<label>
						HEX:
						<input
							type="text"
							v-model="editingColor"
							class="color-input-large"
						/>
					</label>
					<div class="modal-actions">
						<button @click="saveEditedColor" class="btn-primary">
							Сохранить
						</button>
						<button @click="closeEdit" class="btn-secondary">Отмена</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue'

export default {
	name: 'PaletteGenerator',
	setup() {
		const palette = ref([])
		const colorCount = ref(5)
		const displayFormat = ref('HEX')
		const pinnedColors = ref(new Set())
		const showCopyNotification = ref(false)

		const paletteType = ref('harmonious')
		const moodType = ref('none')
		const baseColor = ref('#667EEA')

		const savedPalettes = ref([])
		const paletteName = ref('')
		const paletteTags = ref('')
		const searchQuery = ref('')
		const showOnlyFavorites = ref(false)

		const exportFormat = ref('')
		const exportTitles = {
			css: 'CSS Variables',
			scss: 'SCSS Variables',
			tailwind: 'Tailwind Config',
			json: 'JSON',
		}

		const showColorWheel = ref(false)
		const colorWheelCanvas = ref(null)

		const editingColorIndex = ref(null)
		const editingColor = ref('')

		const hslToHex = (h, s, l) => {
			s /= 100
			l /= 100
			const c = (1 - Math.abs(2 * l - 1)) * s
			const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
			const m = l - c / 2
			let r = 0,
				g = 0,
				b = 0

			if (h >= 0 && h < 60) {
				r = c
				g = x
				b = 0
			} else if (h >= 60 && h < 120) {
				r = x
				g = c
				b = 0
			} else if (h >= 120 && h < 180) {
				r = 0
				g = c
				b = x
			} else if (h >= 180 && h < 240) {
				r = 0
				g = x
				b = c
			} else if (h >= 240 && h < 300) {
				r = x
				g = 0
				b = c
			} else if (h >= 300 && h < 360) {
				r = c
				g = 0
				b = x
			}

			const toHex = value => {
				const hex = Math.round((value + m) * 255).toString(16)
				return hex.length === 1 ? '0' + hex : hex
			}

			return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase()
		}

		const hexToRgb = hex => {
			const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
			if (result) {
				const r = parseInt(result[1], 16)
				const g = parseInt(result[2], 16)
				const b = parseInt(result[3], 16)
				return { r, g, b, string: `rgb(${r}, ${g}, ${b})` }
			}
			return null
		}

		const hexToHsl = hex => {
			const rgb = hexToRgb(hex)
			if (!rgb) return { h: 0, s: 0, l: 0, string: 'hsl(0, 0%, 0%)' }

			const r = rgb.r / 255
			const g = rgb.g / 255
			const b = rgb.b / 255

			const max = Math.max(r, g, b)
			const min = Math.min(r, g, b)
			let h = 0,
				s = 0
			const l = (max + min) / 2

			if (max !== min) {
				const d = max - min
				s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

				switch (max) {
					case r:
						h = ((g - b) / d + (g < b ? 6 : 0)) / 6
						break
					case g:
						h = ((b - r) / d + 2) / 6
						break
					case b:
						h = ((r - g) / d + 4) / 6
						break
				}
			}

			h = Math.round(h * 360)
			s = Math.round(s * 100)
			const lPercent = Math.round(l * 100)

			return { h, s, l: lPercent, string: `hsl(${h}, ${s}%, ${lPercent}%)` }
		}

		const applyMood = (h, s, l) => {
			switch (moodType.value) {
				case 'calm':
					return { h, s: s * 0.6, l: l + 10 }
				case 'energetic':
					return { h, s: Math.min(100, s * 1.2), l: l - 5 }
				case 'professional':
					return { h: (h + 200) % 360, s: s * 0.7, l: l - 10 }
				case 'playful':
					return {
						h: (h + Math.random() * 60 - 30) % 360,
						s: Math.min(100, s * 1.1),
						l,
					}
				default:
					return { h, s, l }
			}
		}

		const generatePaletteByType = baseHue => {
			const colors = []

			for (let i = 0; i < colorCount.value; i++) {
				if (pinnedColors.value.has(i) && palette.value[i]) {
					colors.push(palette.value[i])
					continue
				}

				let h, s, l

				switch (paletteType.value) {
					case 'monochromatic':
						h = baseHue
						s = 70 - i * 15
						l = 30 + i * 15
						break
					case 'analogous':
						h = (baseHue + i * 30 - 60) % 360
						s = 65 + Math.random() * 20
						l = 50 + Math.random() * 20
						break
					case 'complementary':
						h = i % 2 === 0 ? baseHue : (baseHue + 180) % 360
						s = 70 + Math.random() * 20
						l = 45 + Math.random() * 20
						break
					case 'triadic':
						h = (baseHue + i * 120) % 360
						s = 70 + Math.random() * 15
						l = 50 + Math.random() * 15
						break
					case 'tetradic':
						h = (baseHue + i * 90) % 360
						s = 65 + Math.random() * 20
						l = 48 + Math.random() * 18
						break
					default:
						h = (baseHue + (360 / colorCount.value) * i) % 360
						s = 70 - ((i * 5) % 30)
						l = 45 + ((i * 10) % 25)
				}

				const adjusted = applyMood(h, s, l)
				const hex = hslToHex(adjusted.h, adjusted.s, adjusted.l)
				const rgb = hexToRgb(hex)
				const hsl = hexToHsl(hex)

				colors.push({ hex, rgb: rgb.string, hsl: hsl.string })
			}

			palette.value = colors
			savePaletteToLocalStorage()
		}

		const generatePalette = () => {
			const baseHue = Math.random() * 360
			generatePaletteByType(baseHue)
		}

		const generateFromBase = () => {
			const hsl = hexToHsl(baseColor.value)
			generatePaletteByType(hsl.h)
		}

		const updateBaseColor = () => {
			if (baseColor.value.match(/^#[0-9A-F]{6}$/i)) {
				generateFromBase()
			}
		}

		const getLuminance = hex => {
			const rgb = hexToRgb(hex)
			if (!rgb) return 0

			const rsRGB = rgb.r / 255
			const gsRGB = rgb.g / 255
			const bsRGB = rgb.b / 255

			const r =
				rsRGB <= 0.03928
					? rsRGB / 12.92
					: Math.pow((rsRGB + 0.055) / 1.055, 2.4)
			const g =
				gsRGB <= 0.03928
					? gsRGB / 12.92
					: Math.pow((gsRGB + 0.055) / 1.055, 2.4)
			const b =
				bsRGB <= 0.03928
					? bsRGB / 12.92
					: Math.pow((bsRGB + 0.055) / 1.055, 2.4)

			return 0.2126 * r + 0.7152 * g + 0.0722 * b
		}

		const getContrastRatio = (hex1, hex2) => {
			const lum1 = getLuminance(hex1)
			const lum2 = getLuminance(hex2)
			const lighter = Math.max(lum1, lum2)
			const darker = Math.min(lum1, lum2)
			return ((lighter + 0.05) / (darker + 0.05)).toFixed(2)
		}

		const contrastCombinations = computed(() => {
			const combinations = []

			for (let i = 0; i < palette.value.length; i++) {
				for (let j = i + 1; j < palette.value.length; j++) {
					const ratio = getContrastRatio(
						palette.value[i].hex,
						palette.value[j].hex
					)
					combinations.push({
						fg: palette.value[i].hex,
						bg: palette.value[j].hex,
						ratio,
						levelAA: ratio >= 4.5,
						levelAAA: ratio >= 7,
					})
				}
			}

			return combinations.sort((a, b) => b.ratio - a.ratio).slice(0, 6)
		})

		const suggestedAccents = computed(() => {
			if (palette.value.length === 0) return []

			const baseHsl = hexToHsl(palette.value[0].hex)
			const accents = []

			accents.push(hslToHex((baseHsl.h + 180) % 360, baseHsl.s, baseHsl.l))
			accents.push(hslToHex((baseHsl.h + 120) % 360, baseHsl.s, baseHsl.l))
			accents.push(hslToHex((baseHsl.h + 240) % 360, baseHsl.s, baseHsl.l))

			return accents
		})

		const addAccentToPalette = accent => {
			const rgb = hexToRgb(accent)
			const hsl = hexToHsl(accent)
			palette.value.push({ hex: accent, rgb: rgb.string, hsl: hsl.string })
		}

		const getColorValue = color => {
			switch (displayFormat.value) {
				case 'RGB':
					return color.rgb
				case 'HSL':
					return color.hsl
				default:
					return color.hex
			}
		}

		const copyToClipboard = async text => {
			try {
				await navigator.clipboard.writeText(text)
				showCopyNotification.value = true
				setTimeout(() => {
					showCopyNotification.value = false
				}, 2000)
			} catch (err) {
				console.error('Ошибка копирования:', err)
			}
		}

		const togglePin = index => {
			if (pinnedColors.value.has(index)) {
				pinnedColors.value.delete(index)
			} else {
				pinnedColors.value.add(index)
			}
		}

		const editColor = index => {
			editingColorIndex.value = index
			editingColor.value = palette.value[index].hex
		}

		const saveEditedColor = () => {
			if (editingColorIndex.value !== null) {
				const hex = editingColor.value
				const rgb = hexToRgb(hex)
				const hsl = hexToHsl(hex)
				palette.value[editingColorIndex.value] = {
					hex,
					rgb: rgb.string,
					hsl: hsl.string,
				}
				closeEdit()
				savePaletteToLocalStorage()
			}
		}

		const closeEdit = () => {
			editingColorIndex.value = null
			editingColor.value = ''
		}

		const savePaletteToLocalStorage = () => {
			localStorage.setItem('currentPalette', JSON.stringify(palette.value))
		}

		const savePalette = () => {
			const tags = paletteTags.value
				.split(',')
				.map(t => t.trim())
				.filter(t => t)

			const newSavedPalette = {
				id: Date.now(),
				name: paletteName.value || `Палитра ${savedPalettes.value.length + 1}`,
				colors: JSON.parse(JSON.stringify(palette.value)),
				tags,
				favorite: false,
				timestamp: new Date().toISOString(),
			}

			savedPalettes.value.unshift(newSavedPalette)
			localStorage.setItem('savedPalettes', JSON.stringify(savedPalettes.value))

			paletteName.value = ''
			paletteTags.value = ''
			alert('Палитра сохранена!')
		}

		const loadPalette = () => {
			const saved = localStorage.getItem('currentPalette')
			if (saved) {
				palette.value = JSON.parse(saved)
				pinnedColors.value.clear()
				alert('Палитра загружена!')
			}
		}

		const applyPalette = saved => {
			palette.value = JSON.parse(JSON.stringify(saved.colors))
			colorCount.value = saved.colors.length
			pinnedColors.value.clear()
		}

		const editSavedPalette = saved => {
			paletteName.value = saved.name
			paletteTags.value = saved.tags ? saved.tags.join(', ') : ''
			applyPalette(saved)
			removeSavedPalette(saved.id)
		}

		const removeSavedPalette = id => {
			savedPalettes.value = savedPalettes.value.filter(p => p.id !== id)
			localStorage.setItem('savedPalettes', JSON.stringify(savedPalettes.value))
		}

		const toggleFavorite = id => {
			const palette = savedPalettes.value.find(p => p.id === id)
			if (palette) {
				palette.favorite = !palette.favorite
				localStorage.setItem(
					'savedPalettes',
					JSON.stringify(savedPalettes.value)
				)
			}
		}

		const toggleFavorites = () => {
			showOnlyFavorites.value = !showOnlyFavorites.value
		}

		const filteredPalettes = computed(() => {
			let result = savedPalettes.value

			if (showOnlyFavorites.value) {
				result = result.filter(p => p.favorite)
			}

			if (searchQuery.value) {
				const query = searchQuery.value.toLowerCase()
				result = result.filter(p => {
					const nameMatch = p.name.toLowerCase().includes(query)
					const tagsMatch =
						p.tags && p.tags.some(t => t.toLowerCase().includes(query))
					return nameMatch || tagsMatch
				})
			}

			return result
		})

		const exportedCode = computed(() => {
			if (!exportFormat.value) return ''

			switch (exportFormat.value) {
				case 'css':
					return `:root {\n${palette.value
						.map((c, i) => `  --color-${i + 1}: ${c.hex};`)
						.join('\n')}\n}`

				case 'scss':
					return palette.value
						.map((c, i) => `$color-${i + 1}: ${c.hex};`)
						.join('\n')

				case 'tailwind':
					const colors = palette.value.reduce((acc, c, i) => {
						acc[`custom-${i + 1}`] = c.hex
						return acc
					}, {})
					return `module.exports = {\n  theme: {\n    extend: {\n      colors: ${JSON.stringify(
						colors,
						null,
						8
					)}\n    }\n  }\n}`

				case 'json':
					return JSON.stringify(
						palette.value.map((c, i) => ({
							name: `color-${i + 1}`,
							hex: c.hex,
							rgb: c.rgb,
							hsl: c.hsl,
						})),
						null,
						2
					)

				default:
					return ''
			}
		})

		const copyCodeToClipboard = async () => {
			await copyToClipboard(exportedCode.value)
			alert('Код скопирован в буфер обмена!')
		}

		watch(colorCount, () => {
			if (palette.value.length > 0) {
				generatePalette()
			}
		})

		watch(paletteType, () => {
			if (palette.value.length > 0) {
				generatePalette()
			}
		})

		watch(moodType, () => {
			if (palette.value.length > 0 && moodType.value !== 'none') {
				generatePalette()
			}
		})

		const drawColorWheel = () => {
			if (!colorWheelCanvas.value) return
			
			const canvas = colorWheelCanvas.value
			const ctx = canvas.getContext('2d')
			const centerX = canvas.width / 2
			const centerY = canvas.height / 2
			const radius = 140
			
			// Clear canvas
			ctx.fillStyle = 'rgba(20, 34, 71, 0.3)'
			ctx.fillRect(0, 0, canvas.width, canvas.height)
			
			// Draw color wheel
			for (let angle = 0; angle < 360; angle += 1) {
				const hue = angle
				const saturation = 100
				const lightness = 50
				
				// Convert HSL to RGB
				const h = hue / 60
				const c = (1 - Math.abs(2 * (lightness / 100) - 1)) * (saturation / 100)
				const x = c * (1 - Math.abs((h % 2) - 1))
				let r, g, b = 0
				
				if (h >= 0 && h < 1) { r = c; g = x; b = 0 }
				else if (h >= 1 && h < 2) { r = x; g = c; b = 0 }
				else if (h >= 2 && h < 3) { r = 0; g = c; b = x }
				else if (h >= 3 && h < 4) { r = 0; g = x; b = c }
				else if (h >= 4 && h < 5) { r = x; g = 0; b = c }
				else { r = c; g = 0; b = x }
				
				const m = lightness / 100 - c / 2
				r = Math.round((r + m) * 255)
				g = Math.round((g + m) * 255)
				b = Math.round((b + m) * 255)
				
				ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
				ctx.beginPath()
				const rad = (angle * Math.PI) / 180
				const x1 = centerX + radius * Math.cos(rad)
				const y1 = centerY + radius * Math.sin(rad)
				const rad2 = ((angle + 1) * Math.PI) / 180
				const x2 = centerX + radius * Math.cos(rad2)
				const y2 = centerY + radius * Math.sin(rad2)
				
				ctx.moveTo(centerX, centerY)
				ctx.lineTo(x1, y1)
				ctx.arc(centerX, centerY, radius, rad, rad2)
				ctx.lineTo(centerX, centerY)
				ctx.fill()
			}
			
			// Draw center circle
			ctx.fillStyle = '#050812'
			ctx.beginPath()
			ctx.arc(centerX, centerY, 20, 0, Math.PI * 2)
			ctx.fill()
			
			// Draw border
			ctx.strokeStyle = 'rgba(68, 196, 255, 0.5)'
			ctx.lineWidth = 2
			ctx.beginPath()
			ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
			ctx.stroke()
		}

		watch(showColorWheel, (newVal) => {
			if (newVal) {
				setTimeout(() => {
					drawColorWheel()
				}, 50)
			}
		})

		const loadSavedPalettes = () => {
			const saved = localStorage.getItem('savedPalettes')
			if (saved) {
				savedPalettes.value = JSON.parse(saved)
			}
		}

		onMounted(() => {
			generatePalette()
			loadSavedPalettes()
		})

		return {
			palette,
			colorCount,
			displayFormat,
			pinnedColors,
			showCopyNotification,
			paletteType,
			moodType,
			baseColor,
			savedPalettes,
			paletteName,
			paletteTags,
			searchQuery,
			showOnlyFavorites,
			exportFormat,
			exportTitles,
			exportedCode,
			showColorWheel,
			colorWheelCanvas,
			editingColorIndex,
			editingColor,
			contrastCombinations,
			suggestedAccents,
			filteredPalettes,
			generatePalette,
			generateFromBase,
			updateBaseColor,
			getColorValue,
			copyToClipboard,
			togglePin,
			editColor,
			saveEditedColor,
			closeEdit,
			savePalette,
			loadPalette,
			applyPalette,
			editSavedPalette,
			removeSavedPalette,
			toggleFavorite,
			toggleFavorites,
			addAccentToPalette,
			copyCodeToClipboard,
			drawColorWheel,
		}
	},
}
</script>

<style scoped>
.palette-generator {
	width: 100%;
	margin: 0;
	padding: 40px 20px;
	background: transparent;
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
	box-sizing: border-box;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}

h2 {
	text-align: center;
	margin-bottom: 10px;
	color: var(--cp-primary);
	font-size: 32px;
	text-transform: uppercase;
	letter-spacing: 2px;
	text-shadow: 0 0 10px rgba(68, 196, 255, 0.3);
}

h2 + p {
	text-align: center;
	color: var(--cp-text-secondary);
	margin-bottom: 30px;
	font-size: 14px;
	letter-spacing: 0.5px;
}

h3 {
	color: var(--cp-primary);
	margin-bottom: 20px;
	font-size: 20px;
	text-transform: uppercase;
	letter-spacing: 1px;
}

h4 {
	color: var(--cp-secondary);
	margin-bottom: 15px;
	font-size: 16px;
	text-transform: uppercase;
	letter-spacing: 0.8px;
}

/* Soft buttons for tool actions */
.save-palette-form {
	display: flex;
	gap: 12px;
	margin-bottom: 20px;
	align-items: flex-end;
	flex-wrap: wrap;
}

.palette-name-input,
.palette-tags-input {
	flex: 1;
	min-width: 200px;
	padding: 12px 16px;
	border: 1px solid rgba(68, 196, 255, 0.4);
	background: rgba(20, 34, 71, 0.6);
	color: var(--cp-text-primary);
	border-radius: 8px;
	font-size: 13px;
	font-family: 'Courier New', monospace;
	letter-spacing: 0.5px;
	transition: all 0.3s ease;
}

.palette-name-input:focus,
.palette-tags-input:focus {
	outline: none;
	border-color: #44c4ff;
	background: rgba(20, 34, 71, 0.8);
	box-shadow: 0 0 12px rgba(68, 196, 255, 0.3), inset 0 0 12px rgba(68, 196, 255, 0.05);
}

.tool-group {
	display: flex;
	gap: 12px;
	margin-bottom: 20px;
	flex-wrap: wrap;
}

.tool-button {
	padding: 11px 22px;
	background: linear-gradient(135deg, rgba(68, 196, 255, 0.12) 0%, rgba(237, 114, 233, 0.08) 100%);
	border: 1.5px solid rgba(68, 196, 255, 0.5);
	color: #44c4ff;
	border-radius: 8px;
	cursor: pointer;
	font-weight: 600;
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 0.6px;
	font-family: 'Courier New', monospace;
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	box-shadow: 0 4px 15px rgba(68, 196, 255, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.1);
}

.tool-button:hover {
	background: linear-gradient(135deg, rgba(68, 196, 255, 0.18) 0%, rgba(237, 114, 233, 0.12) 100%);
	border-color: rgba(68, 196, 255, 0.7);
	color: #72e9ed;
	box-shadow: 0 6px 20px rgba(68, 196, 255, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.15);
	transform: translateY(-2px);
}

.tool-button:active {
	transform: translateY(0);
	box-shadow: 0 2px 8px rgba(68, 196, 255, 0.15), inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

.tool-button.save {
	border-color: rgba(0, 255, 65, 0.5);
	color: #00ff41;
}

.tool-button.save:hover {
	background: linear-gradient(135deg, rgba(0, 255, 65, 0.12) 0%, rgba(0, 255, 65, 0.08) 100%);
	border-color: rgba(0, 255, 65, 0.7);
	box-shadow: 0 6px 20px rgba(0, 255, 65, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.15);
	color: #00ff41;
}

.tool-button.load {
	border-color: rgba(68, 196, 255, 0.5);
	color: #44c4ff;
}

.tool-button.favorite {
	border-color: rgba(255, 190, 11, 0.5);
	color: #ffbe0b;
}

.tool-button.favorite:hover {
	background: linear-gradient(135deg, rgba(255, 190, 11, 0.12) 0%, rgba(255, 190, 11, 0.08) 100%);
	border-color: rgba(255, 190, 11, 0.7);
	box-shadow: 0 6px 20px rgba(255, 190, 11, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.15);
	color: #ffbe0b;
}

.search-section {
	margin-bottom: 20px;
}

.search-input {
	width: 100%;
	padding: 12px 16px;
	border: 1px solid rgba(68, 196, 255, 0.3);
	background: rgba(20, 34, 71, 0.4);
	color: var(--cp-text-primary);
	border-radius: 8px;
	font-size: 13px;
	font-family: 'Courier New', monospace;
	letter-spacing: 0.5px;
	transition: all 0.3s ease;
}

.search-input:focus {
	outline: none;
	border-color: #44c4ff;
	background: rgba(20, 34, 71, 0.6);
	box-shadow: 0 0 12px rgba(68, 196, 255, 0.3);
}

.export-section {
	margin-top: 40px;
	padding: 30px;
	background: var(--cp-bg-card);
	border: 1px solid var(--cp-border);
	border-radius: 8px;
	box-shadow: 0 0 20px rgba(68, 196, 255, 0.1), inset 0 0 20px rgba(68, 196, 255, 0.03);
}

.export-buttons {
	display: flex;
	gap: 12px;
	margin-bottom: 25px;
	flex-wrap: wrap;
	justify-content: center;
}

.export-btn {
	padding: 11px 22px;
	background: linear-gradient(135deg, rgba(68, 196, 255, 0.12) 0%, rgba(237, 114, 233, 0.08) 100%);
	border: 1.5px solid rgba(68, 196, 255, 0.5);
	color: #44c4ff;
	border-radius: 8px;
	cursor: pointer;
	font-weight: 600;
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 0.6px;
	font-family: 'Courier New', monospace;
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	box-shadow: 0 4px 15px rgba(68, 196, 255, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.1);
}

.export-btn:hover {
	background: linear-gradient(135deg, rgba(68, 196, 255, 0.18) 0%, rgba(237, 114, 233, 0.12) 100%);
	border-color: rgba(68, 196, 255, 0.7);
	color: #72e9ed;
	box-shadow: 0 6px 20px rgba(68, 196, 255, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.15);
	transform: translateY(-2px);
}

.export-btn:active {
	transform: translateY(0);
	box-shadow: 0 2px 8px rgba(68, 196, 255, 0.15), inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

.css-export {
	margin-top: 20px;
}

.code-block {
	background: rgba(0, 0, 0, 0.3);
	border: 1px solid rgba(68, 196, 255, 0.2);
	padding: 15px;
	border-radius: 6px;
	overflow-x: auto;
	color: #72e9ed;
	font-family: 'Courier New', monospace;
	font-size: 12px;
	line-height: 1.5;
	margin: 15px 0;
	letter-spacing: 0.3px;
}

.copy-css-button {
	padding: 10px 20px;
	background: linear-gradient(135deg, rgba(0, 255, 65, 0.12) 0%, rgba(0, 255, 65, 0.08) 100%);
	border: 1.5px solid rgba(0, 255, 65, 0.5);
	color: #00ff41;
	border-radius: 8px;
	cursor: pointer;
	font-weight: 600;
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 0.6px;
	font-family: 'Courier New', monospace;
	transition: all 0.3s ease;
	box-shadow: 0 4px 15px rgba(0, 255, 65, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.1);
}

.copy-css-button:hover {
	background: linear-gradient(135deg, rgba(0, 255, 65, 0.18) 0%, rgba(0, 255, 65, 0.12) 100%);
	border-color: rgba(0, 255, 65, 0.7);
	box-shadow: 0 6px 20px rgba(0, 255, 65, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.15);
	transform: translateY(-2px);
}

.controls-section {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 20px;
	margin-bottom: 30px;
	padding: 20px;
	background: var(--cp-bg-card);
	border: 1px solid var(--cp-border);
	border-radius: 4px;
	box-shadow: 0 0 20px rgba(68, 196, 255, 0.1), inset 0 0 20px rgba(68, 196, 255, 0.05);
}

.control-group {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.control-group label {
	font-weight: 600;
	color: var(--cp-primary);
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 0.8px;
}

.button-group {
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
}

.count-button,
.format-button {
	padding: 10px 18px;
	border: 1.5px solid var(--cp-primary);
	background: linear-gradient(135deg, rgba(68, 196, 255, 0.12) 0%, rgba(237, 114, 233, 0.08) 100%);
	color: var(--cp-primary);
	border-radius: 6px;
	cursor: pointer;
	font-weight: 600;
	transition: all 0.3s ease;
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	box-shadow: 0 0 10px rgba(68, 196, 255, 0.1), inset 0 0 10px rgba(68, 196, 255, 0.05);
}

.count-button:hover,
.format-button:hover {
	background: linear-gradient(135deg, rgba(68, 196, 255, 0.18) 0%, rgba(237, 114, 233, 0.12) 100%);
	box-shadow: 0 0 20px var(--cp-primary), inset 0 0 20px rgba(68, 196, 255, 0.1);
	transform: translateY(-2px);
	text-shadow: 0 0 10px var(--cp-primary);
}

.count-button.active,
.format-button.active {
	background: rgba(0, 255, 255, 0.2);
	box-shadow: 0 0 20px var(--cp-primary), inset 0 0 20px rgba(0, 255, 255, 0.1);
	text-shadow: 0 0 10px var(--cp-primary);
}

.format-hint {
	display: block;
	margin-top: 8px;
	color: var(--cp-text-muted);
	font-size: 12px;
	font-style: italic;
	letter-spacing: 0.3px;
}

.palette-type-select,
.mood-select {
	padding: 10px 12px;
	border: 1px solid var(--cp-border);
	background: rgba(20, 34, 71, 0.6);
	color: var(--cp-text-primary);
	border-radius: 2px;
	font-size: 13px;
	font-family: 'Courier New', monospace;
	cursor: pointer;
	transition: all 0.3s ease;
}

.palette-type-select:hover,
.mood-select:hover,
.palette-type-select:focus,
.mood-select:focus {
	border-color: var(--cp-primary);
	background: rgba(20, 34, 71, 0.8);
	box-shadow: 0 0 15px rgba(0, 255, 255, 0.3), inset 0 0 15px rgba(0, 255, 255, 0.05);
	outline: none;
}

.action-buttons {
	display: flex;
	gap: 15px;
	margin-bottom: 30px;
	justify-content: center;
	flex-wrap: wrap;
}

.generate-button {
	padding: 12px 35px;
	background: linear-gradient(135deg, rgba(0, 255, 255, 0.15) 0%, rgba(255, 0, 110, 0.1) 100%);
	border: 2px solid var(--cp-primary);
	color: var(--cp-primary);
	border-radius: 2px;
	cursor: pointer;
	font-weight: 600;
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-family: 'Courier New', monospace;
	transition: all 0.3s ease;
	box-shadow: 0 0 15px rgba(0, 255, 255, 0.2), inset 0 0 15px rgba(0, 255, 255, 0.05);
}

.generate-button:hover {
	transform: translateY(-2px);
	background: linear-gradient(135deg, rgba(0, 255, 255, 0.25) 0%, rgba(255, 0, 110, 0.15) 100%);
	box-shadow: 0 0 25px var(--cp-primary), inset 0 0 25px rgba(0, 255, 255, 0.1);
	text-shadow: 0 0 10px var(--cp-primary);
}

.generate-button.secondary {
	border-color: var(--cp-success);
	color: var(--cp-success);
	background: linear-gradient(135deg, rgba(0, 255, 65, 0.1) 0%, rgba(0, 255, 65, 0.05) 100%);
	box-shadow: 0 0 15px rgba(0, 255, 65, 0.2), inset 0 0 15px rgba(0, 255, 65, 0.05);
}

.generate-button.secondary:hover {
	border-color: var(--cp-success);
	color: var(--cp-success);
	box-shadow: 0 0 25px var(--cp-success), inset 0 0 25px rgba(0, 255, 65, 0.1);
	text-shadow: 0 0 10px var(--cp-success);
}

.base-color-section {
	margin-bottom: 20px;
	padding: 20px;
	background: var(--cp-bg-card);
	border: 1px solid var(--cp-border);
	border-radius: 4px;
	box-shadow: 0 0 20px rgba(0, 255, 255, 0.1), inset 0 0 20px rgba(0, 255, 255, 0.05);
}

.color-picker-group {
	display: flex;
	gap: 10px;
	align-items: center;
}

.color-picker {
	width: 60px;
	height: 40px;
	border: 2px solid var(--cp-border);
	border-radius: 2px;
	cursor: pointer;
	transition: all 0.3s ease;
}

.color-picker:hover {
	border-color: var(--cp-primary);
	box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
}

.color-input {
	flex: 1;
	padding: 10px 12px;
	border: 1px solid var(--cp-border);
	background: rgba(20, 34, 71, 0.6);
	color: var(--cp-text-primary);
	border-radius: 2px;
	font-size: 13px;
	font-family: 'Courier New', monospace;
	letter-spacing: 0.5px;
	transition: all 0.3s ease;
}

.color-input:focus {
	outline: none;
	border-color: var(--cp-primary);
	background: rgba(20, 34, 71, 0.8);
	box-shadow: 0 0 15px rgba(0, 255, 255, 0.3), inset 0 0 15px rgba(0, 255, 255, 0.05);
}

.generate-base-button {
	padding: 10px 18px;
	background: linear-gradient(135deg, rgba(0, 255, 255, 0.15) 0%, rgba(255, 0, 110, 0.1) 100%);
	border: 2px solid var(--cp-primary);
	color: var(--cp-primary);
	border-radius: 2px;
	cursor: pointer;
	font-weight: 600;
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 0.8px;
	font-family: 'Courier New', monospace;
	transition: all 0.3s ease;
	white-space: nowrap;
	box-shadow: 0 0 10px rgba(0, 255, 255, 0.2), inset 0 0 10px rgba(0, 255, 255, 0.05);
}

.generate-base-button:hover {
	background: linear-gradient(135deg, rgba(0, 255, 255, 0.25) 0%, rgba(255, 0, 110, 0.15) 100%);
	box-shadow: 0 0 20px var(--cp-primary), inset 0 0 20px rgba(0, 255, 255, 0.1);
	transform: translateY(-2px);
	text-shadow: 0 0 10px var(--cp-primary);
}

.palette-display {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
	gap: 15px;
	margin: 30px 0;
}

.color-card {
	aspect-ratio: 1;
	border-radius: 4px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	transition: all 0.3s ease;
	border: 2px solid rgba(0, 255, 255, 0.3);
	box-shadow: 0 0 20px rgba(0, 255, 255, 0.1), inset 0 0 20px rgba(0, 255, 255, 0.05);
}

.color-card:hover {
	transform: translateY(-4px);
	border-color: var(--cp-primary);
	box-shadow: 0 0 30px var(--cp-primary), inset 0 0 30px rgba(0, 255, 255, 0.1);
}

.color-card.pinned {
	border-color: var(--cp-success);
	box-shadow: 0 0 30px var(--cp-success), inset 0 0 30px rgba(0, 255, 65, 0.1);
}

.color-overlay {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	padding: 15px;
	background: rgba(0, 0, 0, 0.6);
	opacity: 0;
	transition: opacity 0.3s ease;
}

.color-card:hover .color-overlay {
	opacity: 1;
}

.color-value {
	color: white;
	font-weight: 600;
	font-size: 13px;
	text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
	background: rgba(0, 255, 255, 0.1);
	border: 1px solid rgba(0, 255, 255, 0.3);
	padding: 8px 12px;
	border-radius: 2px;
	font-family: 'Courier New', monospace;
	letter-spacing: 0.3px;
}

.color-actions {
	display: flex;
	gap: 8px;
}

.pin-button,
.edit-button {
	background: rgba(0, 255, 255, 0.2);
	border: 1px solid var(--cp-primary);
	width: 36px;
	height: 36px;
	border-radius: 2px;
	font-size: 16px;
	cursor: pointer;
	transition: all 0.3s ease;
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--cp-primary);
	font-weight: 600;
	box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
}

.pin-button:hover,
.edit-button:hover {
	transform: scale(1.15);
	background: rgba(0, 255, 255, 0.3);
	box-shadow: 0 0 15px var(--cp-primary);
}

.color-wheel-section {
	margin: 40px 0;
	padding: 30px;
	background: var(--cp-bg-card);
	border: 1px solid var(--cp-border);
	border-radius: 4px;
	box-shadow: 0 0 20px rgba(0, 255, 255, 0.1), inset 0 0 20px rgba(0, 255, 255, 0.05);
}

.color-wheel-container {
	display: flex;
	gap: 30px;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
}

.color-wheel-container canvas {
	border-radius: 2px;
	border: 2px solid var(--cp-primary);
	box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
	cursor: crosshair;
}

.color-wheel-info {
	flex: 1;
	min-width: 250px;
}

.saved-palettes {
	margin-top: 30px;
}

.palette-list {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
	gap: 15px;
}

.saved-palette-item {
	background: var(--cp-bg-card);
	padding: 15px;
	border-radius: 4px;
	border: 1px solid var(--cp-border);
	transition: all 0.3s ease;
	box-shadow: 0 0 20px rgba(0, 255, 255, 0.1), inset 0 0 20px rgba(0, 255, 255, 0.05);
}

.saved-palette-item:hover {
	transform: translateY(-2px);
	border-color: var(--cp-primary);
	box-shadow: 0 0 30px rgba(0, 255, 255, 0.2), inset 0 0 30px rgba(0, 255, 255, 0.08);
}

.saved-palette-item.favorite {
	border-color: var(--cp-warning);
	background: rgba(255, 190, 11, 0.08);
}

.saved-palette-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
}

.favorite-button {
	background: none;
	border: none;
	font-size: 18px;
	cursor: pointer;
	transition: transform 0.3s ease;
	color: var(--cp-warning);
}

.favorite-button:hover {
	transform: scale(1.2);
}

.palette-tags {
	display: flex;
	gap: 6px;
	flex-wrap: wrap;
	margin-bottom: 10px;
}

.tag {
	background: rgba(0, 255, 255, 0.1);
	color: var(--cp-primary);
	border: 1px solid var(--cp-primary);
	padding: 4px 10px;
	border-radius: 2px;
	font-size: 10px;
	cursor: pointer;
	transition: all 0.3s ease;
	text-transform: uppercase;
	letter-spacing: 0.3px;
	font-weight: 500;
}

.tag:hover {
	background: rgba(0, 255, 255, 0.2);
	border-color: var(--cp-primary);
	transform: translateY(-1px);
	box-shadow: 0 0 10px var(--cp-primary);
}

.saved-palette-colors {
	display: flex;
	gap: 6px;
	height: 35px;
	margin-bottom: 12px;
	border-radius: 2px;
	overflow: hidden;
	border: 1px solid var(--cp-border);
}

.mini-color {
	flex: 1;
	cursor: pointer;
	transition: all 0.2s ease;
}

.mini-color:hover {
	transform: scaleY(1.2);
	filter: brightness(1.2);
	box-shadow: inset 0 0 10px rgba(0, 255, 255, 0.3);
}

.saved-palette-actions {
	display: flex;
	gap: 8px;
}

.mini-button {
	flex: 1;
	padding: 8px;
	border: 1px solid var(--cp-primary);
	background: rgba(0, 255, 255, 0.1);
	color: var(--cp-primary);
	border-radius: 2px;
	cursor: pointer;
	font-size: 11px;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.4px;
	font-family: 'Courier New', monospace;
	transition: all 0.3s ease;
	box-shadow: 0 0 10px rgba(0, 255, 255, 0.1);
}

.mini-button:hover {
	transform: translateY(-1px);
	background: rgba(0, 255, 255, 0.2);
	box-shadow: 0 0 15px var(--cp-primary);
}

.mini-button.edit {
	border-color: var(--cp-warning);
	background: rgba(255, 190, 11, 0.1);
	color: var(--cp-warning);
	box-shadow: 0 0 10px rgba(255, 190, 11, 0.1);
}

.mini-button.edit:hover {
	box-shadow: 0 0 15px var(--cp-warning);
	background: rgba(255, 190, 11, 0.2);
}

.mini-button.delete {
	border-color: var(--cp-danger);
	background: rgba(255, 0, 110, 0.1);
	color: var(--cp-danger);
	box-shadow: 0 0 10px rgba(255, 0, 110, 0.1);
}

.mini-button.delete:hover {
	box-shadow: 0 0 15px var(--cp-danger);
	background: rgba(255, 0, 110, 0.2);
}

.no-results {
	text-align: center;
	padding: 40px;
	color: var(--cp-text-muted);
	font-size: 14px;
	background: var(--cp-bg-card);
	border: 2px dashed var(--cp-border);
	border-radius: 4px;
	box-shadow: 0 0 20px rgba(0, 255, 255, 0.05);
	letter-spacing: 0.5px;
}

.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
}

.modal-content {
	background: var(--cp-bg-card);
	border: 1px solid var(--cp-border);
	padding: 30px;
	border-radius: 4px;
	max-width: 500px;
	width: 90%;
	box-shadow: 0 0 40px rgba(0, 255, 255, 0.3), inset 0 0 40px rgba(0, 255, 255, 0.05);
}

.modal-content h3 {
	margin-bottom: 20px;
	color: var(--cp-primary);
	text-transform: uppercase;
	letter-spacing: 1px;
}

.color-edit-form {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.color-edit-form label {
	display: flex;
	flex-direction: column;
	gap: 8px;
	font-weight: 600;
	color: var(--cp-primary);
	text-transform: uppercase;
	font-size: 12px;
	letter-spacing: 0.5px;
}

.color-picker-large {
	width: 100%;
	height: 60px;
	border: 2px solid var(--cp-border);
	border-radius: 2px;
	cursor: pointer;
	transition: all 0.3s ease;
}

.color-picker-large:hover {
	border-color: var(--cp-primary);
	box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
}

.color-input-large {
	width: 100%;
	padding: 12px;
	border: 1px solid var(--cp-border);
	background: rgba(20, 34, 71, 0.6);
	color: var(--cp-text-primary);
	border-radius: 2px;
	font-size: 14px;
	font-family: 'Courier New', monospace;
	letter-spacing: 0.5px;
	transition: all 0.3s ease;
}

.color-input-large:focus {
	outline: none;
	border-color: var(--cp-primary);
	background: rgba(20, 34, 71, 0.8);
	box-shadow: 0 0 15px rgba(0, 255, 255, 0.3), inset 0 0 15px rgba(0, 255, 255, 0.05);
}

.modal-actions {
	display: flex;
	gap: 10px;
	margin-top: 10px;
}

.btn-primary,
.btn-secondary {
	flex: 1;
	padding: 12px;
	border: none;
	border-radius: 2px;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.3s ease;
	text-transform: uppercase;
	font-size: 12px;
	letter-spacing: 0.8px;
	font-family: 'Courier New', monospace;
}

.btn-primary {
	background: linear-gradient(135deg, rgba(0, 255, 255, 0.15) 0%, rgba(255, 0, 110, 0.1) 100%);
	border: 2px solid var(--cp-primary);
	color: var(--cp-primary);
	box-shadow: 0 0 15px rgba(0, 255, 255, 0.2), inset 0 0 15px rgba(0, 255, 255, 0.05);
}

.btn-primary:hover {
	background: linear-gradient(135deg, rgba(0, 255, 255, 0.25) 0%, rgba(255, 0, 110, 0.15) 100%);
	box-shadow: 0 0 25px var(--cp-primary), inset 0 0 25px rgba(0, 255, 255, 0.1);
	transform: translateY(-2px);
	text-shadow: 0 0 10px var(--cp-primary);
}

.btn-secondary {
	background: rgba(0, 255, 255, 0.05);
	border: 2px solid var(--cp-border);
	color: var(--cp-text-secondary);
	box-shadow: 0 0 10px rgba(0, 255, 255, 0.1);
}

.btn-secondary:hover {
	background: rgba(0, 255, 255, 0.1);
	border-color: var(--cp-text-secondary);
	color: var(--cp-text-primary);
}

@media (max-width: 768px) {
	.palette-generator {
		padding: 20px;
	}

	h2 {
		font-size: 2rem;
	}

	.controls-section {
		grid-template-columns: 1fr;
	}

	.palette-display {
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		gap: 15px;
	}

	.base-color-section {
		padding: 15px;
	}

	.color-picker-group {
		flex-direction: column;
	}

	.generate-base-button {
		width: 100%;
	}

	.action-buttons {
		flex-direction: column;
	}

	.generate-button {
		width: 100%;
	}

	.contrast-grid {
		grid-template-columns: 1fr;
	}

	.color-wheel-container {
		flex-direction: column;
	}

	.save-palette-form {
		flex-direction: column;
	}

	.tool-group {
		flex-direction: column;
	}

	.tool-button {
		width: 100%;
	}

	.palette-list {
		grid-template-columns: 1fr;
	}

	.export-buttons {
		flex-direction: column;
	}

	.export-btn {
		width: 100%;
	}

	.modal-content {
		width: 95%;
		padding: 20px;
	}

	.notification {
		right: 10px;
		left: 10px;
		top: 10px;
	}
}

@media (max-width: 480px) {
	h2 {
		font-size: 1.5rem;
	}

	h2 + p {
		font-size: 0.9rem;
	}

	.palette-display {
		grid-template-columns: repeat(2, 1fr);
	}

	.color-value {
		font-size: 12px;
		padding: 6px 10px;
	}

	.pin-button,
	.edit-button {
		width: 32px;
		height: 32px;
		font-size: 16px;
	}
}
</style>
