import React from 'react';
import { useState } from 'react';
import TodoList from './TodoList.jsx';

const Todo = () => {

    const [inputTask, setInputTask] = useState('');
    const [list, setList] = useState([]);

    const handleInputChange = (event) => {
        setInputTask(event.target.value);
    };
    const handleSaveTodoItem = () => {
        if (inputTask.trim() !== '') {
            setList([...list, inputTask]);
            setInputTask('');
        }
    };
    const handleOnEnterPressed = (event) => {
        if (event.key === 'Enter') {
            handleSaveTodoItem();
        }
    };

    return (

        <TodoList
            list={list}
            inputTask={inputTask}
            handleInputChange={handleInputChange}
            handleSaveTodoItem={handleSaveTodoItem}
            handleOnEnterPressed={handleOnEnterPressed}
        />

    );
};

export default Todo; 
