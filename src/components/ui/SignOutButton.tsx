"use client";

import { signOut } from "next-auth/react";
import React, { useState } from "react";
import { Button } from "@/ui/Button";
import { toast } from "@/ui/toast";

interface SignOutButtonProps {}

function SignOutButton({}: SignOutButtonProps) {
  const [isLoading, setisLoading] = useState<boolean>(false);

  const signUserOut = async () => {
    try {
      await signOut();
    } catch (e) {
      toast({
        title: "Error signin out",
        message: "Please try again",
        type: "error",
      });
    } finally {
      setisLoading(false);
    }
  };

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign out
    </Button>
  );
}

export default SignOutButton;
