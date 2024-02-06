// src/App.tsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import ResetPassword from "./pages/ResetPassword";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement:<ErrorPage />
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path:"/forgot-password",
      element:<div>why did you forget ehn?</div>
    },
    {
      path:"/reset-password",
      element:<ResetPassword />
    }
  ]);

  return (
    <div className="min-h-screen flex justify-center bg-gray-100">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
