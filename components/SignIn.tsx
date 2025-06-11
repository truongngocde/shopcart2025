import { SignInButton } from "@clerk/nextjs";
import React from "react";

const SignIn = () => {
  return (
    <SignInButton mode="modal">
      <button className="text-sm font-semibold hoverEffect hover:text-darkColor hover:cursor-pointer">
        Sign In
      </button>
    </SignInButton>
  );
};

export default SignIn;
