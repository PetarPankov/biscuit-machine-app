import React, { useState } from 'react';

import Biscuit from '../../components/Biscuit';
import BiscuitBox from '../../components/BiscuitBox';
import Conveyor from '../../components/Conveyor';
import Extruder from '../../components/Extruder';
import Motor from '../../components/Motor';
import Oven from '../../components/Oven';
import Stamper from '../../components/Stamper';
import SwitchController from '../../components/SwitchController';

import useMachineEngine from '../../hooks/machineEngine';

//import { OFF } from '../../constants';

const BiscuitMachine = () => {

    /*     const [selectedPosition, setControllerPosition] = useState(OFF); */

    /* TODO: remove inline styles from div`s */

    const {
        updateMachineEngineState,
        setProcess,
        switchPosition
    } = useMachineEngine();

    return (
        <div className="biscuit_machine_wrapper">
            <div style={{
                fontSize: '35px',
                marginBottom: '80px'
            }}>Biscuit Machine</div>
            <div style={{
                display: 'flex'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around'
                    }}>
                        {/* <Biscuit /> */}
                        <Extruder />
                        <Stamper />
                        <Oven switchPosition={switchPosition} />
                    </div>

                    <div style={{ marginBottom: '60px' }}>
                        <Conveyor />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around'
                    }}>
                        <Motor />
                        <SwitchController
                            selectedPosition={switchPosition}
                            setControllerPosition={setProcess}
                        />
                    </div>
                </div>
                <div style={{
                    transform: 'translateY(65%)',
                    msTransform: 'translateY(65%)',
                    marginLeft: '50px'
                }}>
                    <BiscuitBox />
                </div>
            </div>
            Status
            <div>
                {switchPosition}
            </div>
        </div>
    );
}

export default BiscuitMachine;