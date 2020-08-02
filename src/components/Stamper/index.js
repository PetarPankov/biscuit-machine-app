import React from 'react';
import { ExtruderBox, ExtruderBoxWrapper } from './styles';

const Stamper = () => {
    return (
        <div style={{ marginTop: '35px' }} className="stamper_wrapper">
            <ExtruderBoxWrapper />
            <ExtruderBox />
        </div>
    );
}

export default Stamper;