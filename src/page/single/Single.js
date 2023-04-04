import SinglePost from "../../Components/SinglePost/SinglePost";
import SideBar from "../../Components/SideBar/SideBar";
import "./single.css";

function Single() {
  return (
    <div className="single">
       <SinglePost/>
      <SideBar/>  
    </div>
  )
}

export default Single
