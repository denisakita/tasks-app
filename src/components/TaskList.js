import {useState} from "react";
import {TaskCard} from "./TaskCard";
import {BoxCard} from "./BoxCard";
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
        color: "darkred",
        border: "1px solid darkred"
    }

    function handleDelete(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <section className='tasklist'>
            <h1 style={styles}>Task List
            </h1>
            <ul>
                <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>
                {show && tasks.map((task) => (
                    <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
                ))}
            </ul>
            <BoxCard result="success">
                <p className="title">Offer Notification</p>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
                    vel!</p>
            </BoxCard>

            <BoxCard result="warning">
                <p className="title">Cookie Notification</p>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
                    suscipit.</p>
            </BoxCard>
        </section>
    )
}

export default TaskList;

