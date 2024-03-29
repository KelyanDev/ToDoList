import { useState } from "react";

export default function DisplayTask({ tasks, onDelete, editTask, toggleCompleted }) {
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedDsc, setEditedDsc] = useState('');
    
    function handleDelete(index) {
        onDelete(index);
    };
    function handleEditStart(index) {
        setEditingIndex(index);
        setEditedTitle(tasks[index].title);
        setEditedDsc(tasks[index].dsc);
    };
    function handleEditCancel() {
        setEditingIndex(null);
        setEditedTitle('');
        setEditedDsc('');
    };
    function handleEditSubmit(index) {
        editTask(index, { ...tasks[index], title: editedTitle, dsc: editedDsc });
        setEditingIndex(null);
        setEditedTitle('');
        setEditedDsc('');
    };
    return (
        <>
            <hr />
            <h3> Liste tâches</h3>
            <ul className="deroule">
                {tasks.map((task, index) =>(
                    <li key={index}>
                        {editingIndex === index ? (
                            <>
                                <div className="titles">
                                    <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
                                    <div className='up' />
                                    <input type="text" value={editedDsc} onChange={(e) => setEditedDsc(e.target.value)} />
                                </div>
                                <div className="Options">
                                    <button onClick={() => handleEditSubmit(index)}><i class='bx bx-save icons'></i><p className="text"> Enregistrer </p></button>
                                    <button onClick={handleEditCancel}><i class='bx bx-x-circle icons'></i><p className="text"> Annuler </p></button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="titles">
                                    <span>{task.title}</span>
                                    <div className="up"></div> 
                                    <span className="description">{task.dsc}</span>
                                </div>
                                <div className="Options">
                                    <button onClick={() => toggleCompleted(index)}>
                                        <i className={task.completed ? 'bx bx-x-circle icons' : 'bx bx-check-circle icons'}></i>
                                        <p className="text">{task.completed ? "Tâche Terminée" : "Tâche non terminée "}</p>
                                    </button>
                                    <button onClick={() => handleEditStart(index)}><i className='bx bx-cog icons'></i><p className="text">Editer</p></button>
                                    <button onClick={() => handleDelete(index)}><i className='bx bx-trash icons'></i><p className="text">Supprimer</p></button>
                                </div>
                            </>
                        )}
                        
                    </li>
                ))}
            </ul>
        </>
    );
}