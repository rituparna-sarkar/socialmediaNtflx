import { createSlice } from "@reduxjs/toolkit";


const langSelect=createSlice({
    name:"language",
    initialState:{
        lang:"en-US"
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.lang=action.payload;
        }
        

    }
})
export const{changeLanguage}=langSelect.actions;

export default langSelect.reducer;