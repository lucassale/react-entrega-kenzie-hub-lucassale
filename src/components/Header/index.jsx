import { Link } from "react-router-dom"
import Logo from "../../assets/Logo.png"
import styles from "./style.module.css"

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img src={Logo} alt="Logo Kenzie Hub" />
            </Link>
        </header>
    )
}
