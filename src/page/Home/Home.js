import "./Home.css";
import Header from "../../Components/Header/Header";
import Post from "../../Components/Posts/Posts";
import SideBar from "../../Components/SideBar/SideBar";

function Home() {
  return (
    <>
    <Header/>
    <div className="home">
      <Post/>
      <SideBar/>
    </div>
    </>
  )
}

export default Home;
