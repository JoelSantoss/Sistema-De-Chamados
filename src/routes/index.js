import { Route, Routes } from "react-router-dom";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

function RoutesApp(){
    return(
        <Routes>
            < Route path="/" element={<SignIn/>} />
            < Route path="register" element={ <SignUp/>} />
        </Routes>
    )
}

export default RoutesApp;