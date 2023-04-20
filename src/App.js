import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route> 
          <Route path="/login" element={<Login />}></Route>         
          <Route path="/checkout" element={<><Header /><Checkout/></>}></Route>
          <Route path="/" element={<><Header /><Home/></>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
