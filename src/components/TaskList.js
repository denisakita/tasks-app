import {useState} from "react";
import {TaskCard} from "./TaskCard";
import {BoxCard} from "./BoxCard";


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
                    <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>

                    // <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
                    //     <span>{task.id} - {task.name}</span>
                    //     <button onClick={() => handleDelete(task.id)} className="delete">Delete</button>
                    // </li>

                ))}
            </ul>

            <BoxCard result="success">
                <p className="title">Lorem ipsum dolor sit amet.</p>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
                    vel!</p>
            </BoxCard>

            <BoxCard result="warning">
                <p className="title">Lorem ipsum dolor sit.</p>
                <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, eum odit!
                    Labore eaque fuga repellat adipisci molestias quasi animi fugiat necessitatibus sunt vel, optio rem
                    non quidem! Blanditiis cupiditate iusto omnis reprehenderit assumenda maxime, nam perferendis
                    impedit libero odit eius eum aut cum ad, excepturi officiis repudiandae. Molestiae, eum cumque?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nulla?</p>
            </BoxCard>

        </div>
    )

}

export default TaskList;

