import {createSlice} from '@reduxjs/toolkit';
import { tagFilter } from '../TagSlider';

const tagSlice = createSlice({
    name: 'tags',
    initialState: {
      start: 0,
    },
    reducers: {
      nextSlide: (state) => {
        if(state.start + 11 < tagFilter.length)
        {state.start += 3;}
        },
      prevSlide: (state) => {
        state.start -= 3;
      },
    },
  });

  export const { nextSlide, prevSlide } = tagSlice.actions;
export default tagSlice.reducer;