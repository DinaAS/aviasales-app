import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import actions from '../../redux/actions'

import styles from './Filter.module.scss'

function Filter() {
  const dispatch = useDispatch()
  const isCheckedAll = useSelector((state) => state.filterReducer.all)
  const isWithoutTransfer = useSelector((state) => state.filterReducer.withoutTransfer)
  const isOneTransfer = useSelector((state) => state.filterReducer.oneTransfer)
  const isTwoTransfer = useSelector((state) => state.filterReducer.twoTransfer)
  const isThreeTransfer = useSelector((state) => state.filterReducer.threeTransfer)

  const filter = useSelector((state) => state.filterReducer)
  const { all, withoutTransfer, oneTransfer, twoTransfer, threeTransfer } = filter
  const isCheckAllFilter = all && withoutTransfer && oneTransfer && twoTransfer && threeTransfer

  useEffect(() => {
    dispatch(actions.tickets.getAllTickets())
  }, [isCheckAllFilter])

  const toggleAll = () => {
    if (isCheckedAll) {
      dispatch(actions.filter.uncheckAll())
      dispatch(actions.tickets.getTicketsWithoutFilters())
    } else {
      dispatch(actions.filter.checkAll())
      dispatch(actions.tickets.getAllTickets())
    }
  }

  const toggleWithoutTransfer = () => {
    if (!isWithoutTransfer) {
      dispatch(actions.filter.withoutTransfer())
      dispatch(actions.tickets.getTicketsWithoutTransfer())
    }
    if (isWithoutTransfer) {
      dispatch(actions.filter.withoutTransfer())
      dispatch(actions.tickets.getAllTickets())
    }
  }

  const toggleOneTransfer = () => {
    if (isOneTransfer) {
      dispatch(actions.filter.oneTransfer())
      dispatch(actions.tickets.getAllTickets())
    }
    if (!isOneTransfer) {
      dispatch(actions.filter.oneTransfer())
      dispatch(actions.tickets.getTicketsWithOneTransfer())
    }
  }

  const toggleTwoTransfer = () => {
    if (isTwoTransfer) {
      dispatch(actions.filter.twoTransfer())
      dispatch(actions.tickets.getAllTickets())
    } else {
      dispatch(actions.filter.twoTransfer())
      dispatch(actions.tickets.getTicketsWithTwoTransfer())
    }
  }

  const toggleThreeTransfer = () => {
    if (isThreeTransfer) {
      dispatch(actions.filter.threeTransfer())
      dispatch(actions.tickets.getTicketsWithThreeTransfer())
    } else {
      dispatch(actions.filter.threeTransfer())
      dispatch(actions.tickets.getTicketsWithThreeTransfer())
    }
  }

  const checkAllClass = cn({
    [styles.customCheckbox]: true,
    [styles.checked]: isCheckedAll,
  })

  const checkWithoutTransfer = cn({
    [styles.customCheckbox]: true,
    [styles.checked]: isWithoutTransfer,
  })

  const checkOneTransfer = cn({
    [styles.customCheckbox]: true,
    [styles.checked]: isOneTransfer,
  })

  const checkTwoTransfer = cn({
    [styles.customCheckbox]: true,
    [styles.checked]: isTwoTransfer,
  })

  const checkThreeTransfer = cn({
    [styles.customCheckbox]: true,
    [styles.checked]: isThreeTransfer,
  })

  return (
    <div className={cn(styles.container)}>
      <span className={cn(styles.title)}>Количество пересадок</span>
      <ul>
        <li className={cn(styles.item)}>
          <input className={checkAllClass} id="all" name="all" type="checkbox" onChange={toggleAll} />
          <label htmlFor="all">
            <span>Все</span>
          </label>
        </li>
        <li className={cn(styles.item)}>
          <input
            className={checkWithoutTransfer}
            id="withoutTransfer"
            name="withoutTransfer"
            type="checkbox"
            onChange={toggleWithoutTransfer}
          />
          <label htmlFor="withoutTransfer">
            <span>Без пересадок</span>
          </label>
        </li>
        <li className={cn(styles.item)}>
          <input
            className={checkOneTransfer}
            id="oneTransfer"
            name="oneTransfer"
            type="checkbox"
            onChange={toggleOneTransfer}
          />
          <label htmlFor="oneTransfer">
            <span>1 пересадка</span>
          </label>
        </li>
        <li className={cn(styles.item)}>
          <input
            className={checkTwoTransfer}
            id="twoTransfer"
            name="twoTransfer"
            type="checkbox"
            onChange={toggleTwoTransfer}
          />
          <label htmlFor="twoTransfer">
            <span>2 пересадки</span>
          </label>
        </li>
        <li className={cn(styles.item)}>
          <input
            className={checkThreeTransfer}
            id="threeTransfer"
            name="threeTransfer"
            type="checkbox"
            onChange={toggleThreeTransfer}
          />
          <label htmlFor="threeTransfer">
            <span>3 пересадки</span>
          </label>
        </li>
      </ul>
    </div>
  )
}

export default Filter
