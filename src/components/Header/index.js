import React from 'react';
import { HeaderContainer, Info } from './header';

export default function Header(){
    return(

        <HeaderContainer >
            <Info>
                <div className='info--left'>
                    <a style={{textDecoration:'none',color:'#000000'}} href="/">Kraken</a>
                </div>
                <div className='info--rigth'>
                    Inicio Rapido
                    Fale conosco
                </div>
            </Info>
        </HeaderContainer>

    )
}