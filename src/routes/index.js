import { Route, Routes } from "react-router-dom";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Deashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

import Private from "./Private";
import Costumers from "../pages/Costumers";

function RoutesApp(){
    return(
        <Routes>
            < Route path="/" element={<SignIn/>} />
            < Route path="/register" element={ <SignUp/>} />
            
            < Route path="/dashboard" element={<Private><Deashboard/></Private> } />
            < Route path="/profile" element={<Private><Profile/></Private> } />
            <Route path="/costumers" element={<Private><Costumers/></Private>}/>
        </Routes>
    )
}

export default RoutesApp;