export type TodoItem = {
    id: number;
    text: string;
};

export type ListProps = {
    todos: TodoItem[];
    onDeleteItem: (id: number) => void;
    onEditItem: (id: number) => void;
};

export type ListItemProps = {
    item: TodoItem;
    onDeleteItem: (id: number) => void;
    onEditItem: (id: number) => void;
}
