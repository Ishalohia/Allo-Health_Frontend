import React from 'react';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import MealPage from './Components/MealPage';
import { Auth0Provider } from '@auth0/auth0-react';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'meals',
        element: <MealPage/>,
      },
    ],
  },
]);

function App() {
  return (
     <Auth0Provider
        domain="dev-zvn1lpetooc03mqh.us.auth0.com"
        clientId="Er8mzuz6jGqZrTMHPhQqR46EEAR7KQT0"
        authorizationParams={{
        redirect_uri: window.location.origin
        }}
      >
      <>
        <RouterProvider router={appRouter} />
      </>
      </Auth0Provider>
  );
}

export default App;
