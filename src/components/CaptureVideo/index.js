import React from 'react'
import { Container, SelectItem } from './CaptureVIdeo'


export default function CaptureVideo(){

    return(

        <Container>
            <SelectItem>
                <input className= "url" type='text'/>
                <button className = "Search">
                    Baixar
                </button>
            </SelectItem>
        </Container>
    
    )
}