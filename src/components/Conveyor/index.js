import React, { useState } from 'react';
import { ConveyorRamp, Line, SVG } from './styles';

import useInterval from '../../hooks/interval';

const Conveyor = (props) => {
    let [cookiesOnConveyor, setCookieOn] = useState([2]);

/*  useInterval(() => {
        console.log(cookiesOnConveyor, 'before')
        cookiesOnConveyor.push(1);
        
        console.log(cookiesOnConveyor, 'after')
        setCookieOn(cookiesOnConveyor);
    }, 2000);

    useInterval(() => {
        console.log(cookiesOnConveyor, 'delete before')
        cookiesOnConveyor.splice(0,1);
        console.log(cookiesOnConveyor, 'delete after')
        setCookieOn(cookiesOnConveyor);
    }, 11000); */

  


    return (
        <div className="conveyor_wrapper">
            <ConveyorRamp>
                <SVG className='line-svg' width={645} height={8}>
                    <Line isMoving={props.isMoving} points="5,5 645,5 645,645 5,645" />
                </SVG>
            </ConveyorRamp>
        </div>
    );
}

export default Conveyor;