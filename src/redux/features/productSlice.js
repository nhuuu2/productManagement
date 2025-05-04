import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'Description for product 1'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      description: 'Description for product 2'
    }
  ],
  selectedProduct: null
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    }
  }
});

export const { setSelectedProduct, addProduct, updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer; 