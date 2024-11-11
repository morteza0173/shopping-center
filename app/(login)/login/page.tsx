"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { loginSchema, registerSchema } from "@/utils/zodSchema";
import { loginAction, registerAction } from "@/utils/actionsClient";
import { ReloadIcon } from "@radix-ui/react-icons";
import { redirect } from "next/navigation";

function LoginPage() {

  //بررسی لاگین بودن
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      redirect("/");
    }
  }, []);

  // تغییر تب ها با کلیک روی لینک
  const [activeTab, setActiveTab] = useState("login");
  const changeTab = (tabId: string) => {
    setActiveTab(tabId);
  };
  const [pending, setPending] = useState(false);

  // فانکشن های مربوط به لاگین

  type LoginFormInputs = z.infer<typeof loginSchema>;

  const loginForm = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmitLogin = async (data: LoginFormInputs) => {
    try {
      setPending(true);
      const user = await loginAction(data);
      console.log(user);
      setPending(false);
    } catch (error) {
      console.log(error);
      setPending(false);
    }
  };

  // فانکشن های مربوط به ثبت نام

  type registerFormInputs = z.infer<typeof registerSchema>;

  const registerForm = useForm<registerFormInputs>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmitRegister = async (data: registerFormInputs) => {
    try {
      setPending(true);
      const user = await registerAction(data);
      setPending(false);
      setActiveTab("login");
    } catch (error) {
      console.log(error);
      setPending(false);
    }
  };

  return (
    <div className="flex justify-center">
      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value)}
        className="w-[400px]"
        dir="rtl"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">ورود به سایت</TabsTrigger>
          <TabsTrigger value="register">عضویت</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card className="w-96 mt-8">
            <CardHeader>
              <CardTitle>ورود به سایت</CardTitle>
              <CardDescription>
                به شاپینگ سنتر خوش آمدید لطفا برای ورود نام کاربری و پسورد خود
                را وارد کنید
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Form {...loginForm}>
                <form
                  onSubmit={loginForm.handleSubmit(onSubmitLogin)}
                  className="space-y-8"
                >
                  <FormField
                    control={loginForm.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>نام کاربری</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="نام کاربری خود را وارد کنید"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>رمز عبور</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="رمز عبور خود را وارد کنید"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button size="lg" className="w-full" disabled={pending}>
                    {pending ? (
                      <>
                        <ReloadIcon className="ml-2 h-4 w-4 animate-spin" />
                        لطفا صبر کنید ...
                      </>
                    ) : (
                      "ورود"
                    )}
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    className="w-full bg-secondary-foreground"
                  >
                    ورود به عنوان کاربر مهمان
                  </Button>
                </form>
              </Form>
              <div className="flex text-sm items-center mt-4">
                <p>هنوز ثبت نام نکرده اید ؟</p>
                <Button variant="link" onClick={() => changeTab("register")}>
                  ثبت نام
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* sing Up Tab */}

        <TabsContent value="register">
          <Card className="w-96 mt-8">
            <CardHeader>
              <CardTitle>عضویت در شاپینگ سنتر</CardTitle>
              <CardDescription>
                به شاپینگ سنتر خوش آمدید لطفا برای ثبت نام اطلاعات زیر را کامل
                کنید
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Form {...registerForm}>
                <form
                  onSubmit={registerForm.handleSubmit(onSubmitRegister)}
                  className="space-y-8"
                >
                  <FormField
                    control={registerForm.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>نام کاربری</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="نام کاربری خود را وارد کنید"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ایمیل</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="ایمیل خود را وارد کنید"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={registerForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>رمز عبور</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="رمز عبور خود را وارد کنید"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button size="lg" className="w-full" disabled={pending}>
                    {pending ? (
                      <>
                        <ReloadIcon className="ml-2 h-4 w-4 animate-spin" />
                        لطفا صبر کنید ...
                      </>
                    ) : (
                      "ثبت نام"
                    )}
                  </Button>
                </form>
              </Form>
              <div className="flex text-sm items-center mt-4">
                <p>ثبت نام کرده اید ؟</p>
                <Button variant="link" onClick={() => changeTab("login")}>
                  ورود به شاپینگ سنتر
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
export default LoginPage;
