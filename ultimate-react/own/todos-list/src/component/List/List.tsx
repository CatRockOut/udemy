import {ListItem} from '../index.ts';
import {ListProps} from "../../types/list";

export function List({todos, onDeleteItem, onEditItem}: ListProps) {
    return (
        <ul>
            {todos.map((item) => (
                <ListItem
                    key={item.id}
                    item={item}
                    onDeleteItem={onDeleteItem}
                    onEditItem={onEditItem}
                />
            ))}
        </ul>
    );
}
