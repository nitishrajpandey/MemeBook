import { configureStore } from "@reduxjs/toolkit"
import memeCardReducer from "./memeCardSlice";
const myStore = configureStore({
    reducer: {
        cards: memeCardReducer
    }
})

export default myStore;