import { useContext, useState } from 'react';
import TodoList from './TodoList.jsx';
import { v4 as uuidv4 } from 'uuid';
import InputItem from './InputItem.jsx';
import InputTitle from './InputTtitle.jsx';
import ListContext from '../ListContext.jsx';


const Todo = () => {

    const { lists, addToList } = useContext(ListContext);


    const [inputTask, setInputTask] = useState('');
    const [inputTitle, setInputTitle] = useState('');
    const [list, setList] = useState([]);
    const [titles, setTitles] = useState([]);
    const [selectedItemsArray, setSelectedItemsArray] = useState([]);

    console.log('context lists: ', lists)
    const handleInputChange = (event) => {
        setInputTask(event.target.value);
    };
    const handleInputTitleChange = (event) => {
        setInputTitle(event.target.value);
    };
    const handleSaveList = () => {
        if (inputTitle.trim() !== '') {
            const newList = list.map(item => ({ id: uuidv4(), content: item.value }));
            addToList(inputTitle, newList);
            setInputTitle('');
            setList([]);

        }
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
    const handleSaveTitle = () => {
        if (inputTitle.trim() !== '') {
            const newTitle = {
                id: uuidv4(),
                value: inputTitle,
            };
            setTitles([...titles, newTitle]);
            setInputTitle(' ');
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

            <InputTitle value={inputTitle}
                onChange={handleInputTitleChange}
                onKeyDown={handleOnEnterPressed}
                onClick={handleSaveTitle}
            />
            <InputItem value={inputTask}
                onChange={handleInputChange}
                onKeyDown={handleOnEnterPressed}
                onClick={handleSaveTodoItem}
            />
            <button onClick={handleDeleteAll}>Delete all</button>
            <button onClick={handleDeleteSelectedTodos}>Delete Selected</button>
            <button onClick={handleSaveList}>Save list</button>
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
