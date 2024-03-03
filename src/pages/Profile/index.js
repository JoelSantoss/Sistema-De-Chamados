
import Header from '../../components/Header'
import Title from '../../components/Title'
import { FiSettings, FiUpload } from 'react-icons/fi';
import avatar from '../../assets/avatar.png';
import { AuthContext } from '../../Contexts/auth';
import { useContext, useState } from 'react';
import "./profile.css"

export default function Profile(){

    const {user, storageUser, setUser, logout} = useContext(AuthContext);
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
    const [nome, setNome] = useState(user && user.nome)
    const [email, setEmail] = useState(user && user.email)
    const [imageAvatar, setImageAvatar] = useState(null)

    function handleFile(e){
      if(e.target.files[0]){
        const image = e.target.files[0];

        if(image.type === 'image/jpeg' || image.type === 'image/png'){
          setImageAvatar(image)
          setAvatarUrl(URL.createObjectURL(image))
        }else{
          alert("envie uma imagem em formato JPEG ou PNG");
          setImageAvatar(null)
          return;
        }
      }
    }

    return(
        <div>
            <Header/>
            <div className='content'>
                <Title name='Meu perfil'>
                  <FiSettings size={25}/>
                </Title>

               <div className='container'>
                 
                 <form className='form-profile'>
                   <label className='label-avatar'>
                     <span>
                        <FiUpload color='#FFF' size={25}/>
                     </span>

                     <input type='file' accept='image/*' onChange={handleFile}/><br/>
                     {avatarUrl === null ? (
                        <img src={avatar} alt='foto de perfil' width={250} height={250}/>
                     ) : (
                        <img src={avatarUrl} alt='foto de perfil' width={250} height={250}/>
                     )}
                    
                   </label>

                   <label>Nome</label>
                   <input type='text' value={nome} onChange={(e)=> setNome (e.target.value)}/>
                   <label>Email</label>
                   <input type='text' value={email} disabled={true}/>
                   
                   <button type='submit'>Salvar</button>
                 </form>
                </div> 

                <div className='container'>
                    <button className='logout-btn' onClick={ ()=> logout() }>Sair</button>
                </div>
            </div>
           
        </div>
    )
}