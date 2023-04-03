import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createId } from '@paralleldrive/cuid2'

export const getSearchId = createAsyncThunk(
  'tickets/getSearchId',

  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`https://aviasales-test-api.kata.academy/search`)

      if (!res.ok) {
        throw new Error(`Can't get SearchId. Server Error`)
      }

      const searchId = await res.json()

      return searchId
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',

  async (_, { rejectWithValue, getState }) => {
    try {
      const { searchId } = getState().ticketReducer

      const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)

      if (!res.ok) {
        throw new Error(`Can't get tickets. Server Error`)
      }

      const data = await res.json()

      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    searchId: null,
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchId.fulfilled, (state, action) => {
        const { searchId } = action.payload
        return { ...state, searchId }
      })
      .addCase(getSearchId.rejected, (state, action) => {
        return {
          ...state,
          status: 'rejected',
          error: action.payload,
        }
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        const dataTickets = action.payload.tickets

        const tickets = dataTickets.map((item) => {
          const id = createId()
          const logoPath = `https://pics.avs.io/99/36/${item.carrier}.png`
          return {
            id,
            logoPath,
            ...item,
          }
        })
        return { ...state, tickets }
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        return {
          ...state,
          status: 'rejected',
          error: action.payload,
        }
      })
  },
})

export default ticketSlice.reducer
