import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCourses } from "../api/courseApi";

// Async Thunk
export const loadCourses = createAsyncThunk(
  "courses/loadCourses",
  async () => {
    return await getAllCourses();
  }
);

const courseSlice = createSlice({
  name: "courses",

  initialState: {
    courses: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(loadCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loadCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })

      .addCase(loadCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectCourses = (state) => state.courses.courses;

export const selectCoursesLoading = (state) => state.courses.loading;

export const selectCoursesError = (state) => state.courses.error;

export default courseSlice.reducer;