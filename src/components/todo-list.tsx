import React from 'react';
import {ITodo} from '../models/todo';


type TodoListProps = {
    todos: ITodo[];
    onCheck: (id: string) => void;
    onShowYesNoDialog: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({todos, onCheck,onShowYesNoDialog}) => {
    const onCheckHandler = (id: string)=>{
        onCheck(id)
    }

    if(todos.length === 0){
        return <p className="center">No todos</p>
    }
    const onShowModal = (e: React.MouseEvent,id: string) =>{
        e.preventDefault();
        onShowYesNoDialog(id)
    }

    return (
        <ul>
            {todos.map((todo, index) => {
                const classes = ['todo'];
                if (todo.isComplete) {
                    classes.push('isComplete')
                }
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label >
                            <input type="checkbox" id={todo.id} className="filled-in"  onChange={() => onCheckHandler(todo.id)} checked={todo.isComplete}/>
                            <span>{todo.title}</span>
                            <i className="material-icons red-text" onClick={(e) => onShowModal(e,todo.id)}>delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}
