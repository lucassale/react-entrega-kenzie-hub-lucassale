import { FormLogin } from "../../components/FormLogin"
import { Header } from "../../components/Header"
import  styles  from "./style.module.css"

export const LoginPage = () => {
    return (
        <div className={styles.loginPage}>
            <Header/>
            <main>            
                <h1 className="title">Login</h1>
                <FormLogin/>
            </main>
        </div>
        
    )
}