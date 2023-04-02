import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import './index.scss'

import store from './redux/store'
import App from './components/app/index'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
