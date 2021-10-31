import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import login from "./pages/login";
import home from "./pages/home";
import adminHome from "./pages/adminHome";
import FreelancerAppointment from "./pages/freelancerAppointment";
import Statistics from "./pages/statistics";
<Route exact path="/" component="{home}" />;
<Route exact path="/login" component="{login}" />;
<Route exact path="/adminHome" component="{adminHome}" />;
<Route
  exact
  path="/freelancerAppointment"
  component="{freelancerAppointment}"
/>;
<Route exact path="/Analytics" component="{Analytics}" />;

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
        <Switch>
          <Route
            exact
            path="/freelancerAppointment"
            component={FreelancerAppointment}
          />
        </Switch>
        <Switch>
          <Route exact path="/Statistics" component={Statistics} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
