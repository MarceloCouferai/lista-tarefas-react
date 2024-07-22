import styles from './Tasks.module.scss'


export const Tasks: React.FC = () => {
    return(
        <section className={styles.container}>
            <form>
                <div>
                    <label htmlFor='new-task'>Adicionar Tarefa</label>
                    <input type="text" id='new-task' placeholder='Titulo da Tarefa'/>
                </div>
                <button>Adicionar Tarefa</button>
            </form>
        </section>
    )
} 