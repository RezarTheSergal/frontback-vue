<template>
	<div class="home-page">
		<div class="welcome-section">
			<h1>Сайт как результат изучения Vue.js</h1>
		</div>

		<nav class="examples-navigation">
			<button
				@click="currentDemo = 'reactive'"
				:class="{ active: currentDemo === 'reactive' }"
				class="nav-button"
			>
				Реактивность
			</button>
			<button
				@click="currentDemo = 'conditional'"
				:class="{ active: currentDemo === 'conditional' }"
				class="nav-button"
			>
				Списки и условия
			</button>
			<button
				@click="currentDemo = 'events'"
				:class="{ active: currentDemo === 'events' }"
				class="nav-button"
			>
				События
			</button>
			<button
				@click="currentDemo = 'usercards'"
				:class="{ active: currentDemo === 'usercards' }"
				class="nav-button"
			>
				Компоненты
			</button>
		</nav>

		<main class="demo-content">
			<ReactiveDemo v-if="currentDemo === 'reactive'" />
			<ConditionalListDemo v-else-if="currentDemo === 'conditional'" />
			<EventComputedDemo v-else-if="currentDemo === 'events'" />
			<UserCards v-else-if="currentDemo === 'usercards'" />
			<div v-else class="welcome-message">
				<h2>Добро пожаловать!</h2>
				<p>Выберите пример для изучения из навигации выше.</p>
			</div>
		</main>
	</div>
</template>

<script>
import ReactiveDemo from '../components/ReactiveDemo.vue'
import ConditionalListDemo from '../components/ConditionalListDemo.vue'
import EventComputedDemo from '../components/EventComputedDemo.vue'
import UserCards from '../components/UserCards.vue'
import { ref } from 'vue'

export default {
	name: 'HomePage',
	components: {
		ReactiveDemo,
		ConditionalListDemo,
		EventComputedDemo,
		UserCards,
	},
	setup() {
		const currentDemo = ref('reactive')

		return {
			currentDemo,
		}
	},
}
</script>

<style scoped>
.home-page {
	width: 100%;
	background: transparent;
	padding: 0 20px;
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
}

.welcome-section {
	text-align: center;
	padding: 50px 20px;
	min-height: 200px;
	background: linear-gradient(135deg, rgba(68, 196, 255, 0.1) 0%, rgba(237, 114, 233, 0.08) 100%);
	border: 1px solid var(--cp-border);
	border-radius: 4px;
	color: var(--cp-primary);
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: var(--cp-bg-card);
	box-shadow: 0 0 30px rgba(68, 196, 255, 0.15), inset 0 0 30px rgba(68, 196, 255, 0.05);
}

.welcome-section h1 {
	margin-bottom: 15px;
	font-size: 2.5em;
	text-transform: uppercase;
	letter-spacing: 2px;
	text-shadow: 0 0 15px rgba(68, 196, 255, 0.3);
}

.welcome-section p {
	opacity: 0.9;
	font-size: 15px;
	color: var(--cp-text-secondary);
	letter-spacing: 0.5px;
}

.examples-navigation {
	display: flex;
	justify-content: center;
	gap: 12px;
	padding: 20px;
	background: var(--cp-bg-card);
	border: 1px solid var(--cp-border);
	border-radius: 4px;
	flex-wrap: wrap;
	margin-bottom: 30px;
	box-shadow: 0 0 20px rgba(68, 196, 255, 0.1), inset 0 0 20px rgba(68, 196, 255, 0.05);
}

.nav-button {
	padding: 12px 24px;
	border: 1.5px solid var(--cp-primary);
	background: linear-gradient(135deg, rgba(68, 196, 255, 0.12) 0%, rgba(237, 114, 233, 0.08) 100%), url('@/components/images/horizontal-purple-mountains.jpg');
	background-size: cover;
	color: var(--cp-primary);
	border-radius: 8px;
	cursor: pointer;
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 0.8px;
	font-weight: 600;
	font-family: 'Courier New', monospace;
	transition: all 0.3s ease;
	box-shadow: 0 0 10px rgba(68, 196, 255, 0.1), inset 0 0 10px rgba(68, 196, 255, 0.05);
}

.nav-button:hover {
	background: linear-gradient(135deg, rgba(68, 196, 255, 0.18) 0%, rgba(237, 114, 233, 0.12) 100%), url('@/components/images/horizontal-purple-mountains.jpg');
	background-size: cover;
	box-shadow: 0 0 20px var(--cp-primary), inset 0 0 20px rgba(68, 196, 255, 0.1);
	transform: translateY(-2px);
	text-shadow: 0 0 10px var(--cp-primary);
}

.nav-button.active {
	background: linear-gradient(135deg, rgba(68, 196, 255, 0.2) 0%, rgba(237, 114, 233, 0.15) 100%), url('@/components/images/horizontal-purple-mountains.jpg');
	background-size: cover;
	border-color: var(--cp-primary);
	color: var(--cp-primary);
	box-shadow: 0 0 20px var(--cp-primary), inset 0 0 20px rgba(68, 196, 255, 0.1);
	text-shadow: 0 0 10px var(--cp-primary);
}

.demo-content {
	background: var(--cp-bg-card);
	border: 1px solid var(--cp-border);
	border-radius: 4px;
	padding: 30px;
	margin-bottom: 30px;
	box-shadow: 0 0 20px rgba(68, 196, 255, 0.1), inset 0 0 20px rgba(68, 196, 255, 0.05);
	animation: fadeIn 0.4s ease-in;
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

.welcome-message {
	text-align: center;
	padding: 50px 20px;
	color: var(--cp-text-secondary);
	background: transparent;
}

.welcome-message h2 {
	margin-bottom: 15px;
	color: var(--cp-primary);
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 1.8em;
}

.welcome-message p {
	font-size: 14px;
	letter-spacing: 0.5px;
}
</style>
