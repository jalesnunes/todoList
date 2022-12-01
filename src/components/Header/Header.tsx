import { ClipboardText } from 'phosphor-react'

import styles from "./Header.module.css";
import rocketImg from '../../assets/rocket.svg'

export function Header() {
    return(
        <header className={styles.header}>
            <ClipboardText size={32} />
            <img src={rocketImg} alt="" />
            <strong>to<span>do</span></strong>
        </header>
    )
}