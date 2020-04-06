import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter ";
import TodoListHeader from "./TodoListHeader";


class App extends React.Component {
     tasks = [
        {title:"ReactJS",isDone:false, priority: "low"},
        {title:"CSS",isDone:false,priority: "low"},
        {title:"jQuery",isDone:false,priority: "high"},
        {title:"Vanil",isDone:true,priority: "low"},
        {title:"JavaScript",isDone:true,priority: "medium"},
    ];
     filterValue = "All";
    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader />
                    <TodoListTasks tasks={this.tasks}/>
                    <TodoListFooter filterValue={this.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

