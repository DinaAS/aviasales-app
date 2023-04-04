import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames'
import { Spin } from 'antd'

import actions from '../../redux/actions'
import { fetchTickets, getSearchId } from '../../redux/ticketSlice'
import Logo from '../logo'
import Tabs from '../tabs/Tabs'
import Filter from '../filter'
import TicketsList from '../tickets-list'
import Button from '../button'

import styles from './App.module.scss'

function App() {
  const ticketReducer = useSelector((state) => state.ticketReducer)
  const viewTickets = useSelector((state) => state.ticketReducer.ticketsView)
  const filter = useSelector((state) => state.filterReducer)
  const { all, withoutTransfer, oneTransfer, twoTransfer, threeTransfer } = filter

  const isUncheckAllFilter = !all && !withoutTransfer && !oneTransfer && !twoTransfer && !threeTransfer

  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      await dispatch(getSearchId()).then(() => dispatch(fetchTickets()))
    }
    fetchData().then(() => dispatch(actions.tickets.getAllTickets()))
  }, [])

  useEffect(() => {
    let timer
    if (ticketReducer.status !== 'fulfilled') {
      timer = setTimeout(() => dispatch(fetchTickets()), 800)
    }

    return () => {
      clearTimeout(timer)
    }
  })

  const loading =
    ticketReducer.status === 'loading' ? (
      <Spin tip="Loading" size="small">
        <div className={cn(styles.spin)} />
      </Spin>
    ) : null

  const button = viewTickets.length <= 0 || isUncheckAllFilter ? null : <Button />

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
            {loading}
            <TicketsList />
            {button}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
