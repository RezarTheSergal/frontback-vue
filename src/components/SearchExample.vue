<template>
	<div>
		<h2>Поиск пользователей</h2>
		
		<SearchInput
			v-model="searchQuery"
			label="Поиск по имени:"
			placeholder="Введите имя пользователя..."
			@search="performSearch"
			@reset="resetSearch"
		/>
		<p>Текущий запрос: "{{ searchQuery }}"</p>
		<div v-if="searchResults.length">
			<h3>Результаты поиска:</h3>
			<ul>
				<li v-for="user in searchResults" :key="user.id">
					{{ user.name }} - {{ user.email }}
				</li>
			</ul>
		</div>
		<div v-else-if="searchQuery">
			<p>Результатов не найдено</p>
		</div>
	</div>
</template>

<script>
import SearchInput from './SearchInput.vue'
import { ref, computed } from 'vue'

export default {
	components: {
		SearchInput,
	},
	setup() {
		const searchQuery = ref('')
		const users = ref([
			{ id: 1, name: 'Анна', email: 'anna@test.com' },
			{ id: 2, name: 'Борис', email: 'boris@test.com' },
			{ id: 3, name: 'Виктор', email: 'victor@test.com' },
		])

		const searchResults = computed(() => {
			if (!searchQuery.value) return []
			return users.value.filter(user =>
				user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
			)
		})

		const performSearch = () => {
			console.log('Выполняем поиск:', searchQuery.value)
		}

		const resetSearch = () => {
			searchQuery.value = ''
		}

		return {
			searchQuery,
			searchResults,
			performSearch,
			resetSearch,
		}
	},
}
</script>

<style scoped>
div {
	padding: 20px;
}

ul {
	list-style: none;
	padding: 0;
}

li {
	padding: 10px;
	border: 1px solid #ddd;
	margin: 5px 0;
	border-radius: 5px;
	background-color: #f9f9f9;
}
</style>
