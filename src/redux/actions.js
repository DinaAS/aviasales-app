import { getCheap, getFast, getOptimal } from './sortSlice'
import { checkAll, uncheckAll, withoutTransfer, oneTransfer, twoTransfer, threeTransfer } from './filterSlice'
import { getSearchId, fetchTickets } from './ticketSlice'

const actions = {
  tickets: {
    getSearchId,
    fetchTickets,
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
