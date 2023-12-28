import "./AddTask.css";

export const AddTask = () => {
    return (
        <section className="task">
            <form>
                <label htmlFor="task">Task</label>
                <input type="text" name="task" id="task" placeholder="Task Name"/>
                <button type="submit">Add Task</button>
            </form>
        </section>
    )
}
