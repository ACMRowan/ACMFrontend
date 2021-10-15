import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Attendance from "./pages/attendance";
import Annoucements from "./pages/announcements";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/attendance" component={Attendance} />
        <Route path="/annoucements" component={Annoucements} />
      </Switch>
    </Router>
  );
}
export default App;