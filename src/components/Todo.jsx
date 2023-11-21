import React from 'react';
import { useState } from 'react';
import TodoList from './TodoList.jsx';
import { v4 as uuidv4 } from 'uuid';


const Todo = () => {

    const [inputTask, setInputTask] = useState('');
    const [list, setList] = useState([]);
    const [selectedItemsArray, setSelectedItemsArray] = useState([]);

    const handleInputChange = (event) => {
        setInputTask(event.target.value);
    };

    const handleSaveTodoItem = () => {
        if (inputTask.trim() !== '') {
            const newItem = {
                id: uuidv4(),
                value: inputTask,
            };
            setList([...list, newItem]);
            setInputTask('');
        }
    };

    const handleOnEnterPressed = (event) => {
        if (event.key === 'Enter') {
            handleSaveTodoItem();
        }
    };

    const handleDeleteAll = () => {
        setList([]);
    };

    const handleDeleteTodoItem = (id) => {
        const newList = list.filter((todo) =>
            todo.id !== id
        );
        setList(newList);
    };

    const handleDeleteSelectedTodos = () => {
        const updatedTodos = list.filter(todo => !selectedItemsArray.includes(todo.id));
        setList(updatedTodos);
        setSelectedItemsArray([]);
    };
    return (

        <TodoList
            list={list}
            inputTask={inputTask}
            handleInputChange={handleInputChange}
            handleSaveTodoItem={handleSaveTodoItem}
            handleOnEnterPressed={handleOnEnterPressed}
            handleDeleteAll={handleDeleteAll}
            handleDeleteTodoItem={handleDeleteTodoItem}
            selectedItemsArray={selectedItemsArray}
            setSelectedItemsArray={setSelectedItemsArray}
            handleDeleteSelectedTodos={handleDeleteSelectedTodos}
        />
    );
};

export default Todo; 
