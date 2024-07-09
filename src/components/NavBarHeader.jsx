import { useContext, useState } from "react";
import styles from "../../styles/Header.module.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../hooks/userContext";
import { useSelector } from "react-redux";

function NavBarHeader() {
  const [btnName, setBtnName] = useState("Login");
  const online = useOnlineStatus();

  const cartItem = useSelector((store) => store.cart.item);

  const { loggedInUser } = useContext(UserContext);

  // let btnLoginName = "Login"
  return (
    <section className={styles.section}>
      <ul>
        <li>Connection Status: {online ? "🟢" : "🔴"}</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="food">Food</Link>
        </li>
        <li>
          <Link to="contact-us">Contact-us</Link>
        </li>
        <li>
          <Link to="about-us">About us</Link>
        </li>
        <li>
          <Link to="cart">Cart ({cartItem.length} item)</Link>
        </li>
        <li
          onClick={() => {
            setBtnName(!btnName);
          }}
        >
          <button>
            <Link to="login">{btnName ? "Login" : "Logout"}</Link>
          </button>
        </li>
        <li className="font-semibold">{loggedInUser}</li>
      </ul>
    </section>
  );
}

export default NavBarHeader;
