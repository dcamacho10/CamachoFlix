import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom'; 
import Logo from '../../assets/image/logo.png';
import './Menu.css';

function Menu(){
    return(        
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo CamachoFlix"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/Video">
                Novo Vídeo
            </Button>
        </nav>

    );
}

export default Menu;