import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { requestAllTodos, addTodo, updateTodo, deleteTodo, searchTodo } from '../redux/modules/task2/actions';
import './Task2.css';

export default function Task2() {
    const dispatch = useDispatch();
    const todoReducer = useSelector(state => state.todoReducer);
    const data = todoReducer.data;

    useEffect(() => {
        dispatch(
            requestAllTodos()
        )
    }, [])

    return (
        <div className="Task2">
            <div className="container">
                <div className="header">
                    <p className="network-status">Network: status</p>
                </div>
                <div className="body">
                    <div className="form">
                        <input type="text" />
                        <button onClick={() => { }}>+Task</button>
                    </div>
                    <div className="list-task">
                        <div className="task-title">
                            <p >Task name</p>
                            <p>Status</p>
                        </div>
                        {Array.isArray(data) ?
                            data.map((item, index) =>
                                <div className="item-task" key={item.id}>
                                    <input
                                        type="checkbox"
                                        checked={`${item.completed}` == 'true'}
                                        readOnly={true} />
                                    <p className="task-name">{item.name}</p>
                                    <button className="task-status" onClick={() => { }}>Edit</button>
                                </div>
                            )
                            : null}
                    </div>
                </div>
            </div>
        </div>
    )
}