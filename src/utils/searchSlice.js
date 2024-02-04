import { createSlice } from "@reduxjs/toolkit";

const searchSlice =createSlice ({
    name:"search",
    initialState:{
        searchResults: null,
    },
    reducers:{
        cacheResults:(state, action)=>{
            state = Object.assign(state,action.payload);
        },
        addSearchResults:(state, action)=>{
            state.searchResults = action.payload;
        },
    },
});
export const {cacheResults, addSearchResults} = searchSlice.actions;
export default searchSlice.reducer;