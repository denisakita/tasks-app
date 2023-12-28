import './App.css';
import TaskList from "./components/TaskList";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {AddTask} from "./components/AddTask";
import {useState} from "react";

const taskList = [
    {id: 1000, name: "Test1", completed: true},
    {id: 2000, name: "Test2", completed: false},
    {id: 3000, name: "Test3", completed: true},
]

function App() {
    const [tasks, setTasks] = useState([]);

    return (
        <div className="App">
            <Header/>
            <main>
                <AddTask tasks={tasks} setTasks={setTasks}/>
                <TaskList tasks={tasks} setTasks={setTasks}/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
