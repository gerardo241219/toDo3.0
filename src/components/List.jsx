import Task from "./Task"

const List = ({ tasks, setTasks, handleEditar}) => {

    const orderTasks = tasks.sort(((a, b) => a.priority - b.priority)); // Ordenamos las tareas por prioridad (Tareas por realizra primero, tareas finalizadas hacia abajo)

    return (
        <div className="container-list">
            <fieldset className="fieldsetList">
                <legend>Gestiona tus tareas</legend>

                <div className="list">
                    {
                        orderTasks.map( taskList => ( // Recorremos el arreglo de tareas acomodados por prioridades
                            
                            <Task
                                tasks={tasks} 
                                setTasks={setTasks}
                                key={taskList.id}
                                title={taskList.title}
                                description={taskList.description}
                                date={taskList.dateC}
                                id={taskList.id}
                                checked={taskList.checked}
                                handleEditar={handleEditar}
                            />
                        ))
                    }
                </div>
            </fieldset>
        </div>
    )
}

export default List