import { z } from 'zod'

const requiredNumber = z
  .union([z.string(), z.number()]) 
  .transform((val) => {
    if (typeof val === 'string') {
      return parseFloat(val);
    }
    return val;
  })
  .refine((val) => !isNaN(val), {
    message: "Must be a valid number",
  });
const requiredName = z.string()
  .trim()
  .min(1, { message: "Name is required" })
  .regex(/^[a-zA-Z0-9 _-]+$/, { message: "Name must only be letters, spaces, numbers, and can have - and _" });

export const eventSchema = z.object({
    name: requiredName,
    price: requiredNumber,
    date: z.date(), 
})

export type EventValues = z.infer<typeof eventSchema>