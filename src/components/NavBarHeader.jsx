
import { useContext, useState } from "react"
import styles from "../../styles/Header.module.css"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../../../namaste-react/src/utils/UserContext"

function NavBarHeader() {
 const [btnName, setBtnName] = useState("Login")
 const online = useOnlineStatus()

//  const {loggedInUser} = useContext(UserContext)


  // let btnLoginName = "Login"
  return (
    <section className={styles.section}>
    <ul>
      <li>Connection Status: {online ? "🟢" : "🔴"}</li>
        <li>
      <Link to='/'>
          Home
      </Link>
        </li>
        <li><Link to='food'>Food</Link></li>
        <li><Link to='grocery'>Grocery</Link></li>
        <li><Link to='about-us'>About us</Link></li>
        <li onClick={() => {
         setBtnName(!btnName)
        }}>
          <Link to='login'>
            {btnName? "Login" : "Logout"}
          </Link>
        </li>
        {/* <li className="font-semibold">{loggedInUser}</li> */}
    </ul>
</section>
  )
}

export default NavBarHeader