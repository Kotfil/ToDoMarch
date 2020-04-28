import React from 'react';
import './App.css';

class TodoListHeader extends React.Component {


        newTasksTitileRef = React.createRef();

    state: {
        error: false,
        title: "he"
    }

    errorClass = () => {
        if (this.newText === "") {
            this.setState(false)
        } else {
            this.setState(true)

            // сетаем в стейт {error: false}
            // отправляем родителю название таски
        }
    }


    onAddTaskClick = () => {
        let newTitle = this.state.title;
            if(newTitle.trim() === "") {
           this.setState({error:true})
        } else {
                this.props.addTask(newTitle);
                this.setState({
                error: false,
                title: ""
                })
        }
        // передаём новый текст наружу

    }
    onTitleChanged =(e) => {
        this.setState({
            error:false,
            title: e.currentTarget.value
        });
    }
    onKeyPress = (e) => {
        if(e.key === "Enter") {
            this.onAddTaskClick();
        }
    }
    render = () => {
        let errorClass = this.state.error ? "error" : "";
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input
                        className={errorClass}
                        type="text"
                        placeholder="New task name"
                        onChange={this.onTitleChanged}
                        onKeyPress={this.onKeyPress}
                        value={this.state.title}/>

                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;

