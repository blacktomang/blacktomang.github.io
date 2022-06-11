import MainLayout from "./components/Layout/MainLayout";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "about", element: <div>about</div> },
      { path: "projects", element: <div>projects</div> }
    ],
  },
];