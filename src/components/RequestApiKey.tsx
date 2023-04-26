"use client";
import { createApiKey } from "@/helpers/create-api-key";
import { Key } from "lucide-react";
import { FormEvent, useState } from "react";
import Heading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import { toast } from "@/ui/toast";
import CopyButton from "./CopyButton";
import { Input } from "@/ui/Input";
import { Button } from "@/ui/Button";
function RequestApiKey({}) {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string | null>(null);

  const createNewApiKey = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCreating(true);
    try {
      const generatedApiKey = await createApiKey();
      setApiKey(generatedApiKey);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong";
      toast({
        title: "Error",
        message: errorMessage,
        type: "error",
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="container md:max-w-2xl">
      <div className="flex flex-col gap-6 items-center">
        <Key className="mx-auto h-12 w-12 text-gray-400" />
        <Heading>Request your Api key</Heading>
        <Paragraph>You haven&apos;t requested an API key yet.</Paragraph>
      </div>
      <form
        onSubmit={createNewApiKey}
        action="#"
        className="mt-6 sm:flex sm:items-center"
      >
        <label htmlFor="emails" className="sr-only">
          Your API key
        </label>
        <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
          {/* Show only icon if API key was generated succesfully */}
          {apiKey ? (
            <CopyButton
              className="absolute inset-y-0 right-0 animate-in fade-in duration-300"
              valueToCopy={apiKey}
            />
          ) : null}
          <Input
            readOnly
            value={apiKey ?? ""}
            placeholder="Request an API key to display it here"
          />
        </div>
        <div className="mt-6 flex justify-center sm:mt-0 sm:ml-4 sm:flex-shrink-0">
          <Button disabled={!!apiKey} isLoading={isCreating}>
            Request key
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RequestApiKey;
