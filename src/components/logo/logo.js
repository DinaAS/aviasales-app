import './logo.scss'
import icon from './Logo.png'

function Logo() {
  return (
    <div className="Logo-wrapper">
      <a href="/#">
        <img src={icon} alt="plane" />
      </a>
    </div>
  )
}

export default Logo
