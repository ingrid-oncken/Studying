import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyFooter from "./components/MyFooter"
import MyNavBar from "./components/MyNavBar"
import SingleCard from "./components/SingleCard"
import { useState } from "react"
import { Router, Route } from "react-router-dom"

function App() {
  const [search, setSearch] = useState("")
  const searchProp = (text) => {
    setSearch(text)
  }

  return (
    <div className="App">
      <Router>
        <MyNavBar pizza={search} filtered={searchProp} />
        <Route
          path="/"
          exact
          render={(routerProps) => (
            <SingleCard pizza={search} filtered={searchProp} {...routerProps} />
          )}
        />

        <MyFooter />
      </Router>
    </div>
  )
}

export default App
