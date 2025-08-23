/* File: Path.jsx */
import {
  IconHome,
  IconShoppingBag,
  IconTimeDurationOff,
} from "@tabler/icons-react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Cart from "../components/Cart";
import History from "../components/History";

const PublicRoute = ({ element }) => element;

const Path = () => {
  const publicRoutes = [
    {
      path: "/",
      element: <Home />,
      icon: <IconHome />,
    },
    {
      path: "/history",
      element: <History />,
      icon: <IconTimeDurationOff />,
    },
    {
      path: "/cart",
      element: <Cart />,
      icon: <IconShoppingBag />,
    },
  ];

  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<PublicRoute element={route.element} />}
        />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Path;
