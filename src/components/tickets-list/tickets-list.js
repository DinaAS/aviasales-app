import { useSelector } from 'react-redux'
import { Alert } from 'antd'
import { createId } from '@paralleldrive/cuid2'

import Ticket from '../ticket/Ticket'

import styles from './Tickets-list.module.scss'

function TicketsList() {
  const tickets = useSelector((state) => state.ticketReducer.ticketsView)
  const filter = useSelector((state) => state.filterReducer)
  const { all, withoutTransfer, oneTransfer, twoTransfer, threeTransfer } = filter

  const isUncheckAllFilter = !all && !withoutTransfer && !oneTransfer && !twoTransfer && !threeTransfer

  const content =
    tickets.length <= 0 || isUncheckAllFilter ? (
      <Alert
        className={styles.alert}
        message="Рейсов, подходящих под заданные фильтры, не найдено"
        type="info"
        showIcon
      />
    ) : (
      tickets.map((ticket) => {
        const idKey = createId()
        return <Ticket key={idKey} {...ticket} />
      })
    )

  return <ul className={styles.list}>{content}</ul>
}

export default TicketsList
