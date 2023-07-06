import React from 'react'

<button className="discord-button" type='submit'>Submit</button>
const TodoForm = ({ name, handleChange, addTask, isEditing, updateTask, handleCancel }) => {
  return (
    <div>
          <form className="discord-form" action="" onSubmit={addTask}>
              <input className="discord-input" type="text" name="name" value={name} onChange={handleChange} placeholder="Add a Task" />
              {isEditing ? (
                <>
                  <button className="discord-button" onClick={updateTask} type='button' >Edit</button>
                  <button className="discord-button cancel" onClick={handleCancel} type='button' >Cancel</button>
                </>

              ):(
                  <button className="discord-button" type='submit'>Submit</button>
              )}
          </form>
    </div>
  )
}

export default TodoForm
