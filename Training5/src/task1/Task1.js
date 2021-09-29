import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestAllTodos, addTodo, updateTodo, deleteTodo, searchTodo } from '../redux/modules/task1/actions';
import './Task1.css';

function Task1() {
    const [input, setInput] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [search, setSearch] = useState('');
    const [showCompleted, setShowCompleted] = useState(true);
    const [showIncomplete, setShowIncomplete] = useState(true)
    const dispatch = useDispatch();
    const todoReducer = useSelector(state => state.todoReducer);
    const data = todoReducer.filteredData;

    useEffect(() => {
        getAllTodos();
    }, []);
    useEffect(() => {
        setInput('');
        setIsCompleted(false);
        setEditingId(null);
    }, [data]);

    function getAllTodos() {
        dispatch(
            requestAllTodos()
        );
    }
    function dispatchAddTodo() {
        dispatch(
            addTodo({
                body:
                {
                    name: input,
                    completed: isCompleted
                }
            })
        )
    }
    function startEditing(id, name, completed) {
        setInput(name);
        setIsCompleted(`${completed}` == 'true');
        setEditingId(id);
    }
    function dispatchUpdateTodo() {
        if (window.confirm("Do you really want to edit?")) {
            dispatch(
                updateTodo({
                    id: editingId,
                    body:
                    {
                        name: input,
                        completed: isCompleted
                    }
                })
            )
        }
    }
    function dispatchDeleteTodo(id) {
        if (window.confirm("Do you really want to detele?")) {
            dispatch(
                deleteTodo({
                    id,
                })
            )
        }
    }
    function searching() {
        dispatch(
            searchTodo({
                name: search,
                incomplete: showIncomplete,
                completed: showCompleted
            })
        )
    }
    return (
        <div className="Task1">
            <h1>Todo list</h1>
            <label>
                Name:
                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            </label>
            <label>
                Completed:
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => setIsCompleted(!isCompleted)} />
            </label>
            <button onClick={dispatchAddTodo}>Add</button>
            {
                editingId ?
                    <button onClick={dispatchUpdateTodo}>Save</button>
                    : null
            }
            <div>
                <label>
                    Search:
                    <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
                </label>
                <label>
                    Show incomplete:
                    <input
                        type="checkbox"
                        checked={showIncomplete}
                        onChange={() => setShowIncomplete(!showIncomplete)} />
                </label>
                <label>
                    Show completed:
                    <input
                        type="checkbox"
                        checked={showCompleted}
                        onChange={() => setShowCompleted(!showCompleted)} />
                </label>
                <button onClick={searching}>Search</button>
            </div>

            <table className="table table-todo-list">
                <tbody>
                    {Array.isArray(data) ?
                        data.map((item, index) =>
                            <tr key={item.id}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={`${item.completed}` == 'true'}
                                        readOnly={true} />
                                </td>
                                <td>{item.name}</td>
                                <td>
                                    <button onClick={() => startEditing(item.id, item.name, item.completed)}>Edit</button>
                                    <button onClick={() => dispatchDeleteTodo(item.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                        : null}
                </tbody>
            </table>
        </div>
    );
}

export default Task1;
