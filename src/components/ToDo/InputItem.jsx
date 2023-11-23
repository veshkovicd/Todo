
const InputItem = ({ value, onChange, onKeyDown, onClick }) => {

    return (
        <div>
            <h4>Input items</h4>
            <input
                type="text"
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                placeholder="Enter your todo item"
            />
            <button onClick={onClick}>Save Item</button>
        </div>
    );
};

export default InputItem;