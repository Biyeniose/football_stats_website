"use client";
import React from "react";
import { Input } from "@nextui-org/input";

import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

import { title } from "@/components/primitives";

export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      <h1 className={title()}>Login Page</h1>
      <div className="w-full flex flex-col gap-4 upper-padding">
        <div
          key={"md"}
          className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
        >
          <Input
            label="Email"
            placeholder="Enter your email"
            size={"md"}
            type="email"
          />

          <Input
            className="max-w-xs"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            label="Password"
            placeholder="Enter your password"
            type={isVisible ? "text" : "password"}
            variant="bordered"
          />
        </div>
      </div>
    </div>
  );
}
