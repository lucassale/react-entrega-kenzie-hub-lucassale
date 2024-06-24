import { z } from "zod";

export const formSchemaRegister = z.object({
    name: z
        .string()
        .nonempty("Nome é obrigatório!"),

    email:  z
        .string()
        .nonempty("E-mail é obrigatório!")
        .email("Forneça um e-mail válido"),

    password:  z
        .string()
        .nonempty("Senha é obrigatório!")
        .min(8, "É necessário pelo menos 8 caracteres!")
        .regex(/(?=.*?[A-Z])/, "É necessário pelo menos ! letra Maiúscula!")
        .regex(/(?=.*?[a-z])0/, "É necessário pelos menos 1 letra minúscula!")
        .regex(/(?=.*?[0-9])/, "É necessário pelos menos 1 número!"),

    passwordConfirm:  z
        .string()
        .nonempty("Senha é obrigatório!")
        .min(8, "É necessário pelo menos 8 caracteres!")
        .regex(/(?=.*?[A-Z])/, "É necessário pelo menos ! letra Maiúscula!")
        .regex(/(?=.*?[a-z])0/, "É necessário pelos menos 1 letra minúscula!")
        .regex(/(?=.*?[0-9])/, "É necessário pelos menos 1 número!"),

    bio: z
        .string()
        .nonempty("Bio é obrigatória"),

    contactRegister: z
        .string()
        .nonempty("É obrigatório")
})

/*
At least one upper case English letter, (?=.*?[A-Z])
At least one lower case English letter, (?=.*?[a-z])
At least one digit, (?=.*?[0-9])
At least one special character, (?=.*?[#?!@$%^&*-])
Minimum eight in length .{8,} (with the anchors)
*/