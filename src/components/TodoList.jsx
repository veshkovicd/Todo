import React, { useState } from 'react';
import InputItem from './InputItem';

const TodoList = ({
    list,
    inputTask,
    handleInputChange,
    handleOnEnterPressed,
    handleSaveTodoItem,
    handleDeleteAll,
    handleDeleteTodoItem,
    handleDeleteSelectedTodos,
    selectedItemsArray,
    setSelectedItemsArray
}) => {
    const [hoveredId, setHoveredId] = useState(null);

    const handleItemCheckboxChange = (id) => {
        const updatedSelectedItems = selectedItemsArray.includes(id)
            ? selectedItemsArray.filter(itemId => itemId !== id)
            : [...selectedItemsArray, id];
        setSelectedItemsArray(updatedSelectedItems);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <InputItem
                value={inputTask}
                onChange={handleInputChange}
                onKeyDown={handleOnEnterPressed}
                onClick={handleSaveTodoItem}
            />
            <button onClick={handleDeleteAll}>Delete all</button>
            <button onClick={handleDeleteSelectedTodos}>Delete Selected</button>
            <ul>
                {list.map((todo) => (
                    <li key={todo.id} onMouseEnter={() => setHoveredId(todo.id)} onMouseLeave={() => setHoveredId(null)}>
                        <input
                            type="checkbox"
                            checked={selectedItemsArray.includes(todo.id)}
                            onChange={() => handleItemCheckboxChange(todo.id)}
                        />
                        <span>{todo.value}</span>
                        {hoveredId === todo.id && <button onClick={() => handleDeleteTodoItem(todo.id)}>X</button>}
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default TodoList;