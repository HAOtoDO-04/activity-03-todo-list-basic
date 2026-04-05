import { View, Text, StyleSheet } from 'react-native';

/**
 * EmptyState Component (100% Complete)
 *
 * Displays a friendly message when the todo list is empty.
 * Shows automatically when todos array has length 0.
 *
 * Features:
 * - Centered layout
 * - Large icon
 * - Encouraging message
 */
export default function EmptyState() {
  return (
    <View style={styles.container}>
      {/* Icon */}
      <Text style={styles.icon}>📝</Text>

      {/* Message */}
      <Text style={styles.title}>No tasks yet!</Text>
      <Text style={styles.subtitle}>Add one to get started</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  icon: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#757575',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#9E9E9E',
  },
});
