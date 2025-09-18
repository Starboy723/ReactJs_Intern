import {Routes,Route} from "react-router-dom";
import Profile from "./components/profile";
import Authentication from "./Auth/Authentication";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";

export default function App(){
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/" element={<Landing/>}></Route>
      <Route element={<Authentication/>}>
      <Route path="/profile" element={<Profile/>}></Route>
      </Route>
    </Routes>
    </>
  )
}