import { z } from "zod";

export const schema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.string(),
  status: z.string(),
  priority: z.string(),
  reviewer: z.string(),
});

export type Task = z.infer<typeof schema>;
