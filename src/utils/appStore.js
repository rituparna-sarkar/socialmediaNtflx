import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import moiveReducer from './moiveSlice'
import gptReducer from './gptSlice'
import langSelectReducer from "./langSelect";

 
const appStore=configureStore(
    {
        reducer:{
            user: userReducer,
            moives:moiveReducer,
            gpt:gptReducer,
            language:langSelectReducer,
        }
    }
)
export default appStore;