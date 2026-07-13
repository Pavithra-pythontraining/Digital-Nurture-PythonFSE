 import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoriteCourses: []
};

const courseSlice = createSlice({
    name: "courses",

    initialState,

    reducers: {

        addFavorite: (state, action) => {

            const exists = state.favoriteCourses.find(
                course => course.id === action.payload.id
            );

            if (!exists) {
                state.favoriteCourses.push(action.payload);
            }

        },

        removeFavorite: (state, action) => {

            state.favoriteCourses = state.favoriteCourses.filter(
                course => course.id !== action.payload
            );

        }

    }

});

export const {
    addFavorite,
    removeFavorite
} = courseSlice.actions;

export default courseSlice.reducer;