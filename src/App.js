import React from "react";
import TodoList from './Todo/TodoList';

function App() {
  return (
    <div className='wrapper pt-5 mx-auto'>
      <h1 className='display-6'>ToDo React App v1.0.0</h1>
      <TodoList />
    </div>
  );
}

export default App;
