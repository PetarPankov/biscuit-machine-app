import React from 'react';

import { SwitchBox, Title, Lever, LeverBall } from './styles';
import PropTypes from 'prop-types';

const SwitchController = (props) => {
    /* TODO change css for lever */
    return (
        <div className="switch_controller_wrapper">
            <Lever position={props.selectedPosition} >
                <LeverBall />
            </Lever>
            <SwitchBox>
                <div>
                    <Title onClick={()=>props.setControllerPosition('PAUSED')}>Paused</Title>
                </div>
                <div>
                    <Title onClick={()=>props.setControllerPosition('OFF')}>Off</Title>
                    <Title onClick={()=>props.setControllerPosition('ON')}>On</Title>
                </div>
            </SwitchBox>
        </div>
    );
}

SwitchController.propTypes = {
    selectedPosition: PropTypes.string.isRequired,
    setControllerPosition: PropTypes.func.isRequired,
  };

export default SwitchController;