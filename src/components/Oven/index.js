import React, { useState } from 'react';
import { InnerBox, OuterBox, Heater } from './styles';

import useInterval from '../../hooks/interval';

import { MAX_TEMP, STEP, NORMAL_OVEN_TEMP, MIN_TEMP } from '../../constants';

const Oven = (props) => {
    const [temp, setTemp] = useState(NORMAL_OVEN_TEMP),
        [step, setStep] = useState(200),
        [isHeaterOn, setIsHeaterOn] = useState(false),
        [isReady, setIsReady] = useState(false);

    useInterval(() => {
        if (temp > MAX_TEMP) {
            setIsReady(true)
            setTemp(temp - 1);
            setIsHeaterOn(false);
        }

        if (temp < MIN_TEMP) {
            setTemp(temp + 2);
            setIsHeaterOn(true);
        }

        if (temp >= MIN_TEMP && temp <= MAX_TEMP && isHeaterOn) {
            setTemp(temp + 1);
        }

        if (temp >= MIN_TEMP && temp <= MAX_TEMP && !isHeaterOn) {
            setTemp(temp - 1);
        }

    }, step);

    /*   useInterval(() => {
          if (temp > MAX_TEMP) {
              setStep(10000);
              setIsReady(true)
          }
          if (step > 10 && temp < MAX_TEMP) {
              setStep(step / 2);
          }
      }, 1000); */


    console.log(temp, 'temp');
    console.log(isHeaterOn, 'Heating Element');

    return (
        <div style={{ marginTop: '67px' }} className="oven_wrapper">
            <OuterBox>
                <InnerBox>
                    <Heater isHeaterOn={isHeaterOn} />
                </InnerBox>
            </OuterBox>
        </div>
    );
}

export default Oven;