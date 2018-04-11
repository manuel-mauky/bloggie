import "bootstrap/dist/css/bootstrap.css"

import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import registerServiceWorker from "./registerServiceWorker"

import { ApolloProvider } from "react-apollo"
import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"

import { addLocaleData, IntlProvider } from "react-intl"
import en from "react-intl/locale-data/en"
import de from "react-intl/locale-data/de"

addLocaleData([...en, ...de])

const client = new ApolloClient({
  link: new HttpLink({ uri: "/api/graphql" }),
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <IntlProvider locale={navigator.language}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </IntlProvider>,

  document.getElementById("root")
)
registerServiceWorker()
