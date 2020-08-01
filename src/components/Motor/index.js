import React from 'react';
import { InnerWheel, OuterWheel } from './styles';

const Motor = () => {
    return (
        <div className="Motor-wrapper">
            <OuterWheel>
                <InnerWheel />
            </OuterWheel>
            <div>Motor</div>
        </div>
    );
}

export default Motor;