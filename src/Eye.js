import React from 'react';

const Eye = ({x, y, size, color, translatePupilX}) => {

    return (
          <g>
              <circle cx={x} cy={y} r={size} fill='#FFFFFF'/>
              <circle cx={x + translatePupilX} cy={y} r={size/2} fill='#000000'/>
          </g>  
    )

}
export default Eye