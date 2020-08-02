import React from 'react';
import { InnerWheel, OuterWheel } from './styles';

const Motor = () => {
    return (
        <div className="motor_wrapper">
            <OuterWheel>
                <InnerWheel />
            </OuterWheel>
        </div>
    );
}

export default Motor;