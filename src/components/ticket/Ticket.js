import styles from './Ticket.module.scss'
import icon from './S7 Logo.png'

function Ticket() {
  return (
    <div className={styles.Card}>
      <div className={styles.Header}>
        <span>13 400 Р</span>
        <img src={icon} alt="Logo" />
      </div>
      <div className={styles.Content}>
        <ul className={styles.list}>
          <li>
            <span>MOW – HKT</span>
            <span>10:45 – 08:00</span>
          </li>
          <li>
            <span>В пути</span>
            <span>21ч 15м</span>
          </li>
          <li>
            <span>2 пересадки</span>
            <span>HKG, JNB</span>
          </li>
        </ul>
        <hr className={styles.line} />
        <ul className={styles.list}>
          <li>
            <span>MOW – HKT</span>
            <span>10:45 – 08:00</span>
          </li>
          <li>
            <span>В пути</span>
            <span>21ч 15м</span>
          </li>
          <li>
            <span>2 пересадки</span>
            <span>HKG, JNB</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Ticket
