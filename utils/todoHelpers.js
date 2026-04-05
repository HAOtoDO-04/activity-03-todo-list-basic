/**
 * Todo Helper Functions (100% Complete)
 *
 * Utility functions for todo list operations.
 */

/**
 * Generates a unique ID for new todos
 *
 * Uses timestamp + random number to ensure uniqueness
 *
 * @returns {string} Unique ID in format "todo_1234567890123"
 */
export function generateId() {
  return `todo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Validates todo text input
 *
 * @param {string} text - Text to validate
 * @returns {boolean} True if valid (not empty after trimming)
 */
export function isValidTodoText(text) {
  return text && text.trim().length > 0;
}

/**
 * Formats todo count for display
 *
 * @param {number} count - Number of todos
 * @returns {string} Formatted string (e.g., "5 tasks", "1 task")
 */
export function formatTodoCount(count) {
  return `${count} ${count === 1 ? 'task' : 'tasks'}`;
}
