//Imports
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Register from "./routes/Register";
import UserProfile from "./routes/UserProfile";
import Services from "./routes/Services";
import Footer from "./components/Footer/Footer";
//Includes
import "./assets/css/App.css";
import "./assets/js/main";


function App() {
  return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/services"
            component={Services}
          />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={UserProfile} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
