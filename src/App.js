import './App.css';
import TaskList from "./components/TaskList";
import {Header} from "./components/Header";


function App() {

    return (
        <div className="App">
            <Header/>
            <TaskList title="12/12/2023"/>
        </div>

)
    ;
}

export default App;
