import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useAuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom/dist";
import Error from "./pages/Error";
import Toaster from "react-hot-toast"
import HeroPage from './pages/Hero'
function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Navigate to={"/home"} /> : <Login />}
        />
        <Route
          path="/register"
          element={authUser ? <Navigate to={"/home"} /> : <Register />}
        />
        <Route
          path="/home/*"
          element={authUser ? <Home /> : <Navigate to={"/"} />}
        />
         <Route
          path="/home/hero"
          element={authUser ? <HeroPage /> : <Navigate to={"/"} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    
</>
  );
}

export default App;
