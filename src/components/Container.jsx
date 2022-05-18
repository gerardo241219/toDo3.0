import { useEffect, useState } from "react"
import Form from "./Form"
import Header from "./Header"
import List from "./List"

const Container = () => {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const localS = () => {
      const tasksList = JSON.parse(localStorage.getItem('tareas'));
      setTask(tasksList);
    }

    localS();
  }, [])

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tasks));
  }, [tasks]);

  const handleEditar = (id, title, description, checked) => {
    const objEditTask = {
      id,
      title,
      description,
      checked
    }

    setTask(objEditTask);
    setEdit(true);
  }

  return (
    <div className="container">
      <Header />
      <div className="main">
        <Form
          tasks={tasks}
          setTasks={setTasks}
          task={task}
          edit={edit}
          setEdit={setEdit}
        />
        <List
          tasks={tasks}
          setTasks={setTasks}
          handleEditar={handleEditar}
        />
      </div>
    </div>
  )
}

export default Container