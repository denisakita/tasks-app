import './App.css';
import {useState} from "react";

const taskList = [
    {id: 1000, name: "Test1", completed: true},
    {id: 2000, name: "Test2", completed: false},
    {id: 3000, name: "Test3", completed: true},
]

function App() {
    const [tasks, setTasks] = useState(taskList)


    function handleDelete(id) {
        setTasks(tasks.filter(task =>task.id !== id))
    }

    return (
        <div className="App">
            <h1>Tasks List</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span>{task.id} - {task.name}</span>
                        <button onClick={()=>handleDelete(task.id)} className="delete">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
