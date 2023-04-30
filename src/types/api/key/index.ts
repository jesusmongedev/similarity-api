import { ApiKey } from "@prisma/client";
import { ZodIssue } from "zod";

export interface CreateApiData {
  error: string | ZodIssue[] | null;
  createdApiKey: ApiKey | null;
}

export interface RevokeApidata {
  error: string | ZodIssue[] | null;
  success: boolean;
}
