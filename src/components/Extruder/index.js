import React from 'react';
import { ExtruderBox, ExtruderBoxWrapper, MixtureCookie, InletBox } from './styles';

const Extruder = () => {
    return (
        <div className="extruder_wrapper">
            <ExtruderBoxWrapper />
            <ExtruderBox />
            <MixtureCookie />
            <InletBox />
            <div> Extruder </div>
        </div>
    );
}

export default Extruder;