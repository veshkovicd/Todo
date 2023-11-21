
const InputItem = ({ value, onChange, onKeyDown, onClick }) => {

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                placeholder="Enter your todo item"
            />
            <button onClick={onClick}>Save</button>
        </div>
    );
};

export default InputItem;