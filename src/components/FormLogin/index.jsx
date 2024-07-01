import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchemaLogin } from "../schemas/formSchemaLogin"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext.jsx"
import { Api } from "../../services/api.js"
import { Link } from "react-router-dom"
import styles from "./style.module.css"

export const FormLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchemaLogin),
  })
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext)

  const submit = async (formData) => {
    try {
      const response = await Api.post("/sessions", formData)
      loginUser(response.data.user)
      localStorage.setItem("token", response.data.token)
      navigate("/dashboard")
      alert("Login realizado com sucesso")
    } catch (error) {
      console.error("Error logging in", error)
      alert("Erro ao fazer login, tente novamente.")
    }
  }

  return (

      <form onSubmit={handleSubmit(submit)} className={styles.container}>

        <div className={styles.div}>
          <label htmlFor="Email">E-mail</label>

          <input name="Email" id="email-login" type="email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className={styles.div}>
          <label htmlFor="Password">Senha</label>

          <input name="Password" id="password-login" type="password" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit" >Entrar</button>

        <div className={styles.registerLogin}>
          <p className={styles.paragraphy}>Ainda não possui uma conta?</p>
          
          <Link to="/register">
              <button type="submit">Cadastre-se</button>
          </Link>
        </div>

      </form>
  )
}
