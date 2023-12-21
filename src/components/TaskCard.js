export const TaskCard = ({ task, handleDelete }) => {
    return (
        <li className={task.completed ? "completed" : "incomplete"}>
            <span>{task.id} - {task.name}</span>
            <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
        </li>
    )
}

//dont need so many props repeated
// export const TaskCard = (props) => {
//     return (
//         <li key={props.task.id} className={props.task.completed ? "completed" : "incomplete"}>
//             <span>{props.task.id} - {props.task.name}</span>
//             <button onClick={() => props.handleDeleted(props.task.id)} className="delete">Delete</button>
//         </li>
//     )
// }
