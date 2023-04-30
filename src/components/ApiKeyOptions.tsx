"use client";
import { createApiKey } from "@/helpers/create-api-key";
import { revokeApiKey } from "@/helpers/revoke-api-key";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "./ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { toast } from "./ui/toast";
interface ApiKeyOptionsProps {
  apiKey: string;
}
export default function ApiKeyOptions({ apiKey }: ApiKeyOptionsProps) {
  const router = useRouter();
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [isRevoking, setIsRevoking] = useState(false);

  const createNewApiKey = async () => {
    setIsCreatingNew(true);
    try {
      await revokeApiKey();
      await createApiKey();
      router.reload();
    } catch (e) {
      toast({
        title: "Error creating new API key",
        message: "Please try again later.",
        type: "error",
      });
    } finally {
      setIsCreatingNew(false);
    }
  };

  const revokeCurrentApiKey = async () => {
    setIsRevoking(true);
    try {
      await revokeApiKey();
      router.reload();
    } catch (e) {
      toast({
        title: "Error creating new API key",
        message: "Please try again later.",
        type: "error",
      });
    } finally {
      setIsRevoking(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled={isCreatingNew || isRevoking} asChild>
        <Button variant="ghost" className="flex gap-2 items-center">
          <p>
            {isCreatingNew
              ? "Creating new key"
              : isRevoking
              ? "Revoking key"
              : "Options"}
          </p>
          {isCreatingNew || isRevoking ? (
            <Loader2 className="animate-spin h-4 w-4" />
          ) : null}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => {
            navigator.clipboard.writeText(apiKey);

            toast({
              title: "Copied",
              message: "API key copied to clipboard",
              type: "success",
            });
          }}
        >
          Copy
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={createNewApiKey}>
          Create new key
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={revokeCurrentApiKey}>
          Revoke key
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
