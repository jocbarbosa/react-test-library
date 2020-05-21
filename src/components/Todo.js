import React, { useState } from 'react';

export default function () {

    const [task, updateTask] = useState('');
    const [tasks, updateTasks] = useState([]);

    const handleInputChange = event => updateTask(event.target.value);


    const handleFormSubmit = event => {
        event.preventDefault();
        if (task.trim()) {
            updateTasks([...tasks, task]);
            updateTask('');
        }

    }

    return (
        <React.Fragment>
            <form onSubmit={handleFormSubmit}>
                <input
                    data-testid="form-field"
                    onChange={handleInputChange}
                    placeholder="Type a new Task"
                    type="text"
                    value={task}
                ></input>
                <button
                    data-testid="form-btn"
                    type="submit">
                    Add Task
                </button>
            </form>
            <table data-testid="table">
                <thead>
                    <tr>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((t, index) => (
                        <tr key={index}>
                            <td>{t}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    )
}