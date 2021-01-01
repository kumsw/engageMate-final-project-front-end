import { useAuth0 } from "@auth0/auth0-react";
import styles from "./app.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../pages/login/index";
import Authorised from "../../pages/authorised/authorised";
import Admin from "../../pages/admin";
import RaiseHand from "../../pages/raise-hand";
import Quiz from "../../pages/quiz";
import Deck from "../../pages/dj-deck";
import Thumb from "../../pages/thumb-o-meter";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <div className={styles.app}>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/raisehand">
            <RaiseHand />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/deck">
            <Deck />
          </Route>
          <Route path="/thumb">
            <Thumb />
          </Route>
          <Route path="/">{isAuthenticated ? <Authorised /> : <Login />}</Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
