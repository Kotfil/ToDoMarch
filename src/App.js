import React from 'react';
import './App.css';
import TodoList from "./TodoList";

export default class App extends React.Component {

state = {
    todolists: [
        {id: 1, title: "JavaScript"},
        {id: 2, title: "GraphQL"},
        {id: 3, title: "Redux"},
        {id: 4, title: "jQuery"},
    ]
};


    render ()  {
    const todolists = this.state.todolists.map(t=> {
        return <TodoList key={t.id} id={t.id} title={t.title}/>
    })
        return (
            <>
            <div>
            <input/>
                <button onClick={this.addTodolist}>Add</button>
            </div>
            <div className="App">
                {todolists}
            </div>
                </>
        );
    }
}



