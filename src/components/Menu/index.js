import React from 'react';
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
            <a href="/">
                <img className="Logo" src={Logo} alt='VinimanFlix logo'/>
            </a>

            {/* COMENTARIOS EM JSX - PRECISA DAS CHAVES */}
            {/*  */}
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
        // comentario no final
    );
}

export default Menu;