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
import UserContext from "../../namaste-react/src/utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./pages/About"));

function App() {
  const [userName, setUserName] = useState([]);

  useEffect(function () {
    const data = {
      name: "Stephen J.",
    };
    setUserName(data.name);
  }, []);

  // for demo how to useContext
  {
    /* <UserContext.Provider value={{loggedInUser: userName}}>
</UserContext.Provider> */
  }
  return (
    <section>
      <NavBarHeader />
      <Outlet />
    </section>
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
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
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
    ],
    errorElement: <Error />,
  },
]);
export default App;
