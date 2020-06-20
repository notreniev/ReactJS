import React from 'react'
import './ToDoList.css'
import TodoItem from '../todoItem/TodoItem'
import PropTypes from 'prop-types'

const ToDoList = ({ task, items, handleInputKeyUp, handleInputChange, handleRemoveTask }) =>
    <div className="todo-list">
        <div className="input">
            <input type="text"
                value={task}
                placeholder="Digite aqui sua tarefa..."
                onKeyUp={handleInputKeyUp}
                onChange={handleInputChange} />
        </div>

        <div className="items">
            <ul>
                {items.map((taskItem) => {
                    return <TodoItem
                        key={taskItem.id}
                        id={taskItem.id}
                        text={taskItem.text}
                        handleRemove={handleRemoveTask} />
                })}
            </ul>
        </div>
    </div>

ToDoList.propTypes = {
    task: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired)
    .isRequired,
    handleInputKeyUp: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleRemoveTask: PropTypes.func.isRequired
}

export default ToDoList