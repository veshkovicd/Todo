
const InputTitle = ({ value, onChange, onKeyDown }) => {

    return (
        <div>
            <h3>Title</h3>
            <input
                type="text"
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                placeholder="Enter title for the list"
            />
            <br />
            
        </div>
    );
};

export default InputTitle;