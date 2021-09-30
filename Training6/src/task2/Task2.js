import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { requestAllTodos, addTodo, updateTodo, deleteTodo, readyTodo, submitTodo } from '../redux/modules/task2/actions';
import './Task2.css';

export default function Task2() {
    const dispatch = useDispatch();
    const todoReducer = useSelector(state => state.todoReducer);
    const data = todoReducer.data;
    const drafts = todoReducer.drafts;
    const mergedData = data.concat(drafts);
    const networkStatus = todoReducer.networkStatus;
    const [input, setInput] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);
    const statusColor = (status) => {
        switch (status) {
            case "READY":
                return 'lightskyblue';
            case "SUBMITTING":
                return 'yellow';
            case "SUCCESS":
                return 'lightgreen';
            case "ERROR":
                return 'red';
            default:
                return 'white'
        }
    }
    useEffect(() => {
        console.log('network status:', networkStatus);
    }, [networkStatus])

    useEffect(() => {
        dispatch(
            requestAllTodos()
        )
    }, []);

    useEffect(() => {
        setInput('');
        setIsCompleted(false);
    }, [drafts]);

    const dispatchAddTodo = () => {
        dispatch(
            addTodo({
                id: Date.now(),
                name: input,
                completed: isCompleted,
                status: "DRAFT"
            })
        )
    }

    const dispatchReadyTodo = (item) => {
        if (item.status === "DRAFT" || item.status === "ERROR") {
            dispatch(
                readyTodo({ id: item.id })
            )
        }
    }

    return (
        <div className="Task2">
            <div className="task2-container">
                <div className="task2-header">
                    <div className="network-status">
                        <label>
                            Network:
                            <p style={{ color: networkStatus === "online" ? "green" : "red" }}> {networkStatus}</p>
                        </label>
                    </div>
                </div>
                <div className="task2-body">
                    <div className="form">
                        <input className="input-name" type="text" value={input} onChange={e => setInput(e.target.value)} />
                        <input
                            className="input-isCompleted"
                            type="checkbox"
                            checked={isCompleted}
                            onChange={() => setIsCompleted(!isCompleted)} />
                        <button onClick={dispatchAddTodo}>+Task</button>
                    </div>
                    <div className="list-task">
                        <div className="task-title">
                            <p >Task name</p>
                            <p>Status</p>
                        </div>
                        {Array.isArray(mergedData) ?
                            mergedData.map((item, index) =>
                                <div className="item-task" key={item.id}>
                                    <input
                                        type="checkbox"
                                        checked={`${item.completed}` == 'true'}
                                        readOnly={true} />
                                    <p className="task-name">{item.name}</p>
                                    <button className="task-status" onClick={() => dispatchReadyTodo(item)} style={{ backgroundColor: statusColor(item.status) }}>{item.status}</button>
                                </div>
                            )
                            : null}
                    </div>
                </div>
            </div>
        </div>
    )
}