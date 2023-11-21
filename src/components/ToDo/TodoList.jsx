import TodoItem from './ListItem';

const TodoList = ({
    list,
    handleDeleteTodoItem,
    selectedItemsArray,
    setSelectedItemsArray
}) => {



    return (
        <ul>
            {list.map((todo) => (
                <TodoItem key={todo.id}
                    todo={todo}
                    handleDeleteTodoItem={handleDeleteTodoItem}
                    selectedItemsArray={selectedItemsArray}
                    setSelectedItemsArray={setSelectedItemsArray} />
            ))}
        </ul>
    );
};

export default TodoList;