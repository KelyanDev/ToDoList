import { useState } from "react";
import AddTask from "./AddTask";
import DisplayTask from "./DisplayTask";

export default function ManageTasks() {
    const [Tasks, setTasks] = useState([]);

    function createTask(task) {
        setTasks([...Tasks, task])
    };
    function deleteTask(index) {
        const updatedTasks = Tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks)
    };
    function toggleCompleted(index) {
        const updatedTasks = [...Tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };
    function deleteCompleted() {
        const updatedTasks = Tasks.filter(Task => !Task.completed)
        setTasks(updatedTasks)
    };
    function editTask(index, updatedTask) {
        const updatedTasks = [...Tasks];
        updatedTasks[index] = updatedTask;
        setTasks(updatedTasks);
    };
    return (
        <div className="manageTasks">
            <h3> Ajouter une tâche</h3>
            <AddTask submit={createTask} deleteCompleted={deleteCompleted}/>
            <DisplayTask tasks={Tasks} onDelete={deleteTask} editTask={editTask} toggleCompleted={toggleCompleted}/>
        </div>
    );
};