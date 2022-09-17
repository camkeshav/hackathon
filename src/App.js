import { Routes, Route } from "react-router-dom";
import AdminMainPage from "./components/adminPortal/AdminMainPage";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/Signup";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact="true" path="/" element={<AdminMainPage />} />
        <Route exact="true" path="/login" element={<Login />} />
        <Route exact="true" path="/signup" element={<SignUp />} />
        {/* <Route exact="true" path="/favourites" element={<Favourites />} /> */}
      </Routes>
    </div>
  );
}

export default App;
