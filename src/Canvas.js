import React from 'react';
import Ghost from './Ghost';

const ghosts = [ 
    {
        id: 0,
        x: 100,
        y: 100,
        size: 100,
        color: 'blue'
    },
    {
        id: 1,
        x: 300,
        y: 100,
        size: 100,
        color: 'red'
    }
]



const Canvas = () => {
    return (
        <svg
            viewBox="0 0 600 600"
        >
            {
            ghosts.map(ghost => {
                const { id, x,y,size,color} = ghost;
                return (
                   
                    <Ghost key={id} ghostX={x} ghostY={y} ghostSize={size} ghostColor={color}/>
                
                )
                })
           }
        </svg>
    )
}

export default Canvas