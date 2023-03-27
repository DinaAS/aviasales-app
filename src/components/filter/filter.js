import './filter.scss'

function Filter() {
  return (
    <div className="Filter-container">
      <span className="tilte">Количество пересадок</span>
      <ul>
        <li>
          <input className="custom-checkbox" id="checkbox1" name="checkbox1" type="checkbox" />
          <label htmlFor="checkbox1">
            <span className="active">Все</span>
          </label>
        </li>
        <li>
          <input className="custom-checkbox" id="checkbox2" name="checkbox2" type="checkbox" />
          <label htmlFor="checkbox2">
            <span>Без пересадок</span>
          </label>
        </li>
        <li>
          <input className="custom-checkbox" id="checkbox3" name="checkbox3" type="checkbox" />
          <label htmlFor="checkbox3">
            <span>1 пересадка</span>
          </label>
        </li>
        <li>
          <input className="custom-checkbox" id="checkbox4" name="checkbox4" type="checkbox" />
          <label htmlFor="checkbox4">
            <span>2 пересадки</span>
          </label>
        </li>
        <li>
          <input className="custom-checkbox" id="checkbox5" name="checkbox5" type="checkbox" />
          <label htmlFor="checkbox5">
            <span>3 пересадки</span>
          </label>
        </li>
      </ul>
    </div>
  )
}

export default Filter
