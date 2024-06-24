import { Link } from "react-router-dom"

export const ErrorPage = () => {
    return (
        <div>
            <p>404: Página não encontrada</p>
            <Link to="/">Retornar para Login</Link>
        </div>
    )
}