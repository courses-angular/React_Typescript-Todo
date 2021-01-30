import React, {useEffect, useState} from 'react';
import {TodoForm} from '../components/todo-form';
import {TodoList} from '../components/todo-list';
import {Modal} from '../components/modal';
import {ITodo} from '../models/todo';



export const TodoPage: React.FC = () =>{
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [id,setId] = useState('');
    const [isShowModal,setShowModal] = useState(false);

    useEffect(()=>{
        const saved = JSON.parse(localStorage.getItem('todos')|| '[]') as ITodo[]
        setTodos(saved)
    },[])

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])

    const addTodo = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: '_' + Math.random().toString(36).substr(2, 9).toString(),
            isComplete: false
        }
        // setTodos([newTodo,...todos])
        setTodos(prevState => [...prevState, newTodo])
    }
    const onCheckTodo = (id: string) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(newTodos)

    }
    const onShowYesNoDialog = (id: string) => {
        setId(id)
        setShowModal(true);
    }
    const onDeleteTodo = (id: string) =>{
        onCloseModal();
        setTodos(prevState => prevState.filter((todo) => todo.id !== id)); setShowModal(false);

    }
    const onCloseModal = () => {
        setShowModal(false);
    }
    return (
        <>
            <TodoForm onAdd={addTodo}/>
            <TodoList todos={todos}
                      onCheck={onCheckTodo}
                      onShowYesNoDialog={onShowYesNoDialog}/>
            {isShowModal && <Modal onDeleteInDialog={onDeleteTodo} id={id} onCloseDialog={onCloseModal}/>}
        </>
    )
}
