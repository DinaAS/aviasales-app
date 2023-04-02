import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

import actions from '../../redux/actions'

import styles from './Filter.module.scss'

function Filter() {
  const isCheckedAll = useSelector((state) => state.filterReducer.all)
  const isWithoutTransfer = useSelector((state) => state.filterReducer.withoutTransfer)
  const isOneTransfer = useSelector((state) => state.filterReducer.oneTransfer)
  const isTwoTransfer = useSelector((state) => state.filterReducer.twoTransfer)
  const isThreeTransfer = useSelector((state) => state.filterReducer.threeTransfer)
  const dispatch = useDispatch()

  const toggleAll = () => {
    if (isCheckedAll) {
      dispatch(actions.filter.uncheckAll())
    } else {
      dispatch(actions.filter.checkAll())
    }
  }

  const toggleOne = (e) => {
    const currentTarget = e.target.id
    dispatch(actions.filter[currentTarget]())
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
            onChange={toggleOne}
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
            onChange={toggleOne}
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
            onChange={toggleOne}
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
            onChange={toggleOne}
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
