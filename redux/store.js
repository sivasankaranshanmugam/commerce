import { configureStore } from "@reduxjs/toolkit";
import handleCart from "./reducers/handleCart";

const Store = configureStore({ reducer: { cart: handleCart } });

export default Store;
