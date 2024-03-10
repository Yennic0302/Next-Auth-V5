"use server";
import { getUserByEmail } from "@/data/user";
import { RegisterSchema } from "@/schemas/AuthForm";
import { db } from "@/utils/db";
import bcrypt from "bcrypt";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { name, email, password } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);
  const findUser = await getUserByEmail(email);

  if (findUser) return { error: "Email already exits" };

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: "User created! " };
};
