import React from 'react';
import './App.css';

class TodoListTask extends React.Component {
    state = {
        isEditMode: false
    };

    activatedEditMode = () => {
        this.setState({isEditMode:true})
    };

    deActivatedEditMode = () => {
        this.setState({isEditMode:false})
    };

    onIsDoneChanged = (event) => {
        this.props.changeStatus(this.props.task.id, event.currentTarget.checked)
    };

    onTitleChanged = (event) => {
                this.props.changeTitle(this.props.task.id, event.currentTarget.value)
    };



    render = () => {

        let containerCssClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";

        return (
                <div className={containerCssClass}>
                    <input type="checkbox"
                           checked={this.props.task.isDone}
                           onChange={this.onIsDoneChanged}
                    />
                    <span>{this.props.task.id}--</span>
                    {this.state.isEditMode
                        ? <input
                            value={this.props.task.title}
                            autoFocus={true}
                            onBlur={this.deActivatedEditMode}
                            onChange={this.onTitleChanged}
                        />
                        : <span onClick={this.activatedEditMode}>{this.props.task.title},</span>
                    }
                    <span> priority: {this.props.task.priority}</span>
                </div>
        );
    }
}

export default TodoListTask;

