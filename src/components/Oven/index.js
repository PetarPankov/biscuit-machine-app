import React from 'react';
import { InnerBox, OuterBox, Heater } from './styles';

const Oven = () => {
    return (
        <div style={{ marginTop: '67px' }} className="oven_wrapper">
            <OuterBox>
                <InnerBox>
                    <Heater />
                </InnerBox>
            </OuterBox>
        </div>
    );
}

export default Oven;