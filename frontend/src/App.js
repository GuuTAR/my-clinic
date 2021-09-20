import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import HomePage from "./page/home/Home";

const App = () => {
  const history = useHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route key="home" exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
