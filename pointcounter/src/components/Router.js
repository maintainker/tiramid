import {BrowserRouter as Router, Switch, Redirect,Route} from 'react-router-dom';
import Putwin from '../route/PutWin';
import WinRatio from '../route/WinRatio';
import Checkpoint from '../route/CheckPoint';


const AppRoute = ({players,addPlayer}) =>{
  return(
  <Router basename="/tiramid/pointcounter/build">
    <Switch>
      <Route exact path="/win-ratio">
        <WinRatio players={players} ></WinRatio>
      </Route>
      <Route exact path="/check-point">
        <Checkpoint players={players} ></Checkpoint>
      </Route>
      <Route exact path="/input-win">
        <Putwin players={players} addPlayer={addPlayer}></Putwin>
      </Route>
      <Redirect from='*' to="/input-win"/>
    </Switch>
  </Router>);
}

export default AppRoute;