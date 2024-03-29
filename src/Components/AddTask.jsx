import { useState } from "react";

export default function AddTask({ submit, deleteCompleted }) {
    const [title, setTitle] = useState('');
    const [dsc, setDsc] = useState('');
    var completed = false;

    function handleTitleChange(e) {
        setTitle(e.target.value);
    };
    function handleDescriptionChange(e) {
        setDsc(e.target.value);
    };
    function handleSubmit(e) {
        e.preventDefault();
        if (!title.trim() || !dsc.trim()) {
            return;
        }
        submit({ title, dsc, completed });
        setTitle('');
        setDsc('');
    };
    return (
        <>
            <div className="addN">
                <div>
                    <h4>Titre:</h4>
                    <input type="text" value={title} onChange={handleTitleChange} id="Titre" placeholder="Titre de la tâche" />
                </div>
                <div>
                    <h4>Description:</h4>
                    <input type="text" value={dsc} onChange={handleDescriptionChange} id="Dsc" placeholder="Description de la tâche"/>
                </div>
            </div>
            <div className="addT">
                <button onClick={handleSubmit}> 
                    <i className='bx bx-add-to-queue icons'></i>
                    <p className="text"> Ajouter une tâche</p>
                </button>
                <button onClick={deleteCompleted}> 
                    <i className='bx bx-folder-minus icons'></i>
                    <p className="text"> Supprimer les tâches complétées</p>
                </button>
            </div>
        </>
    );
};