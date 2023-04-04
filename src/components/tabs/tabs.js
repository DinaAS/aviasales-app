import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames'

import actions from '../../redux/actions'

import styles from './Tabs.module.scss'

function Tabs() {
  const dispatch = useDispatch()
  const isCheap = useSelector((state) => state.sortReducer.cheap)
  const isFast = useSelector((state) => state.sortReducer.fast)
  const isOptimal = useSelector((state) => state.sortReducer.optimal)

  const toggleSort = (e) => {
    const currentTarget = e.target.id
    switch (currentTarget) {
      case 'cheap':
        dispatch(actions.sort.getCheap())
        dispatch(actions.tickets.getCheapTickets())
        break
      case 'fast':
        dispatch(actions.sort.getFast())
        dispatch(actions.tickets.getFastTickets())
        break
      case 'optimal':
        dispatch(actions.sort.getOptimal())
        dispatch(actions.tickets.getOptimalTickets())
        break
      default:
        return undefined
    }
    return undefined
  }

  const activeCheap = cn({
    [styles.item]: true,
    [styles.active]: isCheap,
  })

  const activeFast = cn({
    [styles.item]: true,
    [styles.active]: isFast,
  })

  const activeOptimal = cn({
    [styles.item]: true,
    [styles.active]: isOptimal,
  })

  return (
    <ul className={cn(styles.list)}>
      <li onClick={toggleSort} onKeyDown={() => toggleSort}>
        <a className={activeCheap} href="/#" id="cheap">
          Самый дешевый
        </a>
      </li>
      <li onClick={toggleSort} onKeyDown={() => toggleSort}>
        <a className={activeFast} href="/#" id="fast">
          Самый быстрый
        </a>
      </li>
      <li onClick={toggleSort} onKeyDown={() => toggleSort}>
        <a className={activeOptimal} href="/#" id="optimal">
          Оптимальный
        </a>
      </li>
    </ul>
  )
}

export default Tabs
