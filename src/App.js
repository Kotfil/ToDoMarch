import React, {Component} from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends Component {
    // constructor() {
    //     super()
    // }
    //
    //
    // newTaskTitleRef = React.createRef();
    state = {
        tasks: [
            {title: "JS", isDone: true, priority: "medium"},
            {title: "HTML", isDone: true, priority: "low"},
            {title: "CSS", isDone: true, priority: "low"},
            {title: "ReactJS", isDone: false, priority: "high"}
        ],
        filterValue: "All"
    }

    addTask = () => {
        let newTask = {
            title: this.newTaskTitleRef.current.value, isDone: true, priority: "medium",
        };
        let newTasker = [...this.state.tasks, newTask];
        this.setState({tasks: newTasker});
    };

    changeFilter = (newFilterValue) => {
        this.setState
        ({filterValue: newFilterValue});
    }

    render = () => {
        let filterTasks = this.state.tasks.filter(t => {
            switch (this.state.filterValue) {
                case "Active":
                    return t.isDone === false;
                    break;
                case "Completed":
                    return t.isDone === true;
                    break;
                case "All":
                    return true;

                default:
                    return true;
            }
        })

        return (
            <div className="App">
                <div className="todoList">
                    <div className="todoList-header">
                        <h3 className="todoList-header__title">What to Learn</h3>
                        <div className="todoList-newTaskForm">
                            <input type="text" placeholder="New task name" ref={this.newTaskTitleRef}/>
                            <button onClick={this.onAddTaskClick}>Add
                            </button>
                        </div>
                    </div>

                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks tasks={filterTasks}/>
                    <TodoListFooter
                        filterValue={this.state.filterValue}
                        changeFilter={this.changeFilter}/>
                </div>
            </div>
        );
    }
}

export default App;

