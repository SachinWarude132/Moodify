import { createBrowserRouter, Link } from "react-router"
import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/Register"
import Home from "./features/home/pages/Home"
import ProtectedRoute from "./features/auth/components/Protected"
import "../src/features/home/style/home.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="home-page">
        <h1>Home Page</h1>
        <p>Use the links below to log in or register.</p>
        <div className="home-actions">
          <Link className="button button--secondary" to="/login">
            Login
          </Link>
          <Link className="button button--secondary" to="/register">
            Register
          </Link>
        </div>
      </div>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
])

export default router