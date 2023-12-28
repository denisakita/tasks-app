import "./AddTask.css";
import {useRef, useState} from "react";

export const AddTask = ({tasks, setTasks}) => {
    // const [taskValue, setTaskValue] = useState("");

    // 1. Add state for boolean value completed
    const [progress, setProgress] = useState(false);
    const taskRef = useRef("");


    // const handleChange = (event) => {
    //     setTaskValue(event.target.value);
    //
    // }

    // const handleChange = (event) => {
    //     console.log(taskRef.current.value)
    // }

    const handleReset = () => {
        // 2. Add state for boolean value completed at reset
        // setTaskValue("");
        taskRef.current.value = "";
        setProgress(false);
    }

    // 4. Create onSubmit method for form
    const handleSubmit = (event) => {
        event.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskRef.current.value,
            completed: Boolean(progress)
        }
        setTasks([...tasks, task]);
        handleReset();
    }

    return (
        <section className="addtask">
            {/*3. Create onSubmit method for form*/}
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" id="task"
                       placeholder="Task Name" ref={taskRef}/>

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
