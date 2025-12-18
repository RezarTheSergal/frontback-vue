<template>
	<div class="demo-container">
		<h2>v-model</h2>
		
		<div class="input-group">
			<label>Введите ваше имя:</label>
			<input
				v-model="userName"
				placeholder="Например: Иван"
				class="text-input"
			/>
		</div>
		
		<p>
			Привет, <strong>{{ userName }}</strong
			>!
		</p>
		
		<div class="input-group">
			<label>Опишите ваши интересы:</label>
			<textarea
				v-model="userBio"
				placeholder="Расскажите о себе..."
				class="text-area"
				rows="3"
			></textarea>
			<p>Длина текста: {{ userBio.length }} символов</p>
		</div>
		
		<div class="input-group">
			<label>Выберите технологию:</label>
			<select v-model="selectedTech" class="select-input">
				<option value="vue">Vue.js</option>
				<option value="react">React</option>
				<option value="css">CSS</option>
				<option value="js">js</option>
				<option value="html">HTML</option>
				<option value="unity">Unity</option>
			</select>
			<p>Вы выбрали: {{ getTechName(selectedTech) }}</p>
		</div>
		
		<div class="input-group">
			<label>
				<input type="checkbox" v-model="isSubscribed" />
				Получать уведомления
			</label>
			<p v-if="isSubscribed">Вы подписаны на уведомления</p>
			<p v-else>Вы не подписаны на уведомления</p>
		</div>
		
		<div class="input-group">
			<label>Уровень опыта:</label>
			<div>
				<label>
					<input type="radio" v-model="experienceLevel" value="beginner" />
					Начинающий
				</label>
				<label>
					<input type="radio" v-model="experienceLevel" value="intermediate" />
					Средний
				</label>
				<label>
					<input type="radio" v-model="experienceLevel" value="advanced" />
					Продвинутый
				</label>
			</div>
		</div>
		<p>Ваш уровень: {{ getExperienceText(experienceLevel) }}</p>
		
		<div class="debug-info">
			<h3>Текущее состояние данных:</h3>
			<pre>{{
				JSON.stringify(
					{
						userName,
						userBio,
						selectedTech,
						isSubscribed,
						experienceLevel,
					},
					null,
					2
				)
			}}</pre>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue'
export default {
	name: 'ReactiveDemo',
	setup() {
		const userName = ref('')
		const userBio = ref('')
		const selectedTech = ref('vue')
		const isSubscribed = ref(false)
		const experienceLevel = ref('beginner')
		const getTechName = tech => {
			const techMap = {
				vue: 'Vue.js',
				react: 'React',
				angular: 'Angular',
			}
			return techMap[tech] || tech
		}
		const getExperienceText = level => {
			const levelMap = {
				beginner: 'Начинающий разработчик',
				intermediate: 'Разработчик со средним опытом',
				advanced: 'Опытный разработчик',
			}
			return levelMap[level] || level
		}
		return {
			userName,
			userBio,
			selectedTech,
			isSubscribed,
			experienceLevel,
			getTechName,
			getExperienceText,
		}
	},
}
</script>

<style scoped>
.demo-container {
	max-width: 700px;
	margin: 0 auto;
	padding: 0;
	background: transparent;
}

.input-group {
	margin-bottom: 20px;
	padding: 20px;
	background: var(--cp-bg-card);
	border: 1px solid var(--cp-border);
	border-radius: 4px;
	box-shadow: 0 0 20px rgba(68, 196, 255, 0.1), inset 0 0 20px rgba(68, 196, 255, 0.05);
}

label {
	display: block;
	margin-bottom: 12px;
	font-weight: 600;
	color: var(--cp-primary);
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 0.8px;
}

.text-input,
.text-area,
.select-input {
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

.text-input:focus,
.text-area:focus,
.select-input:focus {
	outline: none;
	border-color: var(--cp-primary);
	background: rgba(20, 34, 71, 0.8);
	box-shadow: 0 0 15px rgba(68, 196, 255, 0.3), inset 0 0 15px rgba(68, 196, 255, 0.05);
}

.text-input::placeholder,
.text-area::placeholder {
	color: var(--cp-text-muted);
}

.input-group p {
	margin: 10px 0 0 0;
	color: var(--cp-text-secondary);
	font-size: 13px;
	letter-spacing: 0.3px;
}

.input-group strong {
	color: var(--cp-success);
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

input[type="checkbox"],
input[type="radio"] {
	margin-right: 8px;
	width: 18px;
	height: 18px;
	cursor: pointer;
	accent-color: var(--cp-primary);
}

.input-group label:has(input[type="checkbox"]),
.input-group label:has(input[type="radio"]) {
	display: flex;
	align-items: center;
	font-weight: normal;
	text-transform: none;
	letter-spacing: 0;
	margin-bottom: 10px;
}

.debug-info {
	margin-top: 30px;
	padding: 20px;
	background: var(--cp-bg-card);
	border: 1px solid var(--cp-border);
	border-radius: 4px;
	box-shadow: 0 0 20px rgba(68, 196, 255, 0.1), inset 0 0 20px rgba(68, 196, 255, 0.05);
}

.debug-info h3 {
	margin: 0 0 15px 0;
	color: var(--cp-primary);
	font-size: 14px;
	text-transform: uppercase;
	letter-spacing: 1px;
}

pre {
	background: rgba(0, 0, 0, 0.3);
	border: 1px solid var(--cp-border);
	padding: 15px;
	border-radius: 2px;
	overflow-x: auto;
	color: var(--cp-success);
	font-family: 'Courier New', monospace;
	font-size: 12px;
	line-height: 1.5;
	margin: 0;
	letter-spacing: 0.3px;
}
</style>