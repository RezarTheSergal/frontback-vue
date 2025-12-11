<template>
	<div class="user-card" :class="user.role">
		<h3>{{ user.name }}</h3>
		<p>Email: {{ user.email }}</p>
		<p>Роль: {{ user.role }}</p>
		<p>Статус: {{ isActive ? 'Активен' : 'Неактивен' }}</p>
		
		<slot name="actions"></slot>
		
		<slot>
			<p>Нет дополнительной информации</p>
		</slot>
	</div>
</template>

<script>
export default {
	name: 'UserCard',
	props: {
		user: {
			type: Object,
			required: true,
			validator: value => {
				return value.name && value.email
			},
		},
		isActive: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			localClicks: 0,
		}
	},
	methods: {
		handleClick() {
			this.localClicks++
			this.$emit('user-clicked', this.user)
		},
	},
}
</script>

<style scoped>
.user-card {
	border: 1px solid var(--cp-border);
	padding: 20px;
	margin: 12px 0;
	border-radius: 4px;
	background: var(--cp-bg-card);
	transition: all 0.3s ease;
	box-shadow: 0 0 20px rgba(68, 196, 255, 0.1), inset 0 0 20px rgba(68, 196, 255, 0.05);
	cursor: pointer;
	/* ФОНОВОЕ ИЗОБРАЖЕНИЕ: профильная текстура */
	background: url('@/images/verticle-abstraction.jpg'), var(--cp-bg-card);
	background-size: cover, cover;
}

.user-card:hover {
	border-color: var(--cp-primary);
	box-shadow: 0 0 30px rgba(68, 196, 255, 0.2), inset 0 0 30px rgba(68, 196, 255, 0.08);
	transform: translateY(-2px);
}

.user-card.admin {
	border-color: var(--cp-danger);
	background: rgba(255, 0, 110, 0.08), var(--cp-bg-card);
}

.user-card.admin:hover {
	border-color: var(--cp-danger);
	box-shadow: 0 0 30px rgba(255, 0, 110, 0.2), inset 0 0 30px rgba(255, 0, 110, 0.08);
}

.user-card.user {
	border-color: var(--cp-primary);
	background: rgba(68, 196, 255, 0.05), var(--cp-bg-card);
}

.user-card h3 {
	margin: 0 0 12px 0;
	color: var(--cp-primary);
	font-size: 16px;
	text-transform: uppercase;
	letter-spacing: 0.8px;
}

.user-card.admin h3 {
	color: var(--cp-danger);
	text-shadow: 0 0 10px rgba(255, 0, 110, 0.3);
}

.user-card p {
	margin: 8px 0;
	color: var(--cp-text-secondary);
	font-size: 13px;
	letter-spacing: 0.3px;
}

.user-card p strong {
	color: var(--cp-primary);
	font-weight: 600;
}

.user-card button {
	padding: 10px 18px;
	background: linear-gradient(135deg, rgba(68, 196, 255, 0.12) 0%, rgba(237, 114, 233, 0.08) 100%);
	border: 1.5px solid var(--cp-primary);
	color: var(--cp-primary);
	border-radius: 6px;
	cursor: pointer;
	font-size: 11px;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	font-family: 'Courier New', monospace;
	transition: all 0.3s ease;
	margin-top: 12px;
	box-shadow: 0 0 10px rgba(68, 196, 255, 0.2);
}

.user-card button:hover {
	background: linear-gradient(135deg, rgba(68, 196, 255, 0.18) 0%, rgba(237, 114, 233, 0.12) 100%);
	box-shadow: 0 0 20px var(--cp-primary);
	text-shadow: 0 0 10px var(--cp-primary);
	transform: translateY(-1px);
}
</style>