import React from 'react';
import { HeaderContainer, Info, Item } from './header';
import logo from '../../assets/img/logo.svg'
export default function Header(){
    return(

        <HeaderContainer >
            <Info>
                <div className='info--left'>
                    <a href="/">

                        <img className="Logo" src={logo}/>
                    
                    </a>
                </div>
                <div className='info--rigth'>
                    <ul style = {{display:'flex',flexDirection:'row'}}>
                        <Item >Inicio Rápido</Item>
                        <Item>Fale conosco</Item>
                    </ul>
                </div>
            </Info>
        </HeaderContainer>

    )
}