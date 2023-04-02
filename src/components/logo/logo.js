import styles from './Logo.module.scss'
import icon from './Logo.png'

function Logo() {
  return (
    <div className={styles.wrapper}>
      <a href="/#">
        <img src={icon} alt="plane" />
      </a>
    </div>
  )
}

export default Logo
