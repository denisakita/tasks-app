import './App.css';
import TaskList from "./components/TaskList";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {AddTask} from "./components/AddTask";


function App() {

    return (
        <div className="App">
            <Header/>
            <AddTask/>
            <TaskList title="12/12/2023"/>
            <Footer/>
        </div>

    )
        ;
}

export default App;
