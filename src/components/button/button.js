import { useDispatch } from 'react-redux'
import cn from 'classnames'

import actions from '../../redux/actions'

import styles from './Button.module.scss'

function Button() {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(actions.tickets.getMoreTickets())
  }

  return (
    <button className={cn(styles.Button)} type="submit" onClick={handleClick}>
      Показать еще 5 билетов!
    </button>
  )
}

export default Button
