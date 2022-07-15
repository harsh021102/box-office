import React  from "react";
import {Switch, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Starred from "./pages/Starred";

function App() {
  return (
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/starred">
          <Starred/>
        </Route>
        <Route>
          this is 404 page
        </Route>
      </Switch>
  );
}

export default App;