<template>
  <div class="demo-container">
    <h2>Списки</h2>
    
    <div class="add-form">
      <input
        v-model="newTechName"
        placeholder="Введите название технологии"
        class="text-input"
        @keyup.enter="addTechnology"
      />
      <button @click="addTechnology" class="add-button">Добавить</button>
    </div>
    
    <div class="controls">
      <button @click="showCompleted = !showCompleted" class="toggle-button">
        {{ showCompleted ? "Скрыть" : "Показать" }} завершенные
      </button>
      <button @click="sortBy = sortBy === 'name' ? 'date' : 'name'" class="toggle-button">
        Сортировать по: {{ sortBy === "name" ? "названию" : "дате" }}
      </button>
    </div>
    
    <div v-if="technologies.length === 0" class="empty-state">
      <p>Список технологий пуст. Добавьте первую технологию!</p>
    </div>
    
    <div v-else class="tech-list">
      <div
        v-for="tech in sortedTechnologies"
        :key="tech.id"
        class="tech-item"
        :class="{ completed: tech.completed }"
      >
        <div class="tech-info">
          <h3>{{ tech.name }}</h3>
          <span class="tech-date">Добавлено: {{ formatDate(tech.createdAt) }} </span>
        </div>
        <div class="tech-actions">
          
          <button
            v-show="!tech.completed"
            @click="completeTechnology(tech.id)"
            class="complete-button"
          >
            Завершить
          </button>
          <button @click="removeTechnology(tech.id)" class="remove-button">Удалить</button>
        </div>
      </div>
    </div>
    
    <div class="stats">
      <h3>Статистика:</h3>
      <p>Всего технологий: {{ technologies.length }}</p>
      <p>Активных: {{ activeCount }}</p>
      <p>Завершенных: {{ completedCount }}</p>
      
      <div v-if="completedCount > 0" class="progress-section">
        <p>Прогресс: {{ progressPercentage }}%</p>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
        </div>
      </div>
      <div v-else>
        <p>Начните изучать технологии чтобы увидеть прогресс!</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useNotificationsStore } from "../stores/notifications";

export default {
  name: "ConditionalListDemo",
  setup() {
    const notificationsStore = useNotificationsStore();
    const newTechName = ref("");
    const technologies = ref([]);
    const showCompleted = ref(true);
    const sortBy = ref("date");
    const activeCount = computed(() => technologies.value.filter((tech) => !tech.completed).length);
    const completedCount = computed(
      () => technologies.value.filter((tech) => tech.completed).length
    );
    const progressPercentage = computed(() => {
      if (technologies.value.length === 0) return 0;
      return Math.round((completedCount.value / technologies.value.length) * 100);
    });
    const sortedTechnologies = computed(() => {
      const techsToShow = showCompleted.value
        ? technologies.value
        : technologies.value.filter((tech) => !tech.completed);
      return [...techsToShow].sort((a, b) => {
        if (sortBy.value === "name") {
          return a.name.localeCompare(b.name);
        } else {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
      });
    });
    const addTechnology = () => {
      if (!newTechName.value.trim()) {
        notificationsStore.addNotification(
          "Введите название технологии",
          "warning",
          2000
        );
        return;
      }
      technologies.value.push({
        id: Date.now(),
        name: newTechName.value.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
      });
      notificationsStore.addNotification(
        `Технология "${newTechName.value.trim()}" добавлена`,
        "success",
        2000
      );
      newTechName.value = "";
    };
    const removeTechnology = (id) => {
      const tech = technologies.value.find((t) => t.id === id);
      technologies.value = technologies.value.filter((tech) => tech.id !== id);
      notificationsStore.addNotification(
        `Технология "${tech?.name}" удалена`,
        "info",
        2000
      );
    };
    const completeTechnology = (id) => {
      const tech = technologies.value.find((tech) => tech.id === id);
      if (tech) {
        tech.completed = true;
        notificationsStore.addNotification(
          `Вы завершили "${tech.name}"`,
          "success",
          2000
        );
      }
    };
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("ru-RU");
    };
    return {
      newTechName,
      technologies,
      showCompleted,
      sortBy,
      activeCount,
      completedCount,
      progressPercentage,
      sortedTechnologies,
      addTechnology,
      removeTechnology,
      completeTechnology,
      formatDate,
    };
  },
};
</script>

<style scoped>
.demo-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0;
}

.add-form {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  padding: 20px;
  background: var(--cp-bg-card);
  border: 1px solid var(--cp-border);
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1), inset 0 0 20px rgba(0, 255, 255, 0.05);
}

