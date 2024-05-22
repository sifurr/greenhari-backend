import { z } from 'zod';

//tags schema
const tagsValidationSchema = z.object({
  type: z.string().min(1),
  value: z.string().min(1),
});

// inventory schema
const inventoryValidationSchema = z.object({
  quantity: z.number().min(0),
  inStock: z.boolean().default(true),
});

// product schema
const productValidationSchema = z.object({
  name: z.string().min(1).max(100).trim(),
  description: z.string(),
  price: z.number().min(1),
  category: z.string(),
  tags: z.array(z.string()).optional(),
  variants: z.array(tagsValidationSchema).optional(),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;




