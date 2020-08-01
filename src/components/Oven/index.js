import React from 'react';
import { InnerBox, OuterBox, Heater } from './styles';

const Oven = () => {
    return (
        <div style={{ marginTop: '67px' }} className="oven-wrapper">
            <OuterBox>
                <InnerBox>
                    <Heater />
                </InnerBox>
            </OuterBox>
            <div>Oven</div>
        </div>
    );
}

export default Oven;