import { useEffect, useState } from "react"

const Form = ({ tasks, setTasks, task, edit, setEdit }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const today = new Date();
    const date = String(today.getDate()).padStart(2, '0') + '/' + String(today.getMonth() + 1).padStart(2, '0') + '/' + today.getFullYear();
    const hour = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    // Asignar un valor a nuestros inputs una vez que deseamos realizar una modificacion
    useEffect(() => {
        if( Object.keys(task).length > 0) { // Comprobamos que existan llaves en nuestro objeto
            setTitle(task.title);
            setDescription(task.description);
        }
    }, [task]);

    const handleSubmit = e => {
        e.preventDefault();

        if ([title, description].includes('')) { // Verificamos si el arreglo contiene espacios vacios
            alert('Antes de continuar debes llenar todos los campos');
            return;
        }

        const id = Date.now().toString(36);

        const objTask = {
            id,
            title,
            description,
            dateC: date + '\n' + hour,
            priority: 1,
            checked: false,
        }

        setTasks([...tasks, objTask]);

        setTitle('');
        setDescription('');
    }

    const handleEditTask = e => {
        e.preventDefault();

        if ([title, description].includes('')) { // Verificamos si el arreglo contiene espacios vacios
            alert('Antes de continuar debes llenar todos los campos');
            return;
        }

        const tasksEdit = tasks.map(taskEdit => {
            if (taskEdit.id === task.id) {
                taskEdit.title = title;
                taskEdit.description = description;
                taskEdit.checked = false;
                taskEdit.priority = 1;
            }

            return taskEdit;
        });

        setTasks(tasksEdit);
        setEdit(false);
        setTitle('');
        setDescription('');
    }

    return (
        <div className="container-form">
            <fieldset className="fieldsetForm">
                <legend> {edit ? 'Editar tarea' : 'Añade una nueva tarea'} </legend>

                <form
                    className="form"
                    onSubmit={edit ? handleEditTask : handleSubmit}>

                    <div className="inputs inputs-first">
                        <input
                            type="text"
                            placeholder={edit ? task.title : "Titulo"}
                            value={title}
                            onChange={
                                e => {
                                    setTitle(e.target.value);
                                }
                            }
                        />
                    </div>
                    <div className="inputs">
                        <textarea
                            placeholder={edit ? task.description : "Descripcion"}
                            value={description}
                            onChange={
                                e => {
                                    setDescription(e.target.value);
                                }
                            }>
                        </textarea>
                    </div>
                    <div className="inputs">
                        <input type="submit" value={edit ? `Editar` : `Agregar`} />
                    </div>
                </form>
            </fieldset>
        </div>
    )
}

export default Form