type InputProps = {
    inputValue: string;
    onInputValue: (value: string) => void;
};

export function Input({inputValue, onInputValue}: InputProps) {
    return (
        <input
            type="text"
            placeholder='type...'
            value={inputValue}
            onChange={(e) => onInputValue(e.target.value)}
        />
    );
}
