import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Login from "./auth/Login";
import Navbar from "./components/Navbar";

import UserHome from "./user/UserHome";
import Wishlist from "./user/Wishlist";
import Cart from "./user/Cart";
import Profile from "./user/Profile";

import AdminHome from "./admin/AdminHome";
import CreateProduct from "./admin/CreateProduct";
import EditProduct from "./admin/EditProduct";

export default function App() {
  const location =
    useLocation();

  const hideNavbar =
    location.pathname === "/";

  return (
    <>
      {!hideNavbar && (
        <Navbar />
      )}

      <Routes>
        <Route
          path="/"
          element={<Login />}
        />

        {/* USER */}
        <Route
          path="/home"
          element={<UserHome />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* ADMIN */}
        <Route
          path="/admin-home"
          element={<AdminHome />}
        />

        <Route
          path="/create-product"
          element={<CreateProduct />}
        />

        <Route
          path="/edit-product/:id"
          element={<EditProduct />}
        />
      </Routes>
    </>
  );
}