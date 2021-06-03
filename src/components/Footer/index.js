import React from 'react';
import { FooterContainer,Main } from './footer';
import {FaInstagram} from 'react-icons/fa'
import {AiOutlineCopyright} from 'react-icons/ai'
import logo from '../../assets/img/logo.svg'

export default function Footer(){
    return(
        <FooterContainer>

            <Main>
                <div className ="left">
                    <img id = 'logo' src={logo} />
                </div>

                <div className='center'>
                    <AiOutlineCopyright className='text'/>
                    <p className= "text">
                        2021 Dinossauro espacial 
                    </p>
                </div>

                <div className = "right">
                
                    <span>
                        <a href={'https://instagram.com/dinossauroespacialoficial?utm_medium=copy_link'}>
                            <FaInstagram/>
                        </a>
                    </span>


                </div>
                
            </Main>
            
        </FooterContainer>
    )
}