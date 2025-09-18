import "./styles/landing.css";
import { Link } from "react-router-dom";

export default function Landing(){
    return(
        <div className="landing-container">
            <div className="landing-div">
            <p className="welcome-text">Welcome to PopX</p>
            <p className="desc">Lorem ipsum dolor sit amet,<br/>
                consectetur adipiscing slit,</p>
           <Link to={"/signup"}>
           <button className="signup-btn btns">Create Account</button>
           </Link> 
           <Link to={"/login"}>
            <button className="login-btn btns">Already Registered?Login</button>
           </Link>
            </div>
        </div>
    )
}