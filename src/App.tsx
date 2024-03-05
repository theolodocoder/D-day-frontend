// src/App.tsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Landing from "./pages/Landing";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/forgot-password",
      element: <div>why did you forget ehn?</div>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
