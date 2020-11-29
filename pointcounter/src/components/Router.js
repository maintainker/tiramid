import {BrowserRouter as Router, Switch, Redirect,Route} from 'react-router-dom';
import Putwin from '../route/PutWin';
import WinRatio from '../route/WinRatio';
import Checkpoint from '../route/CheckPoint';
import CheckLog from '../route/CheckLog';


const AppRoute = ({logs}) =>{

  return(
  <Router basename="/tiramid/pointcounter/build">
    <Switch>
      <Route exact path="/input-win">
        <Putwin logs={logs}></Putwin>
      </Route>    
      <Route exact path="/win-ratio">
        <WinRatio logs={logs} ></WinRatio>
      </Route>
      <Route exact path="/check-point">
        <Checkpoint logs={logs} ></Checkpoint>
      </Route>
      <Route exact path="/view-log">
        <CheckLog logs={logs}></CheckLog>
      </Route>
      <Redirect from='*' to="/input-win"/>
    </Switch>
  </Router>);
}

export default AppRoute;