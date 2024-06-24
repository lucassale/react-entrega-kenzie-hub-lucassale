import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaRegister } from "../schemas/formSchemaRegister";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext.jsx";
import { Api } from "../../services/api.js";

export const FormRegister = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchemaRegister),
  });
  const navigate = useNavigate();
  const { loginUser } = useContext(UserContext);

  const submit = async (formData) => {
    try {
      const response = await Api.post("/users", formData);
      loginUser(response.data);
      navigate("/");
      alert("Cadastro efetuado com sucesso");
    } catch (error) {
      console.error("Error registering user", error);
      alert("Erro ao cadastrar, tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h1>Crie sua conta</h1>
      <span>Rápido e grátis, vamos nessa</span>
      <div>
        <label htmlFor="Name">Nome</label>
        <input name="Name" id="name-register" type="text" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="Email">E-mail</label>
        <input name="Email" id="email-register" type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="Password">Senha</label>
        <input name="Password" id="password-register" type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <label htmlFor="PasswordConfirm">Confirmar Senha</label>
        <input name="PasswordConfirm" id="password-confirm-register" type="password" {...register("passwordConfirm")} />
        {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
      </div>
      <div>
        <label htmlFor="Bio">Bio</label>
        <input name="Bio" id="bio" type="text" {...register("bio")} />
        {errors.bio && <p>{errors.bio.message}</p>}
      </div>
      <div>
        <label htmlFor="Contact">Contato</label>
        <input name="Contact" id="contact-register" type="text" {...register("contactRegister")} />
        {errors.contactRegister && <p>{errors.contactRegister.message}</p>}
      </div>
      <select name="Module" id="module" {...register("courseModule")} >
        <option value="">Escolha uma opção</option>
        <option value="module1">Módulo 1</option>
        <option value="module2">Módulo 2</option>
      </select>
      {errors.courseModule && <p>{errors.courseModule.message}</p>}
      <button type="submit">Cadastrar</button>
    </form>
  );
};
