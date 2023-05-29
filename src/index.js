import {createRoot} from 'react-dom/client';
import App from './app';
import Store from "./store";
import {StoreContext} from "./store/context";
import Description from "./components/description";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const store = new Store();

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
      },
    {
      path: "/" + ":id",
      element: <Description />,
    },
  ]);

// Первый рендер приложения
root.render(
  <StoreContext.Provider value={store}>
    <RouterProvider router={router} />
  </StoreContext.Provider>
);
