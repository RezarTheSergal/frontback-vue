<template>
  <div class="demo-container">
    <h2>События и условия</h2>
    
    <div class="timer-section">
      <h3>Таймер изучения</h3>
      <div class="timer-display">
        {{ formatTime(elapsedTime) }}
      </div>
      <div class="timer-controls">
        <button @click="startTimer" :disabled="isRunning" class="timer-button start">Старт</button>
        <button @click="pauseTimer" :disabled="!isRunning" class="timer-button pause">Пауза</button>
        <button @click="resetTimer" class="timer-button reset">Сброс</button>
      </div>
    </div>
    
    <div class="sessions-section">
      <h3>Сессии изучения</h3>
      <div v-if="studySessions.length === 0" class="no-sessions">
        <p>Сессий пока нет. Запустите таймер!</p>
      </div>
      <div v-else class="sessions-list">
        <div v-for="session in sortedSessions" :key="session.id" class="session-item">
          <div class="session-info">
            <span class="session-date">{{ formatDate(session.date) }}</span>
            <span class="session-duration">{{ formatTime(session.duration) }}</span>
          </div>
          <button @click="removeSession(session.id)" class="delete-session">×</button>
        </div>
      </div>
      
      <div class="sessions-stats">
        <p>Всего сессий: {{ totalSessions }}</p>
        <p>Общее время: {{ formatTime(totalStudyTime) }}</p>
        <p>Средняя продолжительность: {{ formatTime(averageSessionTime) }}</p>
      </div>
    </div>
    
    <div class="quick-actions">
      <h3>Быстрые действия</h3>
      <div class="action-buttons">
        
        <button @click.prevent="addQuickSession(30)" class="action-button">+30 мин</button>
        <button @click.prevent="addQuickSession(60)" class="action-button">+1 час</button>
        
        <button @click.once="addOneTimeSession" class="action-button special">
          Одноразовая сессия
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onUnmounted } from "vue";
import { useNotificationsStore } from "../stores/notifications";

export default {
  name: "EventComputedDemo",
  setup() {
    const notificationsStore = useNotificationsStore();
    const elapsedTime = ref(0);
    const isRunning = ref(false);
    let timerInterval = null;
    const studySessions = ref([]);
    const totalSessions = computed(() => studySessions.value.length);
    const totalStudyTime = computed(() =>
      studySessions.value.reduce((total, session) => total + session.duration, 0)
    );
    const averageSessionTime = computed(() => {
      if (totalSessions.value === 0) return 0;
      return Math.round(totalStudyTime.value / totalSessions.value);
    });
    const sortedSessions = computed(() =>
      [...studySessions.value].sort((a, b) => new Date(b.date) - new Date(a.date))
    );
    const startTimer = () => {
      isRunning.value = true;
      notificationsStore.addNotification("Таймер запущен", "success", 2000);
      timerInterval = setInterval(() => {
        elapsedTime.value += 1;
      }, 1000);
    };
    const pauseTimer = () => {
      isRunning.value = false;
      notificationsStore.addNotification("Таймер приостановлен", "warning", 2000);
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
    };
    const resetTimer = () => {
      pauseTimer();
      if (elapsedTime.value >= 30) {
        studySessions.value.push({
          id: Date.now(),
          date: new Date().toISOString(),
          duration: elapsedTime.value,
        });
        notificationsStore.addNotification(
          `Сессия сохранена (${Math.floor(elapsedTime.value / 60)} мин)`,
          "success",
          2000
        );
      }
      elapsedTime.value = 0;
    };
    const removeSession = (sessionId) => {
      studySessions.value = studySessions.value.filter((session) => session.id !== sessionId);
      notificationsStore.addNotification("Сессия удалена", "info", 2000);
    };
    const addQuickSession = (minutes) => {
      const duration = minutes * 60;
      studySessions.value.push({
        id: Date.now(),
        date: new Date().toISOString(),
        duration: duration,
      });
      notificationsStore.addNotification(
        `Добавлена сессия ${minutes} минут`,
        "success",
        2000
      );
    };
    const addOneTimeSession = () => {
      addQuickSession(45);
      notificationsStore.addNotification(
        "Одноразовая сессия добавлена! Эта кнопка больше не сработает.",
        "info",
        3000
      );
    };
    const formatTime = (seconds) => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleString("ru-RU");
    };
    onUnmounted(() => {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    });
    return {
      elapsedTime,
      isRunning,
      studySessions,
      totalSessions,
      totalStudyTime,
      averageSessionTime,
      sortedSessions,
      startTimer,
      pauseTimer,
      resetTimer,
      removeSession,
      addQuickSession,
      addOneTimeSession,
      formatTime,
      formatDate,
    };
  },
};
</script>

<style scoped>
.demo-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 0;
  background: transparent;
}

.timer-section {
  text-align: center;
  margin-bottom: 30px;
  padding: 30px;
  background: var(--cp-bg-card);
  border: 1px solid var(--cp-border);
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1), inset 0 0 20px rgba(0, 255, 255, 0.05);
}

.timer-display {
  font-size: 3.5rem;
  font-weight: bold;
  margin: 20px 0;
  color: var(--cp-success);
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 20px rgba(0, 255, 65, 0.4);
  letter-spacing: 2px;
}

.timer-controls {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.timer-button {
  padding: 10px 20px;
  border: 2px solid;
  border-radius: 2px;
  cursor: pointer;
  font-weight: 600;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: 'Courier New', monospace;
  transition: all 0.3s ease;
}

.timer-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.timer-button.start {
  background: rgba(0, 255, 65, 0.1);
  border-color: var(--cp-success);
  color: var(--cp-success);
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.2);
}

.timer-button.start:hover:not(:disabled) {
  background: rgba(0, 255, 65, 0.2);
  box-shadow: 0 0 20px var(--cp-success);
  text-shadow: 0 0 10px var(--cp-success);
}

.timer-button.pause {
  background: rgba(255, 190, 11, 0.1);
  border-color: var(--cp-warning);
  color: var(--cp-warning);
  box-shadow: 0 0 10px rgba(255, 190, 11, 0.2);
}

.timer-button.pause:hover:not(:disabled) {
  background: rgba(255, 190, 11, 0.2);
  box-shadow: 0 0 20px var(--cp-warning);
  text-shadow: 0 0 10px var(--cp-warning);
}

.timer-button.reset {
  background: rgba(255, 0, 110, 0.1);
  border-color: var(--cp-danger);
  color: var(--cp-danger);
  box-shadow: 0 0 10px rgba(255, 0, 110, 0.2);
}

.timer-button.reset:hover:not(:disabled) {
  background: rgba(255, 0, 110, 0.2);
  box-shadow: 0 0 20px var(--cp-danger);
  text-shadow: 0 0 10px var(--cp-danger);
}

.sessions-section {
  margin-bottom: 30px;
}

.sessions-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.session-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: var(--cp-bg-card);
  border: 1px solid var(--cp-border);
  border-radius: 4px;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.05);
}

.session-item:hover {
  border-color: var(--cp-primary);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.15);
}

.session-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.session-date {
  font-size: 12px;
  color: var(--cp-text-muted);
  letter-spacing: 0.3px;
}

.session-duration {
  font-weight: bold;
  color: var(--cp-success);
  font-family: 'Courier New', monospace;
  font-size: 14px;
}

.delete-session {
  background: rgba(255, 0, 110, 0.1);
  border: 1px solid var(--cp-danger);
  border-radius: 2px;
  font-size: 18px;
  cursor: pointer;
  color: var(--cp-danger);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-weight: 600;
  box-shadow: 0 0 10px rgba(255, 0, 110, 0.1);
}

.delete-session:hover {
  background: rgba(255, 0, 110, 0.2);
  box-shadow: 0 0 15px var(--cp-danger);
  transform: scale(1.1);
}

.no-sessions {
  text-align: center;
  padding: 30px;
  color: var(--cp-text-muted);
  background: var(--cp-bg-card);
  border: 2px dashed var(--cp-border);
  border-radius: 4px;
  font-style: italic;
  letter-spacing: 0.5px;
}

.sessions-stats {
  padding: 20px;
  background: var(--cp-bg-card);
  border: 1px solid var(--cp-border);
  border-radius: 4px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.05);
}

.sessions-stats p {
  margin: 8px 0;
  color: var(--cp-text-secondary);
  font-size: 13px;
  letter-spacing: 0.3px;
}

.quick-actions {
  text-align: center;
  padding: 25px;
  background: var(--cp-bg-card);
  border: 1px solid var(--cp-border);
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.1), inset 0 0 20px rgba(0, 255, 255, 0.05);
}

.quick-actions h3 {
  margin: 0 0 20px 0;
  color: var(--cp-primary);
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.action-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.action-button {
  padding: 10px 20px;
  background: rgba(0, 255, 255, 0.1);
  border: 2px solid var(--cp-primary);
  color: var(--cp-primary);
  border-radius: 2px;
  cursor: pointer;
  font-weight: 600;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: 'Courier New', monospace;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.1);
}

.action-button:hover {
  background: rgba(0, 255, 255, 0.2);
  box-shadow: 0 0 20px var(--cp-primary);
  text-shadow: 0 0 10px var(--cp-primary);
  transform: translateY(-2px);
}

.action-button.special {
  background: rgba(0, 255, 65, 0.1);
  border-color: var(--cp-success);
  color: var(--cp-success);
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.1);
}

.action-button.special:hover {
  background: rgba(0, 255, 65, 0.2);
  border-color: var(--cp-success);
  box-shadow: 0 0 20px var(--cp-success);
  text-shadow: 0 0 10px var(--cp-success);
}
</style>
