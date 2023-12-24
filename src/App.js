import './App.css';
import TaskList from "./components/TaskList";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";


function App() {

    return (
        <div className="App">
            <Header/>
            <TaskList title="12/12/2023"/>
            <Footer/>
        </div>

)
    ;
}

export default App;
