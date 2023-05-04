import "./Home.css";
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import SideBar from "../../Components/SideBar/SideBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const { search }= useLocation(); 

  console.log(search);

  useEffect(() => {
    const fetchPosts = async () => {
     const res = await axios.get("/posts" + search);
     setPosts(res.data);
    }
    fetchPosts();
  },[search])

  return (
    <>
    <Header/>
    <div className="home">
      <Posts posts={posts}/>
      <SideBar/>
    </div>
    </>
  )
}

export default Home;
