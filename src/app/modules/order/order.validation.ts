import { string, z } from 'zod';

//tags schema
const orderValidationSchema = z.object({
  email: z.string().min(1),
  productId: z.string().min(1),
  price: z.number(),
  quantity: z.number(),
});


export default orderValidationSchema;