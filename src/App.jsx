import React from 'react';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import AboutUs from './components/AboutUs';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import { AuthRoute ,PrivateRoute} from './Routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/homepage" />
        </Route>
        <AuthRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/homepage" component={HomePage} />
        <PrivateRoute exact path="/about" component={AboutUs} />
      </Switch>
    </Router>

  );
}

export default App;
