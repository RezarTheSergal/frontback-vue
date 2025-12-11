<template>
	<div class="not-found">
		<h1>404 - Страница не найдена</h1>
		<p>Запрошенная страница не существует.</p>
		<button @click="goHome" class="btn">Вернуться на главную</button>
		<div class="debug-info">
			<p>Путь: {{ $route.path }}</p>
			<p>Параметры: {{ $route.params }}</p>
		</div>
	</div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
	name: 'NotFound',
	setup() {
		const router = useRouter()

		const goHome = () => {
			router.push('/')
		}

		return {
			goHome,
		}
	},
}
</script>

<style scoped>
.not-found {
	text-align: center;
	padding: 80px 20px;
	background: transparent;
}

.not-found h1 {
	font-size: 3em;
	color: var(--cp-secondary);
	text-transform: uppercase;
	letter-spacing: 2px;
	margin-bottom: 15px;
	text-shadow: 0 0 20px rgba(255, 0, 110, 0.3);
}

.not-found p {
	font-size: 16px;
	color: var(--cp-text-secondary);
	margin-bottom: 30px;
	letter-spacing: 0.5px;
}

.btn {
	padding: 12px 35px;
	background: linear-gradient(135deg, rgba(0, 255, 255, 0.15) 0%, rgba(255, 0, 110, 0.1) 100%);
	border: 2px solid var(--cp-primary);
	color: var(--cp-primary);
	border-radius: 2px;
	cursor: pointer;
	margin-top: 20px;
	font-weight: 600;
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-family: 'Courier New', monospace;
	transition: all 0.3s ease;
	box-shadow: 0 0 15px rgba(0, 255, 255, 0.2), inset 0 0 15px rgba(0, 255, 255, 0.05);
}

.btn:hover {
	background: linear-gradient(135deg, rgba(0, 255, 255, 0.25) 0%, rgba(255, 0, 110, 0.15) 100%);
	box-shadow: 0 0 25px var(--cp-primary), inset 0 0 25px rgba(0, 255, 255, 0.1);
	transform: translateY(-2px);
	text-shadow: 0 0 10px var(--cp-primary);
}

.debug-info {
	margin-top: 40px;
	padding: 20px;
	background: var(--cp-bg-card);
	border: 1px solid var(--cp-border);
	border-radius: 4px;
	font-family: 'Courier New', monospace;
	color: var(--cp-text-secondary);
	box-shadow: 0 0 20px rgba(0, 255, 255, 0.1), inset 0 0 20px rgba(0, 255, 255, 0.05);
	font-size: 12px;
	letter-spacing: 0.3px;
}

.debug-info p {
	margin: 8px 0;
	color: var(--cp-success);
}
</style>
