import { createSlice } from "@reduxjs/toolkit"

const moiveSlice=createSlice({
    name:"moives",
    initialState:{
        nowPlayingMoive:null,
        popularMoive:null,
        upcomingMoive:null,
        trailerVideo:null,
    },
    reducers:{
        addPalyingMoive:(state,action)=>{
            state.nowPlayingMoive=action.payload;
        },
        addPopularMoive:(state,action)=>{
            state.popularMoive=action.payload;
        },
        addUpcomingMoive:(state,action)=>{
            state.upcomingMoive=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        }
    }
})
export const {addPalyingMoive, addTrailerVideo,addPopularMoive,addUpcomingMoive}=moiveSlice.actions;
export default moiveSlice.reducer;