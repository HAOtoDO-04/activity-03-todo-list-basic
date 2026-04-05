# Activity 03: Todo List Basic - Discovery Challenge

## 🎯 Learning Objectives

By completing this activity template, you will:
- Manage array state with useState hook
- Render dynamic lists with FlatList component
- Add and remove items from arrays immutably
- Implement conditional rendering based on state

**Total Time**: 60 minutes
**Difficulty**: Beginner+
**Prerequisites**: Completed Activity 02 (Button Counter)

---

## 🚀 Quick Start (Get Running in 2 Minutes!)

```bash
# 1. Navigate to this folder
cd activity-03-todo-list-basic

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Start Expo development server
npx expo start

# 4. Scan QR code with Expo Go app on your phone
# OR press 'w' to open in web browser
```

**What You'll See Initially**:
- ✅ App loads with "My Tasks" header
- ✅ Empty state message: "No tasks yet! Add one to get started"
- ✅ Input field at bottom (visible but doesn't work yet)
- ⚠️ Adding tasks doesn't work (you'll build this!)

---

## ✨ What's Already Built (70% Complete)

### ✅ Pre-Built Components (Use These!)

**1. TodoItem Component** (`components/TodoItem.js`)
- Displays single task with checkbox
- Shows strikethrough when completed
- Red delete button (✕)
- All styling and interactions complete

**2. EmptyState Component** (`components/EmptyState.js`)
- Shows when todo list is empty
- Friendly message with icon
- Automatically appears/disappears

**3. AddTodoForm Component** (`components/AddTodoForm.js`)
- Text input field for new tasks
- Blue "Add Task" button
- Proper touch targets (48px minimum)

**4. Helper Functions** (`utils/todoHelpers.js`)
- `generateId()` - Creates unique IDs for todos
- `isValidTodoText()` - Validates input
- `formatTodoCount()` - Formats task count

**5. Complete UI Structure**
- Header with task count
- FlatList with proper rendering
- Safe area handling for all devices
- Professional styling system

---

## 📋 Your Tasks (3 TODOs - 30% of Work)

### TODO #1: Initialize Todos State (10 minutes)

**File**: `App.js` (around line 15)
**Goal**: Set up React state to store array of todo objects

**What You Need to Do**:
```javascript
// Find this comment in App.js:
// TODO #1: Initialize todos array state

// Add this code:
const [todos, setTodos] = useState([]);
```

**Why This Matters**:
- React needs state to track data that changes
- Arrays in state must be managed immutably
- Each todo will have: `{ id, text, completed }`

**Test It**:
- Save the file
- App should still show empty state (no errors)

---

### TODO #2: Implement Add Todo Function (20 minutes)

**File**: `App.js` (around line 30)
**Goal**: Create function to add new todo to the array

**What You Need to Do**:
```javascript
const addTodo = () => {
  // Step 1: Validate input (don't add empty todos)
  if (!inputText.trim()) {
    return;
  }

  // Step 2: Create new todo object
  const newTodo = {
    id: generateId(),
    text: inputText.trim(),
    completed: false,
  };

  // Step 3: Add to array immutably
  setTodos([...todos, newTodo]);

  // Step 4: Clear input field
  setInputText('');
};
```

**Key Concepts**:
- **Input Validation**: `inputText.trim()` removes spaces, check if empty
- **Immutable Update**: `[...todos, newTodo]` creates NEW array
- **Why Not**: `todos.push(newTodo)` - React won't detect this change!

**Test It**:
1. Type "Buy milk" in input field
2. Press "Add Task" button
3. New task should appear with checkbox
4. Input field should clear automatically
5. Try adding multiple tasks

**Common Mistakes**:
- ❌ Using `todos.push()` - mutates state
- ❌ Not trimming input - allows empty spaces
- ❌ Forgetting to clear input - stays filled

---

### TODO #3: Implement Delete Todo Function (15 minutes)

**File**: `App.js` (around line 55)
**Goal**: Create function to remove todo from array by ID

**What You Need to Do**:
```javascript
const deleteTodo = (id) => {
  // Filter creates NEW array excluding the deleted todo
  const updatedTodos = todos.filter(todo => todo.id !== id);
  setTodos(updatedTodos);
};
```

**Key Concepts**:
- **Array.filter()**: Creates new array with items that pass test
- **Condition**: `todo.id !== id` keeps everything EXCEPT deleted item
- **Immutable**: `filter()` automatically returns new array

**Alternative One-Liner**:
```javascript
const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
};
```

**Test It**:
1. Add several tasks: "Task 1", "Task 2", "Task 3"
2. Click red ✕ button on "Task 2"
3. Task 2 should disappear
4. Other tasks should remain
5. Try clicking checkboxes (toggle feature pre-built!)

**Common Mistakes**:
- ❌ Using `splice()` - mutates original array
- ❌ Wrong condition: `===` instead of `!==`
- ❌ Not using parameter: deleting hardcoded ID

---

## ✅ Success Criteria

Your completed activity should:

