import React, {useState} from "react";
import PropTypes from "prop-types";

const AddTodo = ({onCreate}) => {
  const [value, setValue] = useState(' ')

  function submitHandler(event) {
    event.parentDefault()

    if (value.trim()) {
      onCreate(value)
      setValue(' ')
    }
  }

  return(
    <form className='mb-1' onSubmit={submitHandler}>
      <div className='form-group d-flex'>
        <input 
          type='text'
          className='form-control'
          placeholder='Введите заметку'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button
          type="button" 
          className="btn btn-primary"
        >
          Добавить
        </button>
      </div>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default AddTodo;