import React from 'react';
import './App.css';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {

        let myFn = t => {
            return <TodoListTask title={t.title} isDone={t.isDone} priority={t.priority}/>
        }

            let taskElements = this.props.tasks.map(myFn);
        return (
                <div className="todoList-tasks">
                    {taskElements}
                </div>


            );
        }

    }
        export default TodoListTasks;

