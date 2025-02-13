import {useState} from 'react'

function Evento(params) {
    function handleEvento({numero}) {
        console.log(`Esse é seu número? ${numero} `);
        
    }

    return <button onClick={handleEvento}>Click</button>
};

export default Evento;