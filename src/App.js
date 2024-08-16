import './App.css'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
  </Switch>
)

export default App
