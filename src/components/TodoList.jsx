import React from 'react';
import InputItem from './InputItem';

const TodoList = ({ list, inputTask, handleInputChange, handleOnEnterPressed, handleSaveTodoItem }) => {
    return (
        <div>
            <h1>Todo List</h1>
            <InputItem
                value={inputTask}
                onChange={handleInputChange}
                onKeyDown={handleOnEnterPressed}
                onClick={handleSaveTodoItem}
            />
            <ul>
                {list.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}
export default TodoList;