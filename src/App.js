import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.newTasksTitileRef = React.createRef();
    }

    state = {
        tasks: [
            {id: 0,title: "JS", isDone: true, priority: "medium"},
            {id: 1,title: "HTML", isDone: true, priority: "low"},
            {id: 2,title: "CSS", isDone: true, priority: "low"},
            {id: 3,title: "ReactJS", isDone: false, priority: "high"}
        ],
        filterValue: "All"
    };

    nextTaskid = 6

    addTask = (newText) => {
        let newTask = {
            title: newText,
            isDone: false,
            priority: "low",
            id: this.nextTaskid
        };
        this.nextTaskid++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState( {
            tasks: newTasks
        });
    }

    changeFilter = (newFilterValue) => {
        this.setState( {
            filterValue: newFilterValue
        });
    }

    changeStatus = (taskId, isDone) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id === taskId) {
                return {...t, isDone: isDone}
            }
                return t;
            });
        this.setState({tasks: newTasks})

    }

    changeTitle = (taskId, newTitle) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id != taskId) {
                return t;
            }
                return {...t, title: newTitle}

        });
        this.setState({tasks: newTasks})
    };


    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask} />
                    <TodoListTasks changeStatus={this.changeStatus }
                                   changeTitle={this.changeTitle}
                                   tasks={this.state.tasks.filter(t => {
                        if (this.state.filterValue === "All") {
                            return true;
                        }
                        if (this.state.filterValue === "Active") {
                            return t.isDone === false;
                        }
                        if (this.state.filterValue === "Completed") {
                            return t.isDone === true;
                        }
                    })}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue} />
                </div>
            </div>
        );
    }
}

export default App;

