import React, {useEffect} from "react";
import TodoList from './Todo/TodoList';
import Context from './context';
import AddTodo from './Todo/AddTodo';



function App() {
  const [todos, setTodos]= React.useState([
    {id: 1, completed: true, title: 'zero'},
    {id: 2, completed: false, title: 'one'}
  ])

  useEffect(() =>{

  }, [])

  function toggleTodo(id){
    setTodos(
      todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo
        })
      )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        }
      ])
    )
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='container pt-5 mx-auto'>
        <h1 className='display-6'>ToDo React App v1.0.0</h1>
        <AddTodo onCreate={addTodo}/>
        {todos.length ? 
          (<TodoList 
          todos={todos}
          onToggle={toggleTodo} />) : (
          <p>No ToDos</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
