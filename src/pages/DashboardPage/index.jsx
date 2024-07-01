import React, { useContext } from "react"
import { UserContext } from "../../contexts/UserContext.jsx"
import { Header } from "../../components/Header"
import { Link } from "react-router-dom"
import styles from "./style.module.css"

export const DashboardPage = () => {
  const { user, logoutUser } = useContext(UserContext)

  return (
    <main>
      <div className={styles.cabecalho}>
        <Header />
        <Link to={"/"} className={styles.link}>Sair</Link>
      </div>
    
      <div>
        <p>Olá, {user ? user.name : "Usuário"}</p>
        <span>{user ? user.courseModule : "Módulo não definido"}</span>
        
      </div>
    </main>
  )
}
