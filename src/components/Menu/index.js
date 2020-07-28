import React from 'react';
import ButtonLink from '../ButtonLink'
import Logo from '../../assets/image/logo.png';
import './Menu.css';

function Menu(){
    return(        
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo CamachoFlix"/>
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </nav>

    );
}

export default Menu;