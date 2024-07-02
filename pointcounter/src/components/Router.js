import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Putwin from "../route/PutWin";
import WinRatio from "../route/WinRatio";
import Checkpoint from "../route/CheckPoint";
import CheckLog from "../route/CheckLog";

const AppRoute = ({ logs, setYear, setMonth, date }) => {
  console.log(date, logs);
  return (
    <Router>
      <Switch>
        <Route exact path="/input-win">
          <Putwin
            date={date}
            logs={logs}
            setYear={setYear}
            setMonth={setMonth}
          ></Putwin>
        </Route>
        <Route exact path="/win-ratio">
          <WinRatio date={date} logs={logs}></WinRatio>
        </Route>
        <Route exact path="/check-point">
          <Checkpoint date={date} logs={logs}></Checkpoint>
        </Route>
        <Route exact path="/view-log">
          <CheckLog
            date={date}
            logs={logs}
            setYear={setYear}
            setMonth={setMonth}
          ></CheckLog>
        </Route>
        <Redirect from="*" to="/input-win" />
      </Switch>
    </Router>
  );
};

export default AppRoute;
