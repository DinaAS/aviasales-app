import { getCheap, getFast, getOptimal } from './sortSlice'
import { checkAll, uncheckAll, withoutTransfer, oneTransfer, twoTransfer, threeTransfer } from './filterSlice'
import {
  getSearchId,
  fetchTickets,
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
} from './ticketSlice'

const actions = {
  tickets: {
    getSearchId,
    fetchTickets,
    getCheapTickets,
    getFastTickets,
    getOptimalTickets,
    getAllTickets,
    getTicketsWithoutFilters,
    getTicketsWithoutTransfer,
    getTicketsWithOneTransfer,
    getTicketsWithTwoTransfer,
    getTicketsWithThreeTransfer,
    getMoreTickets,
  },
  sort: {
    getCheap,
    getFast,
    getOptimal,
  },
  filter: {
    checkAll,
    uncheckAll,
    withoutTransfer,
    oneTransfer,
    twoTransfer,
    threeTransfer,
  },
}

export default actions
