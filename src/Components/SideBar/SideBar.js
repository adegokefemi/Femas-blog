import { useEffect, useState } from "react";
import "./SideBar.css";
import axios from "axios";
import { Link } from "react-router-dom";

function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
   const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  },[])

  return (
    <div className="sidebar"> 
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT</span>
          <img src="https://media.istockphoto.com/id/1130636356/photo/sunset-over-mountain-with-cosmos-blooming.jpg?s=612x612&w=0&k=20&c=0fK0C07rR3kqX4C9PLhqNjxSs6d6vSTMPTkPlD-CybQ=" 
          alt="" 
          />
          <p> Publish your acrticles here on femmas blog and let the world benefit from your creativity and idea.  Be assured of your content strictly manage by you anytime, anyday. 
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            {cats.map((c) => (
              <Link to={`/?cat=${c.name}`} className="link">
                  <li className="sidebarListItem">{c.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          </div>
        </div>
    </div>
  )
}

export default SideBar
