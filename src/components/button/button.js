import cn from 'classnames'

import styles from './Button.module.scss'

function Button() {
  return (
    <button className={cn(styles.Button)} type="submit">
      Показать еще 5 билетов!
    </button>
  )
}

export default Button
