import { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import TodoItem from './components/TodoItem';
import EmptyState from './components/EmptyState';
import AddTodoForm from './components/AddTodoForm';
import { generateId } from './utils/todoHelpers';

export default function App() {
  // ===========================================
  // TODO #1: Initialize todos array state
  // ===========================================
  // INSTRUCTIONS:
  // 1. Use useState to create a 'todos' state variable
  // 2. Initialize it with an empty array: []
  // 3. Each todo will be an object with: { id: string, text: string, completed: boolean }
  //
  // HINT: const [todos, setTodos] = useState([]);
  // ===========================================

  // YOUR CODE HERE - Initialize todos state
  const [todos, setTodos] = useState([]);

  // Also need state for the input text field
  const [inputText, setInputText] = useState('');


  // ===========================================
  // TODO #2: Implement addTodo function
  // ===========================================
  // INSTRUCTIONS:
  // 1. Check if inputText is not empty (use .trim() to remove spaces)
  // 2. If empty, return early (don't add empty todos)
  // 3. Create a new todo object with:
  //    - id: generateId() (helper function provided)
  //    - text: inputText.trim()
  //    - completed: false
  // 4. Add the new todo to the todos array (immutably!)
  // 5. Clear the input field by calling setInputText('')
  //
  // REMEMBER: Never mutate state directly!
  // ❌ WRONG: todos.push(newTodo); setTodos(todos);
  // ✅ CORRECT: setTodos([...todos, newTodo]);
  // ===========================================

  const addTodo = () => {
    // YOUR CODE HERE - Implement add todo logic
    // Step 1: Validate input
    if (!inputText.trim()) {
      return; // Don't add empty todos
    }

    // Step 2: Create new todo object
    const newTodo = {
      id: generateId(),
      text: inputText.trim(),
      completed: false,
    };

    // Step 3: Add to array immutably (don't mutate state!)
    setTodos([...todos, newTodo]);

    // Step 4: Clear input
    setInputText('');



  };


  // ===========================================
  // TODO #3: Implement deleteTodo function
  // ===========================================
  // INSTRUCTIONS:
  // 1. This function receives a todo ID as a parameter
  // 2. Use array.filter() to create a NEW array without the deleted todo
  // 3. The filter condition should EXCLUDE the todo with matching id
  // 4. Update state with the filtered array
  //
  // HINT: todos.filter(todo => todo.id !== id)
  // This keeps all todos EXCEPT the one with matching id
  // ===========================================

  const deleteTodo = (id) => {
    // YOUR CODE HERE - Implement delete logic
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };


  // ✅ BONUS: Toggle complete function (Already provided!)
  // This shows the pattern for updating an item in an array
  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    // Can also be written as:
    //setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };


  // ===========================================
  // RENDER UI (All pre-built!)
  // ===========================================
  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>My Tasks</Text>
        <Text style={styles.subtitle}>
          {todos.length} {todos.length === 1 ? 'task' : 'tasks'}
        </Text>
      </View>

      {/* Todo List */}
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onToggle={() => toggleComplete(item.id)}
            onDelete={() => deleteTodo(item.id)}
          />
        )}
        ListEmptyComponent={<EmptyState />}
        contentContainerStyle={todos.length === 0 && styles.emptyList}
        style={styles.list}
      />

      {/* Add Todo Form */}
      <AddTodoForm
        value={inputText}
        onChangeText={setInputText}
        onSubmit={addTodo}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#757575',
  },
  list: {
    flex: 1,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
  },
});
