import {useState} from 'react';
import {Input, Button, List} from './component'
import { TodoItem } from './types/list';

function App() {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [editingItemId, setEditingItemId] = useState<number | null>(null);

    const handleSubmit = () => {
        if (editingItemId !== null) {
            setTodos((items) =>
                items.map((item) =>
                    item.id === editingItemId ? {...item, text: inputValue} : item
                )
            );
            setEditingItemId(null);
        } else {
            const newItem: TodoItem = {id: Date.now(), text: inputValue};
            setTodos([...todos, newItem]);
        }

        setInputValue('');
    };

    const handleEditItem = (id: number) => {
        const itemToEdit = todos.find((item) => item.id === id);

        if (itemToEdit) {
            setInputValue(itemToEdit.text);
            setEditingItemId(id);
        }
    };

    const handleDeleteItem = (id: number) => {
        setTodos((items) => items.filter((item) => item.id !== id));

        if (editingItemId === id) {
            setEditingItemId(null);
            setInputValue('');
        }
    };

    const handleResetAll = () => {
        setTodos([]);
        setInputValue('');
        setEditingItemId(null);
    };

    return (
        <div className='container'>
            <div>
                <Input
                    inputValue={inputValue}
                    onInputValue={setInputValue}
                />
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
            <List
                todos={todos}
                onDeleteItem={handleDeleteItem}
                onEditItem={handleEditItem}
            />
            <Button onClick={handleResetAll}>🗑 Reset List</Button>
        </div>
    );
}

export default App;
