import { FormEvent, useState } from 'react'
import styles from './Tasks.module.scss'
import { log } from 'console';
import { render } from '@testing-library/react';


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

        setTask([
            ...task,
            { id: new Date().getTime(), title: taskTitle, done: false }
        ]);
        setTaskTitle("");

    }

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