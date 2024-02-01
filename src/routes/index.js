import { Route, Routes } from "react-router-dom";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Deashboard from "../pages/Dashboard";

import Private from "./Private";

function RoutesApp(){
    return(
        <Routes>
            < Route path="/" element={<SignIn/>} />
            < Route path="/register" element={ <SignUp/>} />
            
            < Route path="/dashboard" element={<Private><Deashboard/></Private> } />
        </Routes>
    )
}

export default RoutesApp;