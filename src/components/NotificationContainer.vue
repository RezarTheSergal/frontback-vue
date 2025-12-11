<template>
  <div class="notification-container">
    <transition-group name="notification" tag="div">
      <div
        v-for="notification in notifications"
        :key="notification.id"
        class="notification"
        :class="`notification-${notification.type}`"
      >
        <div class="notification-content">
          <span class="notification-icon">{{ getIcon(notification.type) }}</span>
          <span class="notification-message">{{ notification.message }}</span>
        </div>
        <button
          class="notification-close"
          @click="removeNotification(notification.id)"
          aria-label="Закрыть уведомление"
        >
          ×
        </button>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useNotificationsStore } from '../stores/notifications'

export default {
  name: 'NotificationContainer',
  setup() {
    const notificationsStore = useNotificationsStore()
    const notifications = computed(() => notificationsStore.notifications)

    const getIcon = (type: string): string => {
      const icons: Record<string, string> = {
        success: '✓',
        error: '!',
        warning: '⚠',
        info: 'ℹ',
      }
      return icons[type] || 'ℹ'
    }

    const removeNotification = (id: string) => {
      notificationsStore.removeNotification(id)
    }

    return {
      notifications,
      getIcon,
      removeNotification,
    }
  },
}
</script>

<style scoped>
.notification-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  pointer-events: none;
}

.notification {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 255, 255, 0.1);
  border: 2px solid #00ffff;
  border-radius: 4px;
  padding: 12px 16px;
  margin-bottom: 10px;
  min-width: 300px;
  pointer-events: auto;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1);
  animation: glitch 0.3s ease-out;
}

.notification-success {
  border-color: #00ff41;
  background: rgba(0, 255, 65, 0.1);
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.3), inset 0 0 20px rgba(0, 255, 65, 0.1);
}

.notification-error {
  border-color: #ff006e;
  background: rgba(255, 0, 110, 0.1);
  box-shadow: 0 0 20px rgba(255, 0, 110, 0.3), inset 0 0 20px rgba(255, 0, 110, 0.1);
}

.notification-warning {
  border-color: #ffbe0b;
  background: rgba(255, 190, 11, 0.1);
  box-shadow: 0 0 20px rgba(255, 190, 11, 0.3), inset 0 0 20px rgba(255, 190, 11, 0.1);
}

.notification-info {
  border-color: #00d9ff;
  background: rgba(0, 217, 255, 0.1);
  box-shadow: 0 0 20px rgba(0, 217, 255, 0.3), inset 0 0 20px rgba(0, 217, 255, 0.1);
}

.notification-content {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
}

.notification-icon {
  font-weight: bold;
  font-size: 16px;
  flex-shrink: 0;
}

.notification-success .notification-icon {
  color: #00ff41;
}

.notification-error .notification-icon {
  color: #ff006e;
}

.notification-warning .notification-icon {
  color: #ffbe0b;
}

.notification-info .notification-icon {
  color: #00d9ff;
}

.notification-message {
  color: #ffffff;
  font-size: 14px;
  line-height: 1.4;
}

.notification-close {
  background: none;
  border: none;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
  padding: 0 0 0 10px;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.notification-close:hover {
  opacity: 1;
}

/* Анимация появления */
@keyframes glitch {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Анимация исчезновения */
.notification-leave-active {
  animation: slideOut 0.3s ease-out;
}

@keyframes slideOut {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(20px);
  }
}

.notification-move {
  transition: all 0.3s ease;
}
</style>
