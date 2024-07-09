import NavBarHeader from "./components/NavBarHeader";
import RestroCards from "./components/RestroMain";
import { createBrowserRouter, Outlet } from "react-router-dom";
// import About from "./pages/About";
import Login from "./pages/Login";
import Food from "./pages/Food";
import Error from "./pages/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "../../food-js/src/hooks/userContext";
import { Provider } from "react-redux";
import foodStore from "./redux/foodStore";
import Cart from "./components/Cart";

const Contact = lazy(() => import("./components/Contact"));
const About = lazy(() => import("./pages/About"));

function App() {
  const [userName, setUserName] = useState([]);

  useEffect(function () {
    const data = {
      name: "Stephen Jaramillo.",
    };
    setUserName(data.name);
  }, []);

  // for demo how to useContext

  return (
    <Provider store={foodStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <section>
          <NavBarHeader />
          <Outlet />
        </section>
      </UserContext.Provider>
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RestroCards />,
      },
      {
        path: "/food",
        element: <Food />,
      },
      {
        path: "/contact-us",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<h1>Loding....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);
export default App;
