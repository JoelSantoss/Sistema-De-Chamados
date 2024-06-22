import { AuthContext } from "../../Contexts/auth";
import { useContext } from "react";

import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiPlus, FiMessageSquare, FiSearch, FiEdit} from 'react-icons/fi';
import { Link } from 'react-router-dom'

import './dashboard.css';


export default function Deashboard(){

    const {logout} = useContext(AuthContext);

    async function handleLogout(){
        await logout();
    }

    return(
        <div>

            <Header/>
             
             <div className="content">
                <Title name='Chamados'>
                    <FiMessageSquare size={25}/>
                </Title>

                 <>
                  <Link className="new" to="/new">
                    <FiPlus color="#FFF" size={25}/>
                    Novo Chamado
                  </Link>
                
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Cliente</th>
                            <th scope="col">Assunto</th>
                            <th scope="col">Status</th>
                            <th scope="col">Cadastrado em:</th>
                            <th scope="col">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Cliente">Mercado esquina</td>
                            <td data-label="Assunto">Suporte</td>
                            <td data-label="Status">Em aberto</td>
                            <td data-label="Cadastrado">12/05/2024</td>
                            <td data-label="#">
                                <button className="action" style={{backgroundColor: '#3583f6'}}>
                                    <FiSearch color="#FFF" size={17}/>
                                </button>
                                <button className="action" style={{backgroundColor: '#f6a935'}}>
                                    <FiEdit color="#FFF" size={17}/>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </>
              
             </div>
        </div>
    )
}