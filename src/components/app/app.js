import './app.scss'

import Logo from '../logo'
import Tabs from '../tabs/tabs'
import Filter from '../filter/filter'
import TicketsList from '../tickets-list/tickets-list'
import Button from '../button'

const styleDiv = {
  display: 'flex',
  flexDirection: 'column',
}

function App() {
  return (
    <div className="App-container">
      <div className="App-wrapper">
        <Logo />
        <div className="Main-content">
          <Filter />
          <div style={styleDiv}>
            <Tabs />
            <TicketsList />
            <Button />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
