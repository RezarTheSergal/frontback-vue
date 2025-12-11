<template>
	<div class="palette-view">
		<div class="palette-header">
			<h1>Генератор цветовых палитр</h1>
			<p>
				Создавайте, редактируйте и экспортируйте гармоничные цветовые палитры
			</p>
		</div>
		<PaletteGenerator />
	</div>
</template>

<script>
import PaletteGenerator from '../components/PaletteGenerator.vue'

export default {
	name: 'PaletteView',
	components: {
		PaletteGenerator,
	},
}
</script>

<style scoped>
.palette-view {
	width: 100%;
	background: transparent;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
}

.palette-header {
	background: linear-gradient(135deg, rgba(68, 196, 255, 0.1) 0%, rgba(237, 114, 233, 0.08) 100%);
	border: 1px solid rgba(68, 196, 255, 0.3);
	border-radius: 0;
	color: var(--cp-primary);
	padding: 40px 20px;
	min-height: 160px;
	text-align: center;
	margin-bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-family: 'Courier New', monospace;
}

.palette-header h1 {
	margin-bottom: 0.5rem;
	font-size: 32px;
	font-weight: 700;
	text-shadow: 0 0 15px rgba(68, 196, 255, 0.3);
	color: #72e9ed;
}

.palette-header p {
	opacity: 0.9;
	font-size: 16px;
	color: rgba(68, 196, 255, 0.7);
	letter-spacing: 0.5px;
}
</style>
