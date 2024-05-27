import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    category: "Men",
    Items: ["Coats", "Jackets", "Shirts", "Party Wear"],
  },
  {
    category: "Women",
    Items: ["Coats", "Jackets", "Shirts", "Party Wear"],
  },
  {
    category: "Kids",
    Items: ["Coats", "Jackets", "Shirts", "Party Wear"],
  },
];
const accordionSlice = createSlice({
  name: "AccordionSlice",
  initialState,
});
export default accordionSlice;
