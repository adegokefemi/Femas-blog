import "./TopBar.css";
import { Link } from "react-router-dom"

function TopBar() {
  const user = true;
  return (
    <div>
      <div className="top">
        <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/">HOME</Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/about">ABOUT</Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/contact">CONTACT</Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/write">WRITE</Link>
                </li>
                <li className="topListItem">
                  {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className="topRight">
            <img 
            className="topImg"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
             alt="pic"/>
              <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  )
}

export default TopBar
