import React from 'react';
import Body from './Body';
import Eye from './Eye';


const Ghost = ({ghostX, ghostY, ghostSize, ghostColor}) => {

    return (
        <g>
            <Body x={ghostX} y={ghostY} size={ghostSize} color={ghostColor} />
            <Eye x={ghostX-ghostSize/4} y={ghostY} size={ghostSize/4} translatePupilX={ghostSize/8}/>
            <Eye x={ghostX + ghostSize/4} y={ghostY} size={ghostSize/4} translatePupilX={-ghostSize/8}/>
        </g>
    )

}

export default Ghost