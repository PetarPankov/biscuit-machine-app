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
    return (
        <div className="biscuit_machine_wrapper">
            <div >BiscuitMachine</div>
            <div>
                <Biscuit />
                <Extruder />
                <Stamper />
                <Oven />
            </div>

            <div>
                <Conveyor />
            </div>
            <div>
                <Motor />
                <SwitchController />
            </div>
            <div>
                <BiscuitBox />
            </div>
        </div>
    );
}

export default BiscuitMachine;