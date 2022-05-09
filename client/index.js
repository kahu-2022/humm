import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

import App from "./components/App"

import { Auth0Provider } from "@auth0/auth0-react"
import { Provider } from 'react-redux'
import store from './store'


import "bootstrap/dist/css/bootstrap.min.css"

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
  <Router>

    <Auth0Provider
      domain={"kahu-2022-rosebaylis.au.auth0.com"}
      clientId={"zFvQlxd1lxF5POaM4rS4BITKzm8i98xr"}
      redirectUri={window.location.origin}
      audience="https://humm/api"
    >
      <Provider store={store}>
        {/* <Router> */}
          <App />
        {/* </Router> */}
      </Provider>
    </Auth0Provider>
    </Router>,

    document.getElementById("app")
  )
})
