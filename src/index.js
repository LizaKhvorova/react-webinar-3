import {createRoot} from 'react-dom/client';
import App from './app';
import Store from "./store";
import {StoreContext} from "./store/context";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const store = new Store();

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
      path: "/",
      element: <div></div>,
    },
  ]);

// Первый рендер приложения
root.render(
  <StoreContext.Provider value={store}>
    <RouterProvider router={router} />
    <App/>
  </StoreContext.Provider>
);
