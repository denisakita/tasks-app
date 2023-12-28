import {useState} from "react";
import {TaskCard} from "./TaskCard";

import "./TaskList.css";


const taskList = [
    {id: 1000, name: "Test1", completed: true},
    {id: 2000, name: "Test2", completed: false},
    {id: 3000, name: "Test3", completed: true},
]

function TaskList(props) {

    const [tasks, setTasks] = useState(taskList)
    const [show, setShow] = useState(true)
    const styles = {
        color: show ? "darkblue" : "darkred",
        border: "1px solid",
        borderColor: show ? "darkblue" : "darkred",
        borderRadius: "5px",
        fontSize: "28px",
        padding: "20px"
    }

    function handleDelete(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <section className='tasklist'>
            <ul>
                <div className='header'>
                    <h1>TaskList</h1>
                    <button className='trigger' onClick={() => setShow(!show)}>{ show ? "Hide Tasks" : "Show Tasks"}</button>
                </div>
                { show && tasks.map((task) => (
                    <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
                )) }
            </ul>
        </section>
    )
}

export default TaskList;

