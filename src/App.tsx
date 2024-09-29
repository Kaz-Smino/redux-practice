import { Provider } from 'react-redux'
import { store } from './store'
import User from './store/components/User'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Practice</h1>
        <User />
      </div>
    </Provider>
  )
}

export default App