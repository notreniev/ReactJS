import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({ id, text, handleRemove }) =>
    <li>
        <input type="checkbox" />
        {text}
        <button onClick={() => handleRemove(id)}>x</button>
    </li>

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    handleRemove: PropTypes.func.isRequired
}

export default TodoItem