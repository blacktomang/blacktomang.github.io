import MainLayout from "./components/Layout/MainLayout";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "contact", element: <div>contact</div> },
      { path: "works", element: <div>works</div> }
    ],
  },
];