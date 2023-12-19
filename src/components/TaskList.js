import {useState} from "react";
import {TaskCard} from "./TaskCard";


const taskList = [
    {id: 1000, name: "Test1", completed: true},
    {id: 2000, name: "Test2", completed: false},
    {id: 3000, name: "Test3", completed: true},
]

function TaskList(props) {

    const [tasks, setTasks] = useState(taskList)
    const [show, setShow] = useState(true)

    function handleDelete(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <div className="App">
            <h1>Tasks List {props.title}</h1>
            <ul>
                <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>

                {show && tasks.map((task) => (
                    <TaskCard key={task.id} task={task} handleDeleted={handleDelete}/>

                    // <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
                    //     <span>{task.id} - {task.name}</span>
                    //     <button onClick={() => handleDelete(task.id)} className="delete">Delete</button>
                    // </li>

                ))}
            </ul>
        </div>
    )

}

export default TaskList;

