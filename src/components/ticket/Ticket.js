import format from 'date-fns/format'

import styles from './Ticket.module.scss'

function Ticket(ticket) {
  const { price, logoPath, segments } = ticket

  const transformSegments = (segment) => {
    const { origin, destination, duration, stops } = segment
    const departureTime = format(new Date(segment.date), 'kk:mm')
    const getArrivalTime = (time, durationTime) => {
      const getHours = time.slice(0, 2)
      const getMinutes = time.slice(3)
      const departureMinutes = Math.trunc(Number(getHours) / 60) + Number(getMinutes)
      const totalMinutes = departureMinutes + Number(durationTime)
      const hours = Math.trunc(totalMinutes / 60)
      const minutes = totalMinutes % 60
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
    }
    const arrivalTime = getArrivalTime(departureTime, duration)
    const transformDuration = (mins) => {
      const hours = Math.trunc(mins / 60)
      const minutes = mins % 60
      return `${hours.toString().padStart(2, '0')}ч ${minutes.toString().padStart(2, '0')}м`
    }
    const durationOnHour = transformDuration(duration)
    const countStops = segment.stops.length
    const stopsString = stops.join()

    return {
      origin,
      destination,
      durationOnHour,
      departureTime,
      arrivalTime,
      countStops,
      stopsString,
    }
  }

  const firstWay = transformSegments(segments[0])
  const secondWay = transformSegments(segments[1])

  return (
    <div className={styles.Card}>
      <div className={styles.Header}>
        <span>{`${price.toLocaleString()} P`}</span>
        <img src={logoPath} alt="Logo" />
      </div>
      <div className={styles.Content}>
        <ul className={styles.list}>
          <li>
            <span>{`${firstWay.origin} - ${firstWay.destination}`}</span>
            <span>{`${firstWay.departureTime} - ${firstWay.arrivalTime}`}</span>
          </li>
          <li>
            <span>В пути</span>
            <span>{firstWay.durationOnHour}</span>
          </li>
          <li>
            <span>
              {firstWay.countStops === 1 && `${firstWay.countStops} пересадка`}
              {firstWay.countStops >= 2 && `${firstWay.countStops} пересадки`}
              {firstWay.countStops >= 5 && `${firstWay.countStops} пересадок`}
              {firstWay.countStops === 0 && `Без пересадок`}
            </span>
            <span>{firstWay.stopsString}</span>
          </li>
        </ul>
        <hr className={styles.line} />
        <ul className={styles.list}>
          <li>
            <span>{`${secondWay.origin} - ${secondWay.destination}`}</span>
            <span>{`${secondWay.departureTime} - ${secondWay.arrivalTime}`}</span>
          </li>
          <li>
            <span>В пути</span>
            <span>{secondWay.durationOnHour}</span>
          </li>
          <li>
            <span>
              {secondWay.countStops === 1 && `${secondWay.countStops} пересадка`}
              {secondWay.countStops >= 2 && `${secondWay.countStops} пересадки`}
              {secondWay.countStops >= 5 && `${secondWay.countStops} пересадок`}
              {secondWay.countStops === 0 && `Без пересадок`}
            </span>
            <span>{secondWay.stopsString}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Ticket
