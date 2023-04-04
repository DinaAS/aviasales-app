import { createSlice } from '@reduxjs/toolkit'

export const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    cheap: false,
    fast: false,
    optimal: false,
  },
  reducers: {
    getCheap: () => {
      return {
        cheap: true,
        fast: false,
        optimal: false,
      }
    },
    getFast: () => {
      return {
        cheap: false,
        fast: true,
        optimal: false,
      }
    },
    getOptimal: () => {
      return {
        cheap: false,
        fast: false,
        optimal: true,
      }
    },
  },
})

export const { getCheap, getFast, getOptimal } = sortSlice.actions

export default sortSlice.reducer
