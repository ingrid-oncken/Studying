import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyFooter from "./components/MyFooter"
import MyNavBar from "./components/MyNavBar"
import SingleCard from "./components/SingleCard"

function App() {
  return <div className="App">
    <MyNavBar />
    <SingleCard />
    <MyFooter />

  </div>
}

export default App
