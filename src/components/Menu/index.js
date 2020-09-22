import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button'
//import ButtonLink from './components/ButtonLink';

function Menu()
{

    // comentario fora
    /*
        comentario fora
    */
    return (
        // da pra fazer comentario antes de comecar
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt='VinimanFlix logo'/>
            </Link>

            {/* COMENTARIOS EM JSX - PRECISA DAS CHAVES */}
            {/*  */}
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
        // comentario no final
    );
}

export default Menu;