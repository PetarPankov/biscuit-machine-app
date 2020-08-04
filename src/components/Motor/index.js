import React from 'react';
import { InnerWheel, OuterWheel, ActiveWheel } from './styles';

const Motor = (props) => {
    return (
        <div className="motor_wrapper">
            <OuterWheel>
                <InnerWheel>
                    <ActiveWheel isMoving={props.isMoving} />
                </InnerWheel>
            </OuterWheel>
        </div>
    );
}

export default Motor;