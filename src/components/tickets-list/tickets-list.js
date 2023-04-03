import { useSelector } from 'react-redux'

import Ticket from '../ticket/Ticket'

import styles from './Tickets-list.module.scss'

function TicketsList() {
  const tickets = useSelector((state) => state.ticketReducer.tickets)

  const ticketArrSlice = (ticketsArr) => {
    const newArr = ticketsArr.slice(0, 5)
    return newArr
  }

  return (
    <ul className={styles.list}>
      {ticketArrSlice(tickets).map((ticket) => {
        return <Ticket key={ticket.id} {...ticket} />
      })}
    </ul>
  )
}

export default TicketsList
