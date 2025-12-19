
import React from "react";
import { BrowserRouter, Routes, Route,Switch } from "react-router-dom";
import UserDetails from "./UserDetails";
import UserList from "./UserList";
import './../styles/App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component = {UserList}/>
          <Route exact path="/users/:id" component = {UserDetails}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
