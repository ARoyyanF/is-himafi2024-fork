"use client";

import { Loader2Icon } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

import Container from "@/components/layout/container";
import Logo from "@/components/logo";
import ThemeSwitch from "@/components/theme-switch";
import { H1, P } from "@/components/typography";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/toast/useToast";
import { zodResolver } from "@hookform/resolvers/zod";

import GoogleImage from "./google-icon";

interface LoginCardProps {
  className?: string;
}

/**
 * @name loginSchema
 * @description Schema untuk validasi form login. NIM harus mengikuti format NIM jurusan (10221xxx - 10222120) atau NIM TPB (16022001 - 16022999). Password tidak boleh kosong.
 * @example {nim: 10221001, password: "password"}
 */
const loginSchema = z.object({
  nim: z.union([
    z.coerce
      .number()
      .gte(10221000, "Format NIM salah")
      .lte(10222120, "Format NIM salah"),
    z.coerce
      .number()
      .gte(16022001, "Format NIM salah")
      .lte(16022999, "Format NIM salah"),
  ]),
  password: z.string().nonempty("Password must not be empty"),
});

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  const router = useRouter();
  const { status } = useSession();
  const [loading, setLoading] = useState(false);

  /** Inisialisasi useForm dengan resolver zodResolver, menggunakan schema loginSchema. */
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const { toast } = useToast();

  /**
   * @name onSubmit
   * @description Saat tombol login ditekan oleh user, langsung lakukan prosedur login dengan provider "credentials", menggunakan data dari form.
   * @param data Data yang dikirim dari form login, atau user input.
   * @returns Tidak ada, hanya mengubah status loading.
   * @see https://next-auth.js.org/getting-started/client#signin
   */
  async function onSubmit(data: z.infer<typeof loginSchema>) {
    /**
     * Set status loading menjadi true, untuk menunjukkan bahwa proses login sedang berlangsung.
     */
    setLoading(true);

    /** Tunggu hasil dari signIn. Jika berhasil maka akan dilakukan redirect ke halaman awal, sebaliknya jika ada error maka user tidak akan redirect kemanapun. */
    const res = await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      ...data,
    });

    /** Jika terdapat error dari sign in, maka status loading menjadi false, dan toast akan ditampilkan. User akan tetap berada di halaman login. */
    if (res?.error) {
      setLoading(false);
      toast({
        title: "Failed to login",
        description: res.error,
        variant: "destructive",
      });
    }
  }

  /** Jika loading tampilkan skeleton*/
  if (status === "loading")
    return (
      <Card className={twMerge("flex-col p-6 overflow-y-auto", className)}>
        <CardHeader>
          {/* <ThemeSwitch /> */}
          <div className="flex justify-center items-center">
            <Logo className="mb-12" width={100} height={100} />
          </div>
          <Skeleton className="w-[80px] h-[30px]" />
          <Skeleton className="w-[150px] h-[20px]" />
        </CardHeader>
        <CardContent>
          <Skeleton className="w-[75px] h-[20px] mt-1 mb-2" />
          <Skeleton className="w-full h-[35px] mb-2" />
          <Skeleton className="w-[75px] h-[20px] mb-2" />
          <Skeleton className="w-full h-[35px] mb-3" />
          <Skeleton className="w-[75px] h-[15px] mb-2" />
        </CardContent>
        <CardFooter>
          <Skeleton className="w-[75px] h-[35px] mr-4" />
          <Skeleton className="w-[150px] h-[35px]" />
        </CardFooter>
      </Card>
    );

  /**
   * Cek status session, jika "authenticated" maka redirect ke halaman utama.
   * @see https://next-auth.js.org/getting-started/client#session
   */
  if (status === "authenticated") {
    router.replace("/");
    return (
      <Container>
        <div className="flex flex-col justify-center items-center h-screen">
          <H1>You are already logged in</H1>
          <P>Please wait, we are redirecting you</P>
        </div>
      </Container>
    );
  }

  /**
   * Jika session tidak ada atau "unauthenticated", maka tampilkan halaman login.
   */
  return (
    <Card className={twMerge("flex-col p-6 overflow-y-auto", className)}>
      <CardHeader>
        {/* <ThemeSwitch /> */}
        <div className="flex justify-center items-center">
          <Logo className="mb-12" width={100} height={100} />
        </div>
        <CardTitle>Log In</CardTitle>
        <CardDescription>Enter your login details</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-3">
            <FormField
              control={form.control}
              name="nim"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NIM</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Masukkan NIM TPB kamu"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              variant={"link"}
              className="text-xs -mb-5 px-0 opacity-70 justify-self-end transition"
              asChild
            >
              <Link href={""}>Forgot Password</Link>
            </Button>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={loading}>
              {loading ? <Loader2Icon className="animate-spin" /> : "Log in"}
            </Button>
            <Button variant={"secondary"} className="ml-4">
              <GoogleImage height={20} width={20} />
              <span>Register with Google</span>
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default LoginCard;