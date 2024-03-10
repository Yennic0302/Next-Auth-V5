import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .email({ message: "Email must be a valid email" })
    .min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "password is required" }),
});

export const RegisterSchema = z.object({
  email: z
    .string()
    .email({ message: "Email must be a valid email" })
    .min(1, { message: "Email is required" }),
  password: z.string().min(6, { message: "Minimun 6 caracters" }),
  name: z.string().min(1, { message: "Name is required" }),
});
