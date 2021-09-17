import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom"
import { HomePage } from "@Pages/HomePage"
import { PaymentPage } from "@Pages/PaymentPage"

const PublicRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/payment" component={PaymentPage} />
        <Redirect to="/payment" />
      </Switch>
    </Router>
  )
}

export default PublicRouter
