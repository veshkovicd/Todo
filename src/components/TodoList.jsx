import React from 'react';
import { useState } from 'react';

const TodoList = () => {
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

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <input type="text" value={inputTask}
                    onChange={handleInputChange} placeholder="Enter your todo item" />
                <button onClick={handleSaveTodoItem} >Save</button>
            </div>
            <ul>
                {list.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>

        </div>
    );

};
export default TodoList; 
