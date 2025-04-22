import {Button} from '../index.ts';
import {ListItemProps} from "../../types/list";

export function ListItem({item, onDeleteItem, onEditItem}: ListItemProps) {
    return (
        <li>
            <p>{item.text}</p>
            <div>
                <Button onClick={() => onEditItem(item.id)}>Edit</Button>
                <Button onClick={() => onDeleteItem(item.id)}>Delete</Button>
            </div>
        </li>
    );
}
