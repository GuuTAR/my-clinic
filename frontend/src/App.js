import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

const App = () => {
  const history = useHistory();
  return (
    <Router history={history}>
      <Switch></Switch>
    </Router>
  );
};

export default App;
