import ApiService, { formatError } from './api-service';
import { CartItemPopulated } from '../types/cart-item-populated';
import { CartItem, CartItemProps } from '../types';

const fetchCartItems = async (token: string): Promise<CartItemPopulated[]> => {
  try {
    const { data } = await ApiService.get<{ cartItems: CartItemPopulated[] }>(
      '/api/cart',
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return data.cartItems;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const updateCartItem = async (
  cartItemId: string,
  cartItemProps: CartItemProps,
  token: string,
): Promise<CartItem> => {
  try {
    const { data } = await ApiService.patch<{ cartItem: CartItem }>(
      `/api/cart/update-item/${cartItemId}`,
      cartItemProps,
      {
        headers: {
          Authorization: token,
        },
      },
    );

    return data.cartItem;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const addCartItem = async (cartProps: unknown, token : string) => {
  await ApiService.post('/api/cart/add-item', cartProps, {
    headers: {
      Authorization: token,
    },
  });
};

const deleteCartItem = async (cartItemId: string, token: string) => {
  await ApiService.delete(`/api/cart/delete-item/${cartItemId}`, {
    headers: {
      Authorization: token,
    },
  });
};

const CartService = {
  fetchCartItems,
  updateCartItem,
  addCartItem,
  deleteCartItem,
};

export default CartService;
