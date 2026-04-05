import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

/**
 * TodoItem Component (100% Complete)
 *
 * Displays a single todo item with:
 * - Checkbox that shows completion status
 * - Text with strikethrough when completed
 * - Delete button (red X)
 *
 * Props:
 * - todo: Object with { id, text, completed }
 * - onToggle: Function to call when checkbox pressed
 * - onDelete: Function to call when delete button pressed
 */
export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <View style={styles.container}>
      {/* Checkbox Button */}
      <TouchableOpacity
        style={[styles.checkbox, todo.completed && styles.checkboxCompleted]}
        onPress={onToggle}
        activeOpacity={0.7}
      >
        {todo.completed && (
          <Text style={styles.checkmark}>✓</Text>
        )}
      </TouchableOpacity>

      {/* Todo Text */}
      <Text
        style={[
          styles.text,
          todo.completed && styles.textCompleted
        ]}
      >
        {todo.text}
      </Text>

      {/* Delete Button */}
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={onDelete}
        activeOpacity={0.7}
      >
        <Text style={styles.deleteText}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 12,
    marginVertical: 4,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#BDBDBD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxCompleted: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
  textCompleted: {
    color: '#9E9E9E',
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFEBEE',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  deleteText: {
    color: '#F44336',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
