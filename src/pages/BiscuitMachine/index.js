import React from 'react';

import Biscuit from '../../components/Biscuit';
import BiscuitBox from '../../components/BiscuitBox';
import Conveyor from '../../components/Conveyor';
import Extruder from '../../components/Extruder';
import Motor from '../../components/Motor';
import Oven from '../../components/Oven';
import Stamper from '../../components/Stamper';
import SwitchController from '../../components/SwitchController';

const BiscuitMachine = () => {
    /* TODO: remove inline styles from div`s */
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
                        <Oven />
                    </div>

                    <div style={{ marginBottom: '60px' }}>
                        <Conveyor />
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around'
                    }}>
                        <Motor />
                        <SwitchController />
                    </div>
                </div>
                <div style={{
                    transform: 'translateY(65%)',
                    '-ms-transform': 'translateY(65%)',
                    marginLeft: '50px'
                }}>
                    <BiscuitBox />
                </div>
            </div>
        </div>
    );
}

export default BiscuitMachine;