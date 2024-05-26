import { Product, Order, OrderProducts } from "@prisma/client";
export type OrderItem = Pick<Product, "id" | "name" | "price"> & {
  quantity: number;
  subtotal: number;
};
export type OrderWithproducts = Order & {
  orderProducts: (OrderProducts & {
    product: Product;
  })[];
};
