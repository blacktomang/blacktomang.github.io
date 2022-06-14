import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/Home";
import Works from "./pages/Works";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "home", element: <Home/> },
      { path: "contact", element: <p/> },
      { path: "works", element: <Works/> }
    ],
  },
];