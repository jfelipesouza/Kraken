import React, { useState } from 'react';
import Header from '../components/Header';
import CaptureVideo from '../components/CaptureVideo'

export default function App(){
    const [consistent,setConsistent] = useState(true)
    
    return(
        <div>

            <Header start = {consistent} setStart = {setConsistent} />
            {
                consistent
                    ?
                <CaptureVideo/>
                    :
                <p>Ajuda</p>
            }
        </div>
    )
}