"use client";

import { login } from "@/actions/login";
import { LoginSchema } from "@/schemas/AuthForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Button from "../ui/Button";
import FormError from "../ui/FormError";
import FormSuccess from "../ui/FormSuccess";
import CardWrapper from "./CardWrapper";

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError(null);
    setSuccess(null);
    startTransition(() => {
      login(values).then((res) => {
        if (res.error) return setError(res.error);

        return setSuccess(res.success as string);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Don't have a account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className=" space-y-2">
          <div>
            <label className="font-semibold" htmlFor="email">
              Email{" "}
            </label>
            <input
              id="email"
              disabled={isPending}
              placeholder="John@gmail.com"
              autoComplete="off"
              {...form.register("email")}
              className="outline-none p-2 w-full border-black border-[1px] rounded-sm"
            />
            <span className="text-sm text-red-500">
              {form.formState.errors.email?.message}
            </span>
          </div>
          <div>
            <label className="font-semibold" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              disabled={isPending}
              placeholder="*********"
              type="password"
              {...form.register("password")}
              className="outline-none p-2 w-full  border-black border-[1px] rounded-sm"
            />
            <span className="text-sm text-red-500">
              {form.formState.errors.password?.message}
            </span>
          </div>
          <FormError error={error} />
          <FormSuccess message={success} />
        </div>
        <Button theme="dark">
          <input disabled={isPending} type="submit" value="Send" />
        </Button>
      </form>
    </CardWrapper>
  );
}
