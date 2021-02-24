import React from "react"
import { Switch, Route } from "react-router-dom";
import Login from './pages/login'
import Product from './pages/product'
import Customer from './pages/customer'
import Transaction from './pages/transaction'
import Home from "./pages/home"
import Admin from './pages/admin';

export default class App extends React.Component{
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/product" component={Product} />
        <Route path="/customer" component={Customer} />
        <Route path="/transaction" component={Transaction} />
        <Route path="/admin" component={Admin} />
      </Switch>
    )
  }
}