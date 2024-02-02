import { AuthContext } from "../../Contexts/auth";
import { useContext } from "react";

import Header from "../../components/Header";


export default function Deashboard(){

    const {logout} = useContext(AuthContext);

    async function handleLogout(){
        await logout();
    }

    return(
        <div>

            <Header/>
         <h1> Pagina Deashboard</h1>
         <button onClick={handleLogout} >Sair</button>
        </div>
    )
}