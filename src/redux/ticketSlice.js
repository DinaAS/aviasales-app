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
    ticketsData: [],
    ticketsView: [],
    searchId: null,
    status: null,
    error: null,
  },
  reducers: {
    getCheapTickets: (state) => {
      const sortPrice = state.ticketsView
        .map((ticket) => ticket.price)
        .sort((a, b) => {
          return a - b
        })

      const newArr = []
      /* eslint-disable-next-line */
      sortPrice.forEach((price) => {
        const res = state.ticketsView.find((item) => (item.price === price ? item : undefined))
        newArr.push(res)
      })

      return {
        ...state,
        ticketsView: newArr,
      }
    },
    getFastTickets: (state) => {
      const sortTimeDuration = state.ticketsView
        .map((ticket) => ticket.totalTimeDuration)
        .sort((a, b) => {
          return a - b
        })
      const newArr = []
      /* eslint-disable-next-line */
      sortTimeDuration.forEach((time) => {
        const res = state.ticketsView.find((item) => (item.totalTimeDuration === time ? item : undefined))
        newArr.push(res)
      })

      return {
        ...state,
        ticketsView: newArr,
      }
    },
    getOptimalTickets: (state) => {
      const sortOptimalIndex = state.ticketsView
        .map((ticket) => ticket.optimalIndex)
        .sort((a, b) => {
          return a - b
        })
      const newArr = []
      /* eslint-disable-next-line */
      sortOptimalIndex.forEach((index) => {
        const res = state.ticketsView.find((item) => (item.optimalIndex === index ? item : undefined))
        newArr.push(res)
      })

      return {
        ...state,
        ticketsView: newArr,
      }
    },
    getAllTickets: (state) => {
      const newArrTickets = state.ticketsData.slice(0, 5)
      return {
        ...state,
        ticketsView: newArrTickets,
      }
    },
    getTicketsWithoutFilters: (state) => {
      return {
        ...state,
        ticketsView: [],
      }
    },
    getTicketsWithoutTransfer: (state) => {
      const newArr = []
      state.ticketsData.forEach((ticket) => (ticket.isWithoutTransfer ? newArr.push(ticket) : undefined))

      const newArrTickets = newArr.slice(0, 5)

      return {
        ...state,
        ticketsView: newArrTickets,
      }
    },
    getTicketsWithOneTransfer: (state) => {
      const newArr = []
      /* eslint-disable-next-line */
      for (let ticket of state.ticketsData) {
        if (ticket.isOneTransfer) {
          newArr.push(ticket)
        }
      }
      const newArrTickets = newArr.slice(0, 5)

      return {
        ...state,
        ticketsView: newArrTickets,
      }
    },
    getTicketsWithTwoTransfer: (state) => {
      const newArr = []
      /* eslint-disable-next-line */
      for (let ticket of state.ticketsData) {
        if (ticket.isTwoTransfer) {
          newArr.push(ticket)
        }
      }
      const newArrTickets = newArr.slice(0, 5)

      return {
        ...state,
        ticketsView: newArrTickets,
      }
    },
    getTicketsWithThreeTransfer: (state) => {
      const newArr = []
      /* eslint-disable-next-line */
      for (let ticket of state.ticketsData) {
        if (ticket.isThreeTransfer) {
          newArr.push(ticket)
        }
      }
      const newArrTickets = newArr.slice(0, 5)

      return {
        ...state,
        ticketsView: newArrTickets,
      }
    },
    getMoreTickets: (state) => {
      const currentArrLength = state.ticketsView.length
      const sliceArr = state.ticketsData.slice(currentArrLength, currentArrLength + 5)
      const newArr = [...state.ticketsView, ...sliceArr]
      return {
        ...state,
        ticketsView: newArr,
      }
    },
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
      .addCase(fetchTickets.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        }
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        const dataTickets = action.payload.tickets

        const tickets = dataTickets.map((item) => {
          const id = createId()
          const logoPath = `https://pics.avs.io/99/36/${item.carrier}.png`
          const totalTimeDuration = item.segments[0].duration + item.segments[1].duration
          const optimalIndex = Math.trunc(item.price / totalTimeDuration)
          const isWithoutTransfer = item.segments[0].stops.length === 0 && item.segments[1].stops.length === 0
          const isOneTransfer = item.segments[0].stops.length === 1 && item.segments[1].stops.length === 1
          const isTwoTransfer = item.segments[0].stops.length === 2 && item.segments[1].stops.length === 2
          const isThreeTransfer = item.segments[0].stops.length === 3 && item.segments[1].stops.length === 3
          return {
            id,
            logoPath,
            totalTimeDuration,
            optimalIndex,
            isWithoutTransfer,
            isOneTransfer,
            isTwoTransfer,
            isThreeTransfer,
            ...item,
          }
        })
        state.ticketsData.push(...tickets)
        if (!action.payload.stop) {
          state.status = 'loading'
          state.error = null
        } else state.status = 'fulfilled'
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

export const {
  getCheapTickets,
  getFastTickets,
  getOptimalTickets,
  getAllTickets,
  getTicketsWithoutTransfer,
  getTicketsWithoutFilters,
  getTicketsWithOneTransfer,
  getTicketsWithTwoTransfer,
  getTicketsWithThreeTransfer,
  getMoreTickets,
} = ticketSlice.actions

export default ticketSlice.reducer
