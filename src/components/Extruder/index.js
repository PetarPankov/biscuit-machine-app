import React from 'react';
import { ExtruderBox, ExtruderBoxWrapper, MixtureCookie, InletBox } from './styles';

const Extruder = () => {
    return (
        <div  style={{ marginTop: '35px' }} className="extruder_wrapper">
            <ExtruderBoxWrapper />
            <ExtruderBox />
            <MixtureCookie />
            <InletBox />
        </div>
    );
}

export default Extruder;