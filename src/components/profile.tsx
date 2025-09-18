import "./styles/profile.css";
import dp_img from "../assets/Ellipse 114.png";
import input_img from "../assets/Group 1585.png";
import { useState } from "react";

export default function Profile(){
    const [file,setFile]=useState<string | undefined>("/userDp.png");
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const tempUrl = URL.createObjectURL(file);
      setFile(tempUrl);
    }
  };
    return(
        <div className="profile-container"> 
        <div className="profile-div">
            <section className="profile-nav">
                <p>Account Settings</p>
            </section>
            <section className="profile-data">
                    <img src={file} width={"76px"} height={"76px"} className="dp"></img>
                    <input type="file" id="fileInput" style={{display:"none"}} onChange={handleFileChange}></input>
                    <label htmlFor="fileInput">
                    <img src={input_img} width={"21px"} alt="upload"  height={"23px"} className="input"></img>
                    </label>
                    <p className="name">Marry Doe</p>
                    <p className="email">Marry@Gmail.Com</p>
                    <p className="content">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
            </section>
        </div>
        </div>
    )
}