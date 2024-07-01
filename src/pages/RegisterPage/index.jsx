import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import { FormRegister } from "../../components/FormRegister"
import styles from "./style.module.css"


export const RegisterPage = () => {


    return (
        <main>

            <div className={styles.container}>
                <Header/>
                <Link to="/">Voltar</Link>
            </div>
            
            <FormRegister/>
           
        </main>
    )
}