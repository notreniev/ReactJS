import React from 'react'
import ToDoList from '../components/todoList/ToDoList'

export default class ToDoListContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            task: '',
            items: []
        }

        // this.handleInputKeyPress = this.handleInputKeyPress.bind(this)
    }

    handleRemoveTask = (id) => {
        const index = this.state.items.findIndex(function (task) {
            return task.id === id
        })

        const taskList = this.state.items
        taskList.splice(index, 1)

        this.setState({
            items: taskList
        })
    }

    handleInputKeyUp = (evt) => {
        if (evt.keyCode === 13) {
            const newItems = this.state.items
            const newTask = {
                text: this.state.task,
                completed: false,
                id: Number(new Date())
            }

            newItems.push(newTask)

            this.setState({
                task: '',
                items: newItems
            })
        }
    }

    handleInputChange = (evt) => {
        this.setState({
            task: evt.target.value
        })
    }

    render() {
        return <ToDoList 
            task={this.state.task} 
            items={this.state.items} 
            handleInputKeyUp={this.handleInputKeyUp}
            handleInputChange={this.handleInputChange}
            handleRemoveTask={this.handleRemoveTask}
            />
    }
}