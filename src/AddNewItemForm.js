import React from 'react';
import './App.css';

class AddNewItemForm extends React.Component {
    state = {
        error: false,
        title: ""
    }

    onAddItemClick = () => {
        let newText = this.state.title.trim();
        if (newText === "") {
            this.setState({error: true});
        } else {
            this.setState({error: false});
            // передаём новый текст наружу
            this.props.addItem(newText);
        }
    }

    onTitleChanged = (e) => {
        this.setState({
            error: false,
            title: e.currentTarget.value
        });
    }

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddTaskClick()
        }
    }


    render = () => {
        let classNameForInput = this.state.error ? "error" : "";

        return (
            <div className="todoList-newTaskForm">
               </input className={errorClass}
                        type="text"
                           placeholder="New task name"
                           onChange={this.onTitleChanged}
                           onKeyPress={this.onKeyPress}
                           value={this.state.title}
                    />
                    <button onClick={this.onAddTaskClick}>Add</button>

            </div>
        );
    }
}

export default AddNewItemForm;
