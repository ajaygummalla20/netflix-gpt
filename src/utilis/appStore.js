import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../utilis/userSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice
    },
});
export default appStore