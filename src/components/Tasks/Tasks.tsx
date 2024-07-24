import { FormEvent, useEffect, useState } from 'react'
import styles from './Tasks.module.scss'


interface Task {
    title: string;
    done: boolean;
    id: number;
}

export const Tasks: React.FC = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [task, setTask] = useState([] as Task[]); 

    //Função quando adiciona tarefa
    function handleSubmitAddTask(event: FormEvent){
        event.preventDefault();
        
        if(taskTitle.length <= 3){
            alert('Não é possível adicionar uma tarefa tão curta. Mínmo de 3 digitos');
            return;
        }

        const newTasks = [
            ...task,
            { id: new Date().getTime(), title: taskTitle, done: false }
        ]

        setTask(newTasks);
        localStorage.setItem('Tasks', JSON.stringify(newTasks));
        setTaskTitle("");

    }
    useEffect(() =>{
        const tasksOnLocalStorage = localStorage.getItem('Tasks');

        if(tasksOnLocalStorage){
            setTask(JSON.parse(tasksOnLocalStorage));
        }
    }, [])
    return(
        <section className={styles.container}>
            <form onSubmit={handleSubmitAddTask}>
                <div>
                    <label htmlFor='new-task'>Adicionar Tarefa</label>
                    <input value={taskTitle} onChange={(event) => setTaskTitle(event.target.value)}
                     type="text" id='new-task' placeholder='Titulo da Tarefa'/>
                </div>
                <button type="submit" >Adicionar Tarefa</button>
            </form>
            <ul>
                {task.map(task => {
                    return(
                        <li key={task.id}>
                            <input type="checkbox" id={`task-${task.id}`} />
                            <label htmlFor="task">{task.title}</label>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
} 