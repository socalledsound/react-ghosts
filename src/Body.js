import React from 'react';

const Body = ({ x, y, size, color }) => {

    return (
        <g>
            <circle cx={x} cy={y} r={size} fill={color}/>
            <rect x={x-size} y={y} width={size * 2.0} height={size * 2.0} fill={color}/>
        </g>
    )

}
export default Body