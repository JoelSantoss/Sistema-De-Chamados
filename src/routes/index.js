import { Route, Routes } from "react-router-dom";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Deashboard from "../pages/Dashboard";

function RoutesApp(){
    return(
        <Routes>
            < Route path="/" element={<SignIn/>} />
            < Route path="/register" element={ <SignUp/>} />
            
            < Route path="/dashboard" element={ <Deashboard/>} />
        </Routes>
    )
}

export default RoutesApp;