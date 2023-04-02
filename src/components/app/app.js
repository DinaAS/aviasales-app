import cn from 'classnames'

import Logo from '../logo'
import Tabs from '../tabs/Tabs'
import Filter from '../filter'
import TicketsList from '../tickets-list'
import Button from '../button'

import styles from './App.module.scss'

function App() {
  return (
    <div className={cn(styles.container)}>
      <div className={cn(styles.wrapper)}>
        <Logo />
        <div className={cn(styles.content)}>
          <div className={cn(styles.left_container)}>
            <Filter />
          </div>
          <div className={cn(styles.right_container)}>
            <Tabs />
            <TicketsList />
            <Button />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
