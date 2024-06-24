import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <Link to="/">
                <img src="../../assets/Logo.png" alt="Logo Kenzie Hub" />
            </Link>
        </header>
    )
}