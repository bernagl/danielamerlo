import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Inicio from ''

export default () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" component={Inicio} />
      <Route path="/:section" component={Section} />
      </Switch>
    </BrowserRouter>
  )
}
