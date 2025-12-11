<template>
	<div class="user-settings">
		<div class="settings-header">
			<h1>Настройки</h1>
			<p>Управление параметрами приложения</p>
		</div>

		<div class="settings-container">
			<div class="settings-tabs">
				<router-link to="/settings/general" class="tab">Основные</router-link>
				<router-link to="/settings/security" class="tab"
					>Безопасность</router-link
				>
				<router-link to="/settings/notifications" class="tab"
					>Уведомления</router-link
				>
			</div>
			<div class="settings-content">
				<p>Активная вкладка: {{ currentTab }}</p>
				<router-view :current-tab="currentTab"></router-view>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UserSettings',
	props: {
		tab: {
			type: String,
			default: 'general',
		},
	},
	computed: {
		currentTab() {
			return this.tab || 'general'
		},
	},
}
</script>

<style scoped>
.user-settings {
	width: 100%;
	background: transparent;
	display: flex;
	flex-direction: column;
}

.settings-header {
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

.settings-header h1 {
	margin-bottom: 0.5rem;
	font-size: 32px;
	font-weight: 700;
	text-shadow: 0 0 15px rgba(68, 196, 255, 0.3);
	color: #72e9ed;
}

.settings-header p {
	opacity: 0.9;
	font-size: 16px;
	color: rgba(68, 196, 255, 0.7);
	letter-spacing: 0.5px;
}

.settings-container {
	margin: 0;
	padding: 20px;
	background: rgba(5, 8, 18, 0.4);
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
	width: 100%;
}

.settings-tabs {
	display: flex;
	gap: 0;
	margin: 0 0 20px 0;
	border-bottom: 1px solid rgba(68, 196, 255, 0.2);
}

.tab {
	padding: 15px 25px;
	text-decoration: none;
	color: rgba(68, 196, 255, 0.6);
	border: none;
	border-bottom: 3px solid transparent;
	border-radius: 0;
	font-weight: 600;
	font-size: 13px;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	cursor: pointer;
	transition: all 0.3s ease;
	font-family: 'Courier New', monospace;
}

.tab:hover {
	color: #72e9ed;
	background: rgba(68, 196, 255, 0.05);
}

.tab.router-link-active {
	background-color: transparent;
	color: #72e9ed;
	border-bottom-color: #72e9ed;
	text-shadow: 0 0 10px rgba(68, 196, 255, 0.3);
}

.settings-content {
	padding: 20px;
	border: 1px solid rgba(68, 196, 255, 0.2);
	border-radius: 4px;
	background: rgba(0, 0, 0, 0.3);
	color: rgba(68, 196, 255, 0.8);
}
</style>
