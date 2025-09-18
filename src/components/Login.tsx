import { useState } from "react";
import "./styles/login.css";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [email,setEmail]=useState<string>("");
    const [password,setPassword]=useState<string>("");
    const isFormValid = email.trim() !== "" && password.trim() !== "";
    const navigate=useNavigate();
    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //backend login
    navigate("/profile");
  };
    return (
        <div className="login-container">
            <div className="login-div">
                <h1 className="heading">Signin to your <br/> PopX account</h1>
                <p className="desc">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className="email-label">Email Address</label>
                    <input required type="email" value={email} id="email" className="email-input" placeholder="Enter email address" onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor="password" className="password-label">Password</label>
                    <input required value={password} type="password" id="password" className="password-input" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}></input>
                    <button type="submit" className={`login-btn btns ${isFormValid ? "active":""}`}>Login</button>
                </form>
            </div>
        </div>
    )
}