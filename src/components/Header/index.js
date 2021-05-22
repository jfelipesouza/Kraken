import React from 'react';

export default function Header(){
    return(

        <header>
            <div className='info'>
                <div className='info--left'>
                    <a style={{textDecoration:'none'}} href="/">Kraken</a>
                </div>
                <div className='info--rigth'>
                    Inicio Rapido
                    Fale conosco
                </div>
            </div>
        </header>
    )
}