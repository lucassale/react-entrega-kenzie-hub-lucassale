import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext.jsx";
import { Header } from "../../components/Header";

export const DashboardPage = () => {
  const { user, logoutUser } = useContext(UserContext);

  return (
    <main>
      <Header />
      <div>
        <p>Olá, {user ? user.name : "Usuário"}</p>
        <span>{user ? user.courseModule : "Módulo não definido"}</span>
        <button onClick={logoutUser}>Logout</button>
      </div>
    </main>
  );
};
