import React, {useState} from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)
  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

function AddTodo({ onCreate }) {
  const input = useInputValue('')

  function submitHandler(event) {
    event.preventDefault()

    if (input.value().trim()) {
      onCreate(input.value())
      input.clear() 
    }
  }

  return(
    <form onSubmit={submitHandler}>
      <div className='form-group d-flex'>
        <input 
          type='text'
          className='form-control'
          placeholder='Введите заметку'
          {...input.bind}
        />
        <button
          type="submit" 
          className="btn btn-primary"
        >
          Добавить
        </button>
      </div>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo;