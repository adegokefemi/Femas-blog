import "./SideBar.css";

function sideBar() {
  return (
    <div className="sidebar"> 
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="https://media.istockphoto.com/id/1130636356/photo/sunset-over-mountain-with-cosmos-blooming.jpg?s=612x612&w=0&k=20&c=0fK0C07rR3kqX4C9PLhqNjxSs6d6vSTMPTkPlD-CybQ=" 
          alt="" 
          />
          <p>Lorem ipsum dolor sit consectertor adispisicing elit. volutate qui
            neccessitatibus nostrum representatum.
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music </li>
            <li className="sidebarListItem"> Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Cinema</li>
            <li className="sidebarListItem">Tech</li>
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

export default sideBar
