import { createSlice } from '@reduxjs/toolkit';
import { BookData } from './mockdata'; // <-- Import your mock data

const initialState = {
  books: BookData, // <-- Use mock data here
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.unshift(action.payload);
    },
    setBooks(state, action) {
      state.books = action.payload;
    },
  },
});

export const { addBook, setBooks } = bookSlice.actions;
export default bookSlice.reducer;