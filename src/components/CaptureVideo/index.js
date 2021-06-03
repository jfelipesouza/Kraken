import React from 'react'
import { Container, Info, SelectItem } from './CaptureVIdeo'
import polvo from '../../assets/img/kraken.svg'

export default function CaptureVideo(){

    return(

        <Container>
            <Info>
                <img src={polvo} className = "Kraken"/>
            <   p>Baixe videos do Youtube de graça</p>
            </Info>
            <SelectItem>
                <input className= "url" type='text' placeholder={'Insira a URL do vídeo'} />
                <button className = "Search">
                    Baixar
                </button>
            </SelectItem>
        </Container>
    
    )
}