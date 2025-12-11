// ============================================
// ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ СИСТЕМЫ УВЕДОМЛЕНИЙ
// ============================================

/**
 * 1. УСПЕШНОЕ ДЕЙСТВИЕ
 */
import { useNotificationsStore } from '@/stores/notifications'

const notificationsStore = useNotificationsStore()

// Пример: сохранение данных
const saveData = async () => {
  try {
    await api.save(data)
    notificationsStore.addNotification('✓ Данные успешно сохранены!', 'success', 3000)
  } catch (error) {
    notificationsStore.addNotification('✗ Ошибка при сохранении', 'error', 4000)
  }
}

/**
 * 2. ОШИБКА
 */
const loadData = async () => {
  try {
    const response = await api.load()
    return response
  } catch (error) {
    notificationsStore.addNotification(
      `Ошибка загрузки: ${error.message}`,
      'error',
      5000
    )
  }
}

/**
 * 3. ПРЕДУПРЕЖДЕНИЕ
 */
const deleteItem = (id) => {
  if (!id) {
    notificationsStore.addNotification(
      'Выберите элемент для удаления',
      'warning',
      3000
    )
    return
  }
  // ... логика удаления
}

/**
 * 4. ИНФОРМАЦИЯ
 */
const showInfo = () => {
  notificationsStore.addNotification(
    'Операция выполняется...',
    'info',
    0 // 0 = не закроется автоматически, нужно закрыть вручную
  )
}

/**
 * 5. БЕЗ АВТОЗАКРЫТИЯ (для долгих операций)
 */
const longOperation = async () => {
  const notifId = notificationsStore.addNotification(
    'Загрузка больших данных...',
    'info',
    0 // Не будет закрыто автоматически
  )

  try {
    await heavyComputation()
    notificationsStore.removeNotification(notifId)
    notificationsStore.addNotification(
      'Загрузка завершена',
      'success',
      3000
    )
  } catch (error) {
    notificationsStore.removeNotification(notifId)
    notificationsStore.addNotification(
      'Ошибка загрузки',
      'error',
      4000
    )
  }
}

/**
 * 6. ВАЛИДАЦИЯ ФОРМЫ
 */
const submitForm = (formData) => {
  const errors = validateForm(formData)

  if (errors.length > 0) {
    notificationsStore.addNotification(
      `Ошибки: ${errors.join(', ')}`,
      'warning',
      4000
    )
    return false
  }

  notificationsStore.addNotification(
    'Форма отправлена успешно',
    'success',
    3000
  )
  return true
}

/**
 * 7. ДВОЙНОЕ ПОДТВЕРЖДЕНИЕ
 */
const dangerousAction = () => {
  notificationsStore.addNotification(
    'Это опасное действие! Подтвердите еще раз.',
    'warning',
    5000
  )
  // После подтверждения:
  // notificationsStore.addNotification('Действие выполнено', 'success', 3000)
}

/**
 * 8. В КОМПОНЕНТЕ (Vue 3)
 */
// MyComponent.vue
export default {
  name: 'MyComponent',
  setup() {
    const notificationsStore = useNotificationsStore()

    const handleClick = () => {
      notificationsStore.addNotification(
        'Кнопка нажата!',
        'success',
        2000
      )
    }

    return {
      handleClick,
    }
  },
}

/**
 * ТИПЫ УВЕДОМЛЕНИЙ И ИХ ЦВЕТА:
 * 
 * ✓ success  - #00ff41 (зеленый) - успешные операции
 * ✗ error    - #ff006e (красный) - ошибки
 * ! warning  - #ffbe0b (желтый) - предупреждения
 * ℹ info     - #00ffff (голубой) - информация
 */

/**
 * ПАРАМЕТРЫ ФУНКЦИИ addNotification:
 * 
 * @param {string} message - Текст уведомления
 * @param {string} type - Тип: 'success' | 'error' | 'warning' | 'info'
 * @param {number} duration - Время показа в мс (0 = не закроется)
 * 
 * @return {string} id уведомления (для удаления вручную)
 */

/**
 * МЕТОДЫ STORE:
 * 
 * addNotification(message, type, duration) - добавить уведомление
 * removeNotification(id) - удалить конкретное уведомление
 * clearAll() - удалить все уведомления
 */

export { notificationsStore }
