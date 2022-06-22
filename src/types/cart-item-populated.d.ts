export type CartItemPopulated = {
  id: string,
  product: {
    id: string,
    title: string,
    price: number,
    updatedAt: string,
    categoryIds: string[],
    img: string[],
  },
  amount: number,
  updatedAt: string,
};
