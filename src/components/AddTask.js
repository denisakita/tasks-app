import "./AddTask.css";
import {useState} from "react";

export const AddTask = () => {

    const [taskValue, setTaskValue] = useState('');

    // 1. Add state for boolean value completed
    const [progress, setProgress] = useState(false);

    const handleChange = (event) => {
        setTaskValue(event.target.value);

    }

    const handleReset = () => {
        setTaskValue("");
        // 2. Add state for boolean value completed at reset
        setProgress(false);
    }

    // 4. Create onSubmit method for form
    const handleSubmit = (event) => {
        event.preventDefault();

        const task = {
            id: Math.floor(Math.random() * 1000),
            name: taskValue,
            completed: Boolean(progress)
        }
        console.log(task);
        handleReset();
    }

    return (
        <section className="addtask">
            {/*3. Create onSubmit method for form*/}
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="task" id="task"
                       placeholder="Task Name" value={taskValue}/>

                {/*5. Add select with 2 values*/}
                <select onChange={(event) => setProgress(event.target.value)} value={progress}>
                    <option value="false">Pending</option>
                    <option value="true">Completed</option>
                </select>

                <span onClick={handleReset} className="reset">Reset</span>
                <button type="submit">Add Task</button>

            </form>

        </section>
    )
}
