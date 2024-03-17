import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useAuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom/dist";
function App() {
  const {authUser}=useAuthContext()
  return (
    <>
      <Routes>
        <Route path="/" element={authUser?<Navigate to={"/home"}/>:<Login />} />
        <Route path="/register" element={authUser?<Navigate to={"/home"}/>:<Register />} />
        <Route path="/home/*" element={authUser?<Home />:<Navigate to={"/"}/>} />
      </Routes>

      {/* <Login />
      <Register /> */}
    </>
  );
}

export default App;
