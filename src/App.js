import "./App.css";
import React from "react";
import Home from "./components/Home";
import Details from "./components/Detail";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Create from "./components/Create";
import Edit from "./components/Edit";
import NotFound from "./components/NotFound";
import EditTodoPage from "./components/EditTodoPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/todo-user/:id'>
          <Details />
        </Route>
        <Route exact path='/create'>
          <Create />
        </Route>
        <Route exact path='/todo-user/:id/edit'>
          <Edit />
        </Route>
        <Route exact path='/todo-user/:id/edit/todo-edit'>
          <EditTodoPage />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
