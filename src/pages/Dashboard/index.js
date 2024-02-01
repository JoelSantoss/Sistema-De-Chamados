import { AuthContext } from "../../Contexts/auth";
import { useContext } from "react";


export default function Deashboard(){

    const {logout} = useContext(AuthContext);

    async function handleLogout(){
        await logout();
    }

    return(
        <div>
         <h1> Pagina Deashboard</h1>
         <button onClick={handleLogout} >Sair</button>
        </div>
    )
}