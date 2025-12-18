<template>
	<div class="user-profile">
		<div class="profile-header">
			<h1>Профиль пользователя</h1>
			<p>Управление профилем и личной информацией</p>
		</div>

		<div class="profile-content">
			<div v-if="$route.params.id" class="user-info">
				<h2>Профиль пользователя #{{ $route.params.id }}</h2>
				<p>Это страница конкретного пользователя</p>
			</div>
			<div v-else class="current-user">
				<h2>Ваш профиль</h2>
				<p>Email: user@example.com</p>
				<p>Дата регистрации: 2025.5.25</p>
			</div>

			<div class="navigation-buttons">
				<button @click="goBack" class="btn">Назад</button>
				<button @click="goHome" class="btn">На главную</button>
				<button @click="goToSettings" class="btn">Настройки</button>
			</div>
		</div>
	</div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
	name: 'UserProfile',
	setup() {
		const router = useRouter()

		const goBack = () => {
			router.back()
		}

		const goHome = () => {
			router.push('/')
		}

		const goToSettings = () => {
			router.push('/settings')
		}

		return {
			goBack,
			goHome,
			goToSettings,
		}
	},
	beforeRouteEnter(to, from, next) {
		console.log('Заходим в профиль пользователя')
		next()
	},
	beforeRouteUpdate(to, from, next) {
		console.log('Обновляем параметры маршрута профиля')
		next()
	},
}
</script>

<style scoped>
.user-profile {
	width: 100%;
	background: transparent;
	display: flex;
	flex-direction: column;
}

.profile-header {
	background: linear-gradient(135deg, rgba(68, 196, 255, 0.1) 0%, rgba(237, 114, 233, 0.08) 100%);
	border: 1px solid rgba(68, 196, 255, 0.3);
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

.profile-header h1 {
	margin-bottom: 0.5rem;
	font-size: 32px;
	font-weight: 700;
	text-shadow: 0 0 15px rgba(68, 196, 255, 0.3);
	color: #72e9ed;
}

.profile-header p {
	opacity: 0.9;
	font-size: 16px;
	color: rgba(68, 196, 255, 0.7);
	letter-spacing: 0.5px;
}

.profile-content {
	margin: 0;
	padding: 20px;
	background: rgba(5, 8, 18, 0.4);
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
	width: 100%;
}

.current-user,
.user-info {
	margin-bottom: 20px;
	padding: 20px;
	border: 1px solid rgba(68, 196, 255, 0.2);
	border-radius: 4px;
	background: rgba(0, 0, 0, 0.2);
}

.current-user h2,
.user-info h2 {
	color: #72e9ed;
	font-size: 20px;
	margin-bottom: 10px;
	text-shadow: 0 0 10px rgba(68, 196, 255, 0.2);
}

.current-user p,
.user-info p {
	color: rgba(68, 196, 255, 0.7);
	margin: 5px 0;
}

.profile-tabs {
	display: flex;
	gap: 0;
	margin: 20px 0 0 0;
	border-bottom: 1px solid rgba(68, 196, 255, 0.2);
	padding: 0;
}

.tab {
	padding: 15px 25px;
	text-decoration: none;
	color: rgba(68, 196, 255, 0.6);
	border-bottom: 3px solid transparent;
	font-weight: 600;
	font-size: 13px;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	cursor: pointer;
	transition: all 0.3s ease;
	position: relative;
}

.tab:hover {
	color: #72e9ed;
	background: rgba(68, 196, 255, 0.05);
}

.tab.router-link-active {
	border-bottom-color: #72e9ed;
	color: #72e9ed;
	text-shadow: 0 0 10px rgba(68, 196, 255, 0.3);
}

.tab-content {
	padding: 20px;
	border: 1px solid rgba(68, 196, 255, 0.2);
	border-radius: 4px;
	min-height: 200px;
	background: rgba(0, 0, 0, 0.3);
	color: rgba(68, 196, 255, 0.8);
	margin-bottom: 20px;
}

.navigation-buttons {
	margin-top: 20px;
	display: flex;
	gap: 10px;
	justify-content: center;
}

.btn {
	padding: 12px 24px;
	background: linear-gradient(90deg, rgba(68, 196, 255, 0.1) 0%, rgba(237, 114, 233, 0.08) 100%);
	color: #72e9ed;
	border: 1px solid rgba(68, 196, 255, 0.4);
	border-radius: 8px;
	cursor: pointer;
	font-weight: 600;
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	transition: all 0.3s ease;
	font-family: 'Courier New', monospace;
}

.btn:hover {
	background: linear-gradient(90deg, rgba(68, 196, 255, 0.15) 0%, rgba(237, 114, 233, 0.12) 100%);
	border-color: rgba(68, 196, 255, 0.6);
	box-shadow: 0 0 10px rgba(68, 196, 255, 0.2);
	color: #72e9ed;
}

.btn:active {
	transform: scale(0.98);
}
</style>
