import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" Component={HomePage}></Route>
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
