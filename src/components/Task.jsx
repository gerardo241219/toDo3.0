const Task = ({ tasks, setTasks, id, title, description, date, checked, handleEditar }) => {

    const handleConclude = (id) => {
        const tasksEdit = tasks.map( taskEdit => {
            if( taskEdit.id === id ) {
                if( taskEdit.checked === true ) {
                    taskEdit.checked = false;
                    taskEdit.priority = 1;
                } else {
                    taskEdit.checked = true;
                    taskEdit.priority = 2;
                }
            }

            return taskEdit;
        })

        setTasks(tasksEdit);
    }

    return (
        <div className={checked ? `task-conclude task` : `task`} >
            <div className="taskTitleContainer">
                <div className="div-1" onClick={
                    () => {
                        handleEditar(id, title, description, checked)
                }}>
                    <h3 className="taskTitle">{ title }</h3>
                </div>
                <div className="div-2">
                    <input 
                        type="checkbox" 
                        onChange={
                            () => { handleConclude(id) } 
                        }
                        checked={checked}
                        disabled={checked ? true : false}
                    />
                </div>
            </div>

            <div className="footer">
                <div className="pDescription">
                    <p className="taskDescription">{ description }</p>
                </div>
                <div className="pDate">
                    <p className={checked ? `task-conclude-date taskDate` : `taskDate`}>{date}</p>
                </div>
            </div>
        </div>
    )
}

export default Task