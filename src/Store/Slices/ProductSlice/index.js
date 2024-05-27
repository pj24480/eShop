import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    pName: "jackets",
    pPrice: "800",
    pImg: "mens-shirts.jpg",
  },
  {
    pName: "jackets",
    pPrice: "800",
    pImg: "mens-shirts.jpg",
  },
  {
    pName: "jackets",
    pPrice: "800",
    pImg: "mens-shirts.jpg",
  },
  {
    pName: "jackets",
    pPrice: "800",
    pImg: "mens-shirts.jpg",
  },
];
const productSlice = createSlice({
  name: "Product",
  initialState,
});
export default productSlice;
