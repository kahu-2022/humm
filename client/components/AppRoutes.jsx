import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from './Home'

function AppRoutes(props) {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <Home {...routerProps} />}
        />
       
      </Switch>
    </>
  )
}

export default AppRoutes