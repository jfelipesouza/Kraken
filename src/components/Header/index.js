import React from 'react';
import { HeaderContainer, Info, Item, List } from './header';
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

                    <List>
                        <Item>
                            <a> Inicio Rápido</a>
                        </Item>
                        <Item>
                            <a> Fale conosco</a>
                        </Item>
                    </List>

                </div>
            </Info>
        </HeaderContainer>

    )
}