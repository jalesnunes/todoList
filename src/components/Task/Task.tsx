import { PlusCircle } from 'phosphor-react'
import styles from './Task.module.css'

export function Task() {
    return (
        <div className={styles.form}>
            <form action="#">
                <input type="text" placeholder='Add a new task'/>
                <button>
                    Create
                    <PlusCircle size={16} />
                </button>
            </form>
        </div>
    )
}