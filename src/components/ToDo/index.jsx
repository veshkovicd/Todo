import { useState } from 'react';
import TodoList from './TodoList.jsx';
import { v4 as uuidv4 } from 'uuid';
import InputItem from './InputItem.jsx';


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
        <>
            <h1>Todo List</h1>
            <InputItem value={inputTask}
                onChange={handleInputChange}
                onKeyDown={handleOnEnterPressed}
                onClick={handleSaveTodoItem}
            />
            <button onClick={handleDeleteAll}>Delete all</button>
            <button onClick={handleDeleteSelectedTodos}>Delete Selected</button>
            <TodoList
                list={list}
                handleDeleteTodoItem={handleDeleteTodoItem}
                selectedItemsArray={selectedItemsArray}
                setSelectedItemsArray={setSelectedItemsArray}
            />
        </>
    );
};

export default Todo; 
