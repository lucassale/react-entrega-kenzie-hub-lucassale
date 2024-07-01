import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaRegister } from "../schemas/formSchemaRegister";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext.jsx";
import { Api } from "../../services/api.js";
import styles from "./style.module.css";

export const FormRegister = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchemaRegister),
  });
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);

  const submit = async (formData) => {
    try {
      const response = await Api.post("/users", {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        bio: formData.bio,
        contact: formData.contact,
        course_module: formData.courseModule
      });
      loginUser(response.data);
      navigate("/");
      alert("Cadastro efetuado com sucesso");
    } catch (error) {
      console.error("Error registering user", error);
      alert("Erro ao cadastrar, tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.container}>
      <h1 className="title">Crie sua conta</h1>
      <span className="title headline">Rápido e grátis, vamos nessa</span>
      <div className={styles.div}>
        <label htmlFor="name-register">Nome</label>
        <input name="name" id="name-register" type="text" {...register("name")} placeholder="Digite seu nome aqui"/>
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div className={styles.div}>
        <label htmlFor="email-register">E-mail</label>
        <input name="email" id="email-register" type="email" {...register("email")} placeholder="Digite seu e-mail aqui"/>
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div className={styles.div}>
        <label htmlFor="password-register">Senha</label>
        <input name="password" id="password-register" type="password" {...register("password")} placeholder="Digite sua senha aqui"/>
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div className={styles.div}>
        <label htmlFor="password-confirm-register">Confirmar Senha</label>
        <input name="passwordConfirm" id="password-confirm-register" type="password" {...register("passwordConfirm")} placeholder="Digite novamente sua senha"/>
        {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
      </div>
      <div className={styles.div}>
        <label htmlFor="bio">Bio</label>
        <input name="bio" id="bio" type="text" {...register("bio")} placeholder="Fale sobre você" />
        {errors.bio && <p>{errors.bio.message}</p>}
      </div>
      <div className={styles.div}>
        <label htmlFor="contact-register">Contato</label>
        <input name="contact" id="contact-register" type="tel" {...register("contact")} placeholder="Opção de contato"/>
        {errors.contact && <p>{errors.contact.message}</p>}
      </div>
      <div className={styles.div}>
        <label htmlFor="course-module">Selecionar módulo</label>
        <select name="courseModule" id="course-module" {...register("courseModule")} className={styles.div}>
          <option value="">Selecione um módulo</option>
          <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
          <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
          <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
          <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
        </select>
        {errors.courseModule && <p>{errors.courseModule.message}</p>}
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};
