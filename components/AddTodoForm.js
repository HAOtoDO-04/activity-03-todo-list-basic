import { View, TextInput, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';

/**
 * AddTodoForm Component (100% Complete)
 *
 * Input form for adding new todos with:
 * - Text input field with placeholder
 * - Add button (blue, touch-optimized)
 * - Auto-clear after submission
 *
 * Props:
 * - value: Current input text value
 * - onChangeText: Function to update input text
 * - onSubmit: Function to call when Add button pressed
 */
export default function AddTodoForm({ value, onChangeText, onSubmit }) {
  return (
    <View style={styles.container}>
      {/* Text Input */}
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        placeholderTextColor="#9E9E9E"
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        returnKeyType="done"
        blurOnSubmit={false}
      />

      {/* Add Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={onSubmit}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingBottom: Platform.OS === 'ios' ? 24 : 12,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#212121',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48, // Touch target guideline
    shadowColor: '#2196F3',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
