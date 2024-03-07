// src/App.tsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import Layout from "./containers/Layout";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/app*",
      element: <Layout />,
    },
    {
      path: "/forgot-password",
      element: <div>why did you forget ehn?</div>,
    },
  ]);

  return (
    <div className="w-screen h-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
