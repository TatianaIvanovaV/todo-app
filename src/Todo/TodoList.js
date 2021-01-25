import React from "react";
import TodoItem from './TodoItem';

const styles = {
  ul: {
    listStyle: 'none'
  }
}

const TodoList = () => {
  return (
    <ul style={styles.ul}>
      <TodoItem />
    </ul>
  )
}
export default TodoList;
