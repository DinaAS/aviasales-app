import './tabs.scss'

function Tabs() {
  return (
    <ul className="Tabs-list">
      <li className="active">
        <a href="/#">Самый дешевый</a>
      </li>
      <li>
        <a href="/#">Самый быстрый</a>
      </li>
      <li>
        <a href="/#">Оптимальный</a>
      </li>
    </ul>
  )
}

export default Tabs
