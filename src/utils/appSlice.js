import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen:true,
        videos:null,
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
        }
    },
});

export const {toggleMenu,closeMenu,addVideos} = appSlice.actions;
export default appSlice.reducer;