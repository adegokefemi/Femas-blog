import { useContext, useRef, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context)
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(true);
    }
  };

  
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
              type="text" 
              placeholder="Enter your username..." 
              ref={userRef}
            />
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password..." 
              ref={passwordRef}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              Login
            </button>
            {error && <span style={{color:"red", marginTop:"10px"}}>Enter valid username and password</span>}
        </form>
        <Link to="/register">
            <button className="loginRegisterButton">Register</button>
        </Link>
    </div>
  );
}

export default Login
