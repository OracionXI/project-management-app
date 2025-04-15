// view-options.ts
import { z } from "zod";

export const viewOptions = [
  { label: "Outline", value: "outline" },
  { label: "Past Performance", value: "past-performance" },
  { label: "Key Personnel", value: "key-personnel" },
  { label: "Focus Documents", value: "focus-documents" },
] as const;

export const viewSchema = z.enum([
  "outline",
  "past-performance",
  "key-personnel",
  "focus-documents",
]);

export type ViewValue = z.infer<typeof viewSchema>;
