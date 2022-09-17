import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/Signup";
import Navbar from "./components/header/Navbar";
import Home from "./components/homepage/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route exact="true" path="/login" element={<Login />} />
        <Route exact="true" path="/signup" element={<SignUp />} />
        {/* <Route exact="true" path="/favourites" element={<Favourites />} /> */}
      </Routes>
    </div>
  );
}

export default App;
