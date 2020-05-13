import React from 'react';
import './App.css';

export default class TodoListTitle extends React.Component {

    render = () => {


        return (

                <h3 className="todoList-header__title">{this.props.title}</h3>


        );
    }
}


