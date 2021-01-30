import React from 'react';
import {ITodo} from '../models/todo';

type TodoListProps = {
    id: string;
    onDeleteInDialog: (id: string) => void;
    onCloseDialog: () => void;
}

export const Modal: React.FC<TodoListProps> = ({onDeleteInDialog,id,onCloseDialog}) =>{

    return (
        <div className="overlay">
            <div className="dialog">
                <i className="material-icons close ">close</i>
                <div className="dialog_header">
                    <h5 className="center">Are you're sure?</h5>
                </div>
                <div className="dialog_body">
                    {/*Body*/}
                </div>
                <div className="dialog_footer">
                    <button className="waves-effect waves-light btn purple darken-2 " onClick={onDeleteInDialog.bind(null,id)}>Yes</button>
                    <button className="waves-effect waves-light btn red darken-2" onClick={onCloseDialog}>No</button>
                </div>

            </div>
        </div>
    )
}
