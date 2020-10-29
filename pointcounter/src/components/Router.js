import {BrowserRouter as Router, Switch, Redirect,Route} from 'react-router-dom';
import Putwin from '../route/PutWin';
const AppRoute = () =>{
  return(
  <Router>
    <Switch>
      <Route exact path="/win-ratio">
        <></>
      </Route>
      <Route exact path="/check-point">
        <></>
      </Route>
      <Route exact path="/input-win">
        <Putwin></Putwin>
      </Route>
      <Redirect from='*' to="/input-win"/>
    </Switch>
  </Router>);
}

export default AppRoute;