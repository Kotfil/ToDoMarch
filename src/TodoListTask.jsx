import React from 'react';
import './App.css';

class TodoListTask extends React.Component {
    // constructor(attributes){
    //     this.props = {}
    //     this.props.title = "attributes.title"
    //     this.props.isDone = "attributes.isDone"
    // }
    render = () => {
        return (

            <div className="todoList-task">
                <input type="checkbox" checked={this.props.isDone}/>
                <span>{this.props.title} - {this.props.priority}</span>
            </div>


        );
    }
}

export default TodoListTask;