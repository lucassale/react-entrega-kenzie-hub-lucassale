import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import { FormRegister } from "../../components/FormRegister"


export const RegisterPage = () => {


    return (
        <main>

            <div>
                <Header/>
                <Link to="/">Voltar</Link>
            </div>
            
            <FormRegister/>
           
        </main>
    )
}