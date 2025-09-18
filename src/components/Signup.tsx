import "./styles/signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup(){
    const navigate=useNavigate();
    const [agency,setAgency]=useState<string | "">("no");
    const [username,setUsername]=useState<string | "">("Marry Doe");
    const [number,setNumber]=useState<string | "">("Marry Doe");
    const [email,setEmail]=useState<string | "">("Marry Doe");
    const [password,setPassword]=useState<string | "">("Marry Doe");
    const [company,setCompany]=useState<string | "">("Marry Doe");
    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        //backendlogic
        navigate("/login");
    }
    return (
        <div className="signup-container">
            <div className="signup-div">
              <p className="heading">Create Your <br/> PopX account</p>
              <form onSubmit={handleSubmit}>
              <label htmlFor="username" id="username-label">Full Name
                 <span style={{ color: "red" }}>*</span></label>
                 <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="inputs" id="username" required />
              <label htmlFor="number" id="number-label">Phone Number
                 <span style={{ color: "red" }}>*</span></label>
                 <input type="text" id="number" value={number} onChange={(e)=>setNumber(e.target.value)} className="inputs" required />
              <label htmlFor="email" id="email-label">Email Address
                 <span style={{ color: "red" }}>*</span></label>
                 <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="inputs" required />
              <label htmlFor="password" id="password-label">Password
                 <span style={{ color: "red" }}>*</span></label>
                 <input type="text" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="inputs" required />
              <label htmlFor="company" id="company-label">Company Name</label>
                 <input type="text" id="company" value={company} onChange={(e)=>setCompany(e.target.value)} className="inputs" required />
                 <label id="agency">Are you an Agency?<span style={{ color: "red" }}>*</span></label>
                 <label id="radio-yes">
                Yes
               </label>
              <input type="radio" className="radio1" name="agency" value="yes" checked={agency=== "yes"} onChange={(e) => setAgency(e.target.value)}/>
            <label id="radio-no" style={{ marginLeft: "10px" }}>
               No
            </label>
              <input type="radio" className="radio2" name="agency" value="no" checked={agency === "no"} onChange={(e) => setAgency(e.target.value)}/>
               <button type="submit" className="signup-btn btns">Create Account</button>
                </form>
            </div>
        </div>
    )
}