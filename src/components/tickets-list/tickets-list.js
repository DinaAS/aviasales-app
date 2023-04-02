import Ticket from '../ticket/Ticket'

import styles from './Tickets-list.module.scss'

function TicketsList() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Ticket />
      </li>
      <li className={styles.item}>
        <Ticket />
      </li>
      <li className={styles.item}>
        <Ticket />
      </li>
    </ul>
  )
}

export default TicketsList
