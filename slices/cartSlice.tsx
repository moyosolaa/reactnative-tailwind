import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price: number;
}

const initialState: { items: CartItem[] } = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      let newCart = [...state.items];
      let itemIndex = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
      } else {
        console.log("can't remove the item that is not added to cart!");
      }
      state.items = newCart;
    },
    emptyCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems = (state: { cart: { items: any } }) =>
  state.cart.items;

export const selectCartItemsById = (
  state: { cart: { items: any[] } },
  id: any
) => state.cart.items.filter((item: { id: any }) => item.id == id);

export const selectCartTotal = (state: { cart: { items: any[] } }) =>
  state.cart.items.reduce(
    (total: any, item: { price: any }) => (total = total + item.price),
    0
  );

export default cartSlice.reducer;