.text-input {
  flex: 1;
  padding: 12px 15px;
  background: rgba(20, 34, 71, 0.6);
  border: 1px solid var(--cp-border);
  color: var(--cp-text-primary);
  border-radius: 2px;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.5px;
  font-size: 14px;
  transition: all 0.3s ease;
}

.text-input:focus {
  outline: none;
  border-color: var(--cp-primary);
  background: rgba(20, 34, 71, 0.8);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3), inset 0 0 15px rgba(0, 255, 255, 0.05);
}

.text-input::placeholder {
  color: var(--cp-text-muted);
}

.controls {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.controls .toggle-button {
  flex: 1;
  min-width: 200px;
}

.tech-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
}

.tech-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px;
  background: var(--cp-bg-card);
  border: 1px solid var(--cp-border);
  border-radius: 4px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  gap: 15px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1), inset 0 0 20px rgba(0, 255, 255, 0.05);
}

.tech-item:hover {
  border-color: var(--cp-primary);
  background: rgba(20, 34, 71, 0.6);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.2), inset 0 0 30px rgba(0, 255, 255, 0.08);
  transform: translateY(-2px);
}

.tech-item.completed {
  background: rgba(0, 255, 65, 0.08);
  border-color: var(--cp-success);
}

.tech-item.completed:hover {
  box-shadow: 0 0 30px rgba(0, 255, 65, 0.2), inset 0 0 30px rgba(0, 255, 65, 0.08);
}

.tech-info {
  flex: 1;
  min-width: 200px;
}

.tech-info h3 {
  margin: 0 0 6px 0;
  color: var(--cp-primary);
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tech-item.completed .tech-info h3 {
  color: var(--cp-success);
  text-decoration: line-through;
  opacity: 0.8;
}

.tech-date {
  font-size: 12px;
  color: var(--cp-text-muted);
  letter-spacing: 0.3px;
}

.tech-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.complete-button {
  padding: 10px 18px;
  background: rgba(0, 255, 65, 0.1);
  border: 2px solid var(--cp-success);
  color: var(--cp-success);
  border-radius: 2px;
  cursor: pointer;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.2), inset 0 0 10px rgba(0, 255, 65, 0.05);
}

.complete-button:hover {
  background: rgba(0, 255, 65, 0.2);
  box-shadow: 0 0 20px var(--cp-success), inset 0 0 20px rgba(0, 255, 65, 0.1);
  text-shadow: 0 0 10px var(--cp-success);
  transform: translateY(-2px);
}

.remove-button {
  padding: 10px 18px;
  background: rgba(255, 0, 110, 0.1);
  border: 2px solid var(--cp-danger);
  color: var(--cp-danger);
  border-radius: 2px;
  cursor: pointer;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 0, 110, 0.2), inset 0 0 10px rgba(255, 0, 110, 0.05);
}

.remove-button:hover {
  background: rgba(255, 0, 110, 0.2);
  box-shadow: 0 0 20px var(--cp-danger), inset 0 0 20px rgba(255, 0, 110, 0.1);
  text-shadow: 0 0 10px var(--cp-danger);
  transform: translateY(-2px);
}

.empty-state {
  text-align: center;
  padding: 50px;
  background: var(--cp-bg-card);
  border: 2px dashed var(--cp-border);
  border-radius: 4px;
  color: var(--cp-text-muted);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.05), inset 0 0 20px rgba(0, 255, 255, 0.02);
}

.empty-state p {
  margin: 0;
  font-size: 14px;
  letter-spacing: 0.5px;
}

.stats {
  margin-top: 30px;
  padding: 25px;
  background: var(--cp-bg-card);
  border: 1px solid var(--cp-border);
  border-radius: 4px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1), inset 0 0 20px rgba(0, 255, 255, 0.05);
}

.stats h3 {
  margin: 0 0 15px 0;
  color: var(--cp-primary);
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stats p {
  margin: 8px 0;
  color: var(--cp-text-secondary);
  font-size: 14px;
  letter-spacing: 0.3px;
}

.progress-section {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--cp-border);
}

.progress-bar {
  width: 100%;
  height: 12px;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid var(--cp-primary);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 10px;
  box-shadow: inset 0 0 10px rgba(0, 255, 255, 0.1);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--cp-primary), var(--cp-success));
  transition: width 0.4s ease;
  box-shadow: 0 0 10px var(--cp-primary);
}
</style>
