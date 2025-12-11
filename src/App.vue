<template>
	<div id="app">
		<nav class="main-nav">
			<router-link to="/" class="nav-link">Главная</router-link>
			<router-link to="/palette" class="nav-link">Генератор палитр</router-link>
			<router-link to="/profile" class="nav-link">Профиль</router-link>
			<router-link to="/settings" class="nav-link">Настройки</router-link>
		</nav>
		<main class="main-content">
			<router-view></router-view>
		</main>
		<footer class="app-footer">
			<p>Vue 3 + Vite - Генератор цветовых палитр</p>
		</footer>
		<NotificationContainer />
	</div>
</template>

<script>
import NotificationContainer from './components/NotificationContainer.vue'

export default {
	name: 'App',
	components: {
		NotificationContainer,
	},
}
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html,
body {
	width: 100%;
	margin: 0;
	padding: 0;
}

#app {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 0;
	padding: 0;
	background: linear-gradient(135deg, #050812 0%, #0a0e27 50%, #0f1a3c 100%);
	background-attachment: fixed;
}

/* НАВИГАЦИЯ - Киберпанк стиль */
.main-nav {
	background: linear-gradient(180deg, rgba(5, 8, 18, 0.95) 0%, rgba(10, 14, 39, 0.9) 100%);
	padding: 0;
	display: flex;
	justify-content: center;
	gap: 0;
	box-shadow: 
		0 4px 20px rgba(68, 196, 255, 0.1),
		inset 0 1px 0 rgba(68, 196, 255, 0.1);
	flex-wrap: wrap;
	width: 100%;
	border-bottom: 1px solid rgba(68, 196, 255, 0.2);
	position: sticky;
	top: 0;
	z-index: 1000;
}

.nav-link {
	color: #ffffff;
	text-decoration: none;
	padding: 16px 28px;
	border: none;
	background-color: transparent;
	cursor: pointer;
	font-size: 13px;
	font-weight: 600;
	transition: all 0.3s ease;
	border-bottom: 3px solid transparent;
	text-transform: uppercase;
	letter-spacing: 1.2px;
	font-family: 'Courier New', monospace;
	position: relative;
}

.nav-link::before {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 3px;
	background: linear-gradient(90deg, transparent, #72e9ed, transparent);
	opacity: 0;
	transition: opacity 0.3s ease;
}

.nav-link:hover {
	background: rgba(68, 196, 255, 0.08);
	color: #72e9ed;
	text-shadow: 0 0 10px rgba(68, 196, 255, 0.5);
	box-shadow: 0 0 15px rgba(68, 196, 255, 0.1);
}

.nav-link:hover::before {
	opacity: 1;
}

.nav-link.router-link-active {
	background: rgba(68, 196, 255, 0.12);
	border-bottom-color: #72e9ed;
	color: #72e9ed;
	text-shadow: 0 0 10px rgba(68, 196, 255, 0.6);
	box-shadow: 
		inset 0 -2px 10px rgba(68, 196, 255, 0.15),
		0 0 20px rgba(68, 196, 255, 0.15);
}

/* ОСНОВНОЙ КОНТЕНТ */
.main-content {
	flex: 1;
	width: 100%;
	margin: 0;
	padding: 0;
	animation: fadeIn 0.5s ease-in;
	background: url('@/components/images/horizontal-furry-backflip-background.jpg') no-repeat center top fixed;
	background-size: 100% auto;

	position: relative;
}

@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateY(10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

/* ПОДВАЛ */
.app-footer {
	background: linear-gradient(180deg, rgba(10, 14, 39, 0.9) 0%, rgba(5, 8, 18, 0.95) 100%);
	color: #b0b0b0;
	text-align: center;
	padding: 20px;
	margin-top: auto;
	width: 100%;
	border-top: 1px solid rgba(68, 196, 255, 0.2);
	font-size: 12px;
	letter-spacing: 0.5px;
	box-shadow: 0 -4px 20px rgba(68, 196, 255, 0.05);
}

.app-footer p {
	margin: 0;
}
</style>
