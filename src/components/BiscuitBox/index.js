import React from 'react';
import { InnerBox, OuterBox } from './styles';

const BiscuitBox = () => {
    return (
        <div className="biscuit_box_wrapper">
            <OuterBox>
                <InnerBox />
            </OuterBox>
            <div>BiscuitBox</div>
        </div>
    );
}

export default BiscuitBox;