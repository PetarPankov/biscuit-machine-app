import React from 'react';
import { ExtruderBox, ExtruderBoxWrapper } from './styles';

const Stamper = () => {
    return (
        <div className="stamper_wrapper">
            <ExtruderBoxWrapper />
            <ExtruderBox />
            <div>Stamper</div>
        </div>
    );
}

export default Stamper;