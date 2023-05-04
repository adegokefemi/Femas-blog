import TopBar from "./Components/TopBar/TopBar";
import Settings from "./page/settings/Settings";
import Home from "./page/Home/Home";
import Single from "./page/single/Single";
import Write from "./page/write/Write";
import Login from "./page/login/Login"
import Register from "./page/register/Register";
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Context } from "./context/Context";


function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar/>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/post/:postId" element={<Single/>} />
          <Route exact path="/write" 
          element={ user ? <Write/> :<Register/>} />
          <Route exact path="/settings" 
          element={user ? <Settings/> : <Register/>} />
          <Route exact path="/login" 
            element={user ? <Home/> : <Login/>} />
          <Route exact path="/register" 
            element={ user ? <Home/> : <Register/>} />
      </Routes>
   </Router>
  );
}

export default App;
