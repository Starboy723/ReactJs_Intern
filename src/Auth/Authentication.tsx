import { Outlet } from "react-router-dom";
import Landing from "../components/Landing";

export default function Authentication(){
    const user:boolean=true;//redux or backendAPI
    return user?<Outlet/>:<Landing/>
}