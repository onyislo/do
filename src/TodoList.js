import React from 'react'; // Import React
import TodoItem from './TodoItem'; // Import the TodoItem component

// This component receives the list of todos and functions as props
function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul>
      {/* Loop through todos and render each one */}
      {todos.map((todo, index) => (
        <TodoItem
          key={index} // Unique key for each item
          index={index} // Pass the index to identify the item
          todo={todo} // Pass the todo object
          toggleComplete={toggleComplete} // Function to toggle completion
          deleteTodo={deleteTodo} // Function to delete the todo
        />
      ))}
    </ul>
  );
}

export default TodoList;
/*
If you can't see this TodoList component on GitHub, follow these steps:

1. Save your changes in VS Code or your editor.
2. Open a terminal in your project directory.
3. Run:
    git add src/TodoList.js
    git commit -m "Add TodoList component"
    git push
4. Refresh your GitHub repository page to see the file.

Also, ensure you have imported and used <TodoList /> in your main App component.
*/