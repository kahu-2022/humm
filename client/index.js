  import React from "react"
  import ReactDOM from "react-dom"
  import { BrowserRouter as Router } from "react-router-dom"

  import App from "./components/App"

  import { Auth0Provider } from "@auth0/auth0-react"

  import "bootstrap/dist/css/bootstrap.min.css"

  document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
      /**
       * Auth0Provider is a component that has a hook that provides
       * all authorization operations
       */
      <Auth0Provider
        domain={"kahu-2022-rosebaylis.au.auth0.com"}
        clientId={"zFvQlxd1lxF5POaM4rS4BITKzm8i98xr"}
        redirectUri={window.location.origin}
        audience="https://humm/api"
      >
        <Router>
          <App />
        </Router>
      </Auth0Provider>,

      document.getElementById("app")
    )
  })
