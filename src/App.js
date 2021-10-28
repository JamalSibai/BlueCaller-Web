import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import login from "./pages/login";
import home from "./pages/home";
import adminHome from "./pages/adminHome";
<Route exact path="/" component="{home}" />;
<Route exact path="/login" component="{login}" />;
<Route exact path="/adminHome" component="{adminHome}" />;

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
        </Switch>
        <Switch>
          <Route exact path="/login" component={login} />
        </Switch>
        <Switch>
          <Route exact path="/adminHome" component={adminHome} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
