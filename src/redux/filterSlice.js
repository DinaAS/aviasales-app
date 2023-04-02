import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    all: true,
    withoutTransfer: true,
    oneTransfer: true,
    twoTransfer: true,
    threeTransfer: true,
  },
  reducers: {
    checkAll: () => {
      return {
        all: true,
        withoutTransfer: true,
        oneTransfer: true,
        twoTransfer: true,
        threeTransfer: true,
      }
    },
    uncheckAll: () => {
      return {
        all: false,
        withoutTransfer: false,
        oneTransfer: false,
        twoTransfer: false,
        threeTransfer: false,
      }
    },
    withoutTransfer: (state) => {
      if (state.all && state.withoutTransfer) {
        return {
          ...state,
          all: !state.all,
          withoutTransfer: !state.withoutTransfer,
        }
      }
      if (!state.all && !state.withoutTransfer && state.oneTransfer && state.twoTransfer && state.threeTransfer) {
        return {
          ...state,
          all: !state.all,
          withoutTransfer: !state.withoutTransfer,
        }
      }
      return {
        ...state,
        withoutTransfer: !state.withoutTransfer,
      }
    },
    oneTransfer: (state) => {
      if (state.all && state.oneTransfer) {
        return {
          ...state,
          all: !state.all,
          oneTransfer: !state.oneTransfer,
        }
      }
      if (!state.all && !state.oneTransfer && state.withoutTransfer && state.twoTransfer && state.threeTransfer) {
        return {
          ...state,
          all: !state.all,
          oneTransfer: !state.oneTransfer,
        }
      }
      return {
        ...state,
        oneTransfer: !state.oneTransfer,
      }
    },
    twoTransfer: (state) => {
      if (state.all && state.twoTransfer) {
        return {
          ...state,
          all: !state.all,
          twoTransfer: !state.twoTransfer,
        }
      }
      if (!state.all && !state.twoTransfer && state.withoutTransfer && state.oneTransfer && state.threeTransfer) {
        return {
          ...state,
          all: !state.all,
          twoTransfer: !state.twoTransfer,
        }
      }
      return {
        ...state,
        twoTransfer: !state.twoTransfer,
      }
    },
    threeTransfer: (state) => {
      if (state.all && state.threeTransfer) {
        return {
          ...state,
          all: !state.all,
          threeTransfer: !state.threeTransfer,
        }
      }
      if (!state.all && !state.threeTransfer && state.withoutTransfer && state.oneTransfer && state.twoTransfer) {
        return {
          ...state,
          all: !state.all,
          threeTransfer: !state.threeTransfer,
        }
      }
      return {
        ...state,
        threeTransfer: !state.threeTransfer,
      }
    },
  },
})

export const { checkAll, uncheckAll, withoutTransfer, oneTransfer, twoTransfer, threeTransfer } = filterSlice.actions

export default filterSlice.reducer
