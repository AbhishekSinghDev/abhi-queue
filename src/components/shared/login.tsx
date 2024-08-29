"use client";

import React, { useState } from "react";
import Wrapper from "./wrapper";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "../ui/input";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";

import Logo from "~/../public/logo.svg";

interface formDataInputs {
  username: string;
  email: string;
  password: string;
}

const Login = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const [formData, setFormData] = useState<formDataInputs>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Wrapper>
      <div className="my-auto flex min-h-screen items-center justify-center">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="mb-2 text-center text-base font-bold lg:text-xl">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={Logo as StaticImageData}
                  alt="AbhiQueue"
                  height={100}
                  width={100}
                  className="h-12 w-auto"
                />
                <p>
                  Welcome Back
                  <span className="text-green-500"> Abhishek Singh</span>
                </p>
              </div>
            </CardTitle>
            <CardDescription className="text-center text-xs">
              AbhiQueue is crafted by Abhishek to perfectly match his unique
              style and needs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Switch
                  id="change-login-method"
                  checked={checked}
                  onCheckedChange={setChecked}
                />
                <Label htmlFor="change-login-method">
                  {checked === true ? "Use username" : "Use email"}
                </Label>
              </div>

              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-3 place-items-baseline gap-2 sm:gap-4">
                  <Label
                    htmlFor={checked ? "email" : "username"}
                    className="font-medium"
                  >
                    {checked ? "Email" : "Username"}
                  </Label>
                  <Input
                    id={checked ? "email" : "username"}
                    type="text"
                    name={checked ? "email" : "username"}
                    placeholder={checked ? "email" : "username"}
                    className="col-span-2 font-medium"
                    value={checked ? formData.email : formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-3 place-items-baseline gap-2 sm:gap-4">
                  <Label htmlFor="password" className="font-medium">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="password"
                    className="col-span-2 font-medium"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="my-4">
            <p className="text-center text-xs font-medium">
              Found it interesting? Check out the{" "}
              <Link
                href="https://github.com/AbhishekSinghDev/abhi-queue"
                className="text-blue-500"
              >
                GitHub repo
              </Link>
              — just clone it and get started! {":)"}
            </p>
          </CardFooter>
        </Card>
      </div>
    </Wrapper>
  );
};

export default Login;
