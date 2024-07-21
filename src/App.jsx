import { Routes, Route, NavLink } from "react-router-dom";

import "./App.scss";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import LogoutButton from "./components/logout-button/LogoutButton";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";
import Today from "./components/dashboard/Dashboard";
import Students from "./components/students/Student";
import About from "./components/about/about";
function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/today">Today</NavLink>
            </li>
            <li>
              <NavLink to="/students">Students</NavLink>
            </li>
          </ul>

          <LogoutButton>Log out</LogoutButton>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/today" element={<Today />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="/students" element={<Students />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
