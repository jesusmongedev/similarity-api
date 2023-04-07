"use client";

import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { Button } from "@/ui/Button";
import { toast } from "@/ui/toast";

interface SignInButtonProps {}

function SignInButton({}: SignInButtonProps) {
  const [isLoading, setisLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    try {
      await signIn("google");
    } catch (e) {
      toast({
        title: "Error signin in",
        message: "Please try again",
        type: "error",
      });
    } finally {
      setisLoading(false);
    }
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign in
    </Button>
  );
}

export default SignInButton;