**Functionality**:
- [ ] Can add new todos by typing and clicking "Add Task"
- [ ] Input field clears after adding
- [ ] Empty/whitespace input is rejected
- [ ] Can delete todos with ✕ button
- [ ] Can toggle todos complete with checkbox
- [ ] Completed todos show strikethrough
- [ ] Empty state appears when no todos
- [ ] No errors in console

**Code Quality**:
- [ ] All 3 TODOs completed
- [ ] State updates are immutable
- [ ] Input validation works correctly

---

## 🧪 Testing Your Work

### Manual Testing Checklist

**Basic Operations**:
1. Add todo "Test 1" - should appear in list
2. Add todo "Test 2" - should appear below Test 1
3. Try adding empty string - should not add
4. Try adding only spaces "   " - should not add
5. Delete "Test 1" - should remove from list
6. Click checkbox on "Test 2" - should strikethrough
7. Delete all todos - should show empty state

**Edge Cases**:
1. Add 20+ todos - should scroll smoothly
2. Add very long text - should wrap properly
3. Rapidly click Add button - should handle well

---

## 🎨 Features Included (Pre-Built)

### UI Components
- **TodoItem**: Checkbox, text, delete button with proper spacing
- **EmptyState**: Centered icon and message for empty list
- **AddTodoForm**: Input field with validation, styled button
- **Header**: Title and task counter

### Styling
- Professional color scheme (blues, grays)
- Touch targets meet 48px minimum guideline
- Shadows and elevation for depth
- Proper spacing and padding

### Code Architecture
- Modular component structure
- Reusable utility functions
- Clean separation of concerns
- Comments explaining each section

---

## 🚀 Extension Challenges

Want to go further? Try these:

### Beginner Extensions
- [ ] Add task counter for completed vs total
- [ ] Add "Clear All" button
- [ ] Style completed todos differently

### Intermediate Extensions
- [ ] Add "Edit" functionality for existing todos
- [ ] Filter todos: Show All / Active / Completed
- [ ] Add priority levels (high/medium/low)

### Advanced Extensions
- [ ] Persist todos with AsyncStorage (see Activity 06)
- [ ] Add due dates with date picker
- [ ] Drag to reorder todos
- [ ] Add categories/tags

---

## 📚 Key Concepts Review

### Array State Management
```javascript
// ✅ CORRECT: Immutable updates
setTodos([...todos, newTodo]);           // Add
setTodos(todos.filter(t => t.id !== id)); // Remove
setTodos(todos.map(t => t.id === id ? {...t, completed: true} : t)); // Update
```

### Why Immutability Matters
React uses referential equality to detect changes:
- Same array reference = no re-render
- New array reference = triggers re-render
- Direct mutations like `push()` don't create new reference

### FlatList Performance
```javascript
<FlatList
  data={todos}
  keyExtractor={(item) => item.id}  // Must be unique!
  renderItem={({ item }) => <TodoItem todo={item} />}
  ListEmptyComponent={<EmptyState />}
/>
```

---

## 🔗 How This Connects to Projects

This activity teaches patterns you'll use in:

**Project 1 (Weeks 1-2)**: Portfolio App
- Use similar list structure for projects/skills
- Apply card styling patterns

**Project 2 (Weeks 3-4)**: Social App
- Manage posts, comments, likes as arrays
- Similar add/delete patterns for interactions

**Future Activities**:
- Activity 04 (Camera): Array of selected images
- Activity 06 (Storage): Persist todo list
- Activity 08 (Data Cards): Advanced list features

---

## 🐛 Troubleshooting

### App won't start
```bash
# Try clearing Expo cache
npx expo start --clear
```

### "Can't find variable: todos"
- Check that you completed TODO #1
- Make sure `useState` is imported from 'react'

### New todos don't appear
- Check TODO #2 implementation
- Verify you're using spread operator: `[...todos, newTodo]`
- Check console for errors

### Delete button doesn't work
- Check TODO #3 implementation
- Verify filter condition uses `!==` not `===`

---

## 📦 Dependencies

```json
{
  "expo": "~54.0.0",
  "react": "18.3.1",
  "react-native": "0.79.5",
  "expo-status-bar": "~2.0.0"
}
```

**No external libraries needed!** Everything uses React Native core components.

---

## 📖 Additional Resources

**React Native Docs**:
- [Using List Views](https://reactnative.dev/docs/using-a-listview)
- [FlatList Component](https://reactnative.dev/docs/flatlist)

**React Docs**:
- [useState Hook](https://react.dev/reference/react/useState)
- [Immutability](https://react.dev/learn/updating-arrays-in-state)

---

## 🎉 Next Steps

After completing this activity:

1. **Test thoroughly** - Make sure all features work
2. **Review concepts** - Understand why immutability matters
3. **Try extensions** - Add one bonus feature
4. **Submit work** - Take screenshots, submit via form
5. **Move forward** - Ready for Activity 04 (Camera)!

---

**Need Help?**
- Check the activity MDX file for detailed explanations
- Review Concept 03 (State Management Basics)
- Ask questions in the discussion forum

**Good luck! You've got this!** 🚀
