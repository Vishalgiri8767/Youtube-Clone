import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen:true,
        videos:null,
        movieSuggestions: null,

    },
    reducers:{
        toggleMenu : (state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu : (state)=>{
            state.isMenuOpen=false;
        },
        addVideos: (state, action)=>{
            state.videos = action.payload;
        },
        addMovieSuggestion: (state,action)=>{
            state.movieSuggestions = action.payload;
        },
    },
});

export const {toggleMenu,closeMenu,addVideos,addMovieSuggestion} = appSlice.actions;
export default appSlice.reducer;