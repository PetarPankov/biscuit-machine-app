import React from 'react';

import { SwitchBox, Title, Lever, LeverBall } from './styles';


const SwitchController = () => {
    return (
        <div className="switch_controller_wrapper">
            <Lever>
                <LeverBall />
            </Lever>
            <SwitchBox>
                <div>
                    <Title>Paused</Title>
                </div>
                <div>
                    <Title>Off</Title>
                    <Title>On</Title>
                </div>
            </SwitchBox>
        </div>
    );
}

export default SwitchController;