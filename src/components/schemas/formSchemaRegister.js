import { z } from "zod";

export const formSchemaRegister = z.object({
  name: z
    .string()
    .nonempty("Nome é obrigatório!"),

  email: z
    .string()
    .nonempty("E-mail é obrigatório!")
    .email("Forneça um e-mail válido!"),

  password: z
    .string()
    .nonempty("Senha é obrigatória!")
    .min(6, "A senha deve ter pelo menos 6 caracteres!")
    .regex(/(?=.*?[A-Z])/, "A senha deve ter pelo menos uma letra maiúscula!")
    .regex(/(?=.*?[0-9])/, "A senha deve ter pelo menos um número!"),

  passwordConfirm: z
    .string()
    .nonempty("Confirmação de senha é obrigatória!"),

  bio: z
    .string()
    .nonempty("Bio é obrigatória!"),

  contact: z
    .string()
    .nonempty("Contato é obrigatório!"),

  courseModule: z
    .string()
    .nonempty("Módulo do curso é obrigatório!")
}).superRefine((data, context) => {
  if (data.password !== data.passwordConfirm) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      message: "As senhas não coincidem",
      path: ["passwordConfirm"]
    });
  }
});



/*
At least one upper case English letter, (?=.*?[A-Z])
At least one lower case English letter, (?=.*?[a-z])
At least one digit, (?=.*?[0-9])
At least one special character, (?=.*?[#?!@$%^&*-])
Minimum eight in length .{8,} (with the anchors)
*/