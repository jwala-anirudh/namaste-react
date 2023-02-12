import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
// import About from "./components/About"; -> Lazy loading
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';
// import Instamart from "./components/Instamart"; -> Do lazy loading
import Error from './components/Error';
// import Cart from './components/Cart'; -> Lazy loading

const Instamart = lazy(() => import('./components/Instamart'));
// Upon demand opening  -> react will render (before the bundle is available) -> suspend loading
const About = lazy(() => import('./components/About'));
const Cart = lazy(() => import('./components/Cart'));

// Context API
import UserContext from './context/UserContext';

// React redux
import { Provider } from 'react-redux';
import store from './redux/store';

const AppLayout = () => {
  const [user, setUser] = useState({
    name: 'Anirudh Jwala',
    email: 'anirudh@gmail.com',
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: 'profile', // Result to "parentPath/{path}"
            element: <Profile />,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: '/instamart',
        element: (
          // Suspense is IMP
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: '/cart',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
