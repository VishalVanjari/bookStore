export interface ICart {
  cartId: number;
  userId: number;
  bookId: number;
  quantity: number;
  discountPrice: number;
  total?: number;
}
