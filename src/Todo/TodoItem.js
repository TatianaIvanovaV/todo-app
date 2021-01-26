import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from '../context';

const styles = {
  li: {
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center"
  }
}

function TodoItem({todo, index, onChange}) {
  const classes = []
  const { removeTodo } = useContext(Context)

  if (todo.completed) {
    classes.push('done')
  }

  return (
    <li 
      className="list-group-item" 
      style={styles.li} 
      onChange={() => onChange(todo.id)}
    >
      <span className={classes.join(" ")}>
        <input 
          className="mr-2"
          type="checkbox"
          checked={todo.completed}
        />
        <strong>{index + 1}</strong>
        &nbsp;{todo.title}
      </span>
      <button 
        type="button"
        className="btn btn-outline-warning btn-sm"
        onClick={removeTodo.bind(null, todo.id)}
      >
        &times;
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todos: PropTypes.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default TodoItem;