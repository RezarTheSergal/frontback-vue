<template>
	<div>
		<h2>Список пользователей</h2>
		
		<UserCard
			:user="adminUser"
			:is-active="true"
			@user-clicked="handleUserClick"
		>
			
			<!-- <template #actions>
				<button @click="editUser(adminUser)">Редактировать</button>
			</template> -->
			
			<p>Администратор системы</p>
		</UserCard>
		<UserCard
			v-for="user in users"
			:key="user.id"
			:user="user"
			@user-clicked="handleUserClick"
		/>
	</div>
</template>

<script>
import UserCard from './UserCard.vue'
import { useNotificationsStore } from '../stores/notifications'

export default {
	components: {
		UserCard,
	},
	setup() {
		const notificationsStore = useNotificationsStore()

		return {
			notificationsStore,
		}
	},
	data() {
		return {
			adminUser: {
				id: 1,
				name: 'Алексей Алексов',
				email: 'alex@german.com',
				role: 'admin',
			},
			users: [
				{
					id: 2,
					name: 'Петр Сидоров',
					email: 'petr@example.com',
					role: 'user',
				},
			],
		}
	},
	methods: {
		handleUserClick(user) {
			this.notificationsStore.addNotification(
				`Вы выбрали ${user.name}`,
				'info',
				2000
			)
		},
		editUser(user) {
			this.notificationsStore.addNotification(
				`Редактирование ${user.name}`,
				'info',
				2000
			)
		},
	},
}
</script>

<style scoped>
div {
	padding: 20px;
}
</style>
