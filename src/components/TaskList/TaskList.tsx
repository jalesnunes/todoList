import { ClipboardText } from 'phosphor-react'
import styles from '../TaskList/TaskList.module.css'

export function TaskList() {
    return(
        <div className={styles.content}>
            <header>
                <div className={styles.created}> 
                    <strong >
                        Tasks created
                    </strong>
                    <span>10</span>
                </div>

                <div className={styles.completed}>
                    <strong > 
                        Completed
                    </strong>
                    <span>0</span>
                </div>
            </header>

            <hr />
            <div className={styles.cards}>
                <div className={styles.empty}>
                    <ClipboardText size={56} />
                    <strong>You don't have tasks registered yet</strong>
                    <p>Create tasks and organize your to-do items</p>
                </div>

            </div>
        </div>
    )
}