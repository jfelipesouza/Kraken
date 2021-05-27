import React from 'react';
import { HeaderContainer, Info, Item, List } from './header';
import logo from '../../assets/img/logo.svg'


export default function Header(props){
    
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
                            <button onClick={()=>{props.setStart(!props.start)}} > Inicio Rápido</button>
                        </Item>
                        <Item>
                            <button> Fale conosco</button>
                        </Item>
                    </List>
                
                </div>

            </Info>
        </HeaderContainer>

    )
}