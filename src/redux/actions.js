import { getCheap, getFast, getOptimal } from './sortSlice'
import { checkAll, uncheckAll, withoutTransfer, oneTransfer, twoTransfer, threeTransfer } from './filterSlice'

const actions = {
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
