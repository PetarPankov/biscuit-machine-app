import { useReducer, useCallback } from 'react';

const initialState = {
    machineState: {
        oven: {
            isOn: false,
            isHeaterOn: false,
            isReady: false,
            hasCookieInOven: false
        },
        conveyor: {
            isOn: false
        },
        extruder: {
            isOn: false
        },
        stamper:{
            isOn:false
        },
        motor: {
            isOn: false
        }        
    },
    switchPosition: 'OFF',
    cookedBiscuits: 0
};

const machineEngineReducer = (currentMachineState, action) => {
    switch (action.type) {
        case 'UPDATE_MACHINE_ENGINE':
            currentMachineState[action.machineType][action.machineProp] = action.state;
            return currentMachineState;
        case 'UPDATE_SWITCH_POSITION':
            return {
                switchPosition: action.switchPosition
            };
        default:
            throw new Error('Should not be reached!');
    }
};

const useMachineEngine = () => {
    const [machineEngineState, dispatchAction] = useReducer(machineEngineReducer, initialState);

    const updateMachineEngineState = useCallback(
        (state, machineType, machineProp) => {
            dispatchAction({ type: 'UPDATE_MACHINE_ENGINE', state, machineType, machineProp});
        },
        []
    );

    const setProcess = useCallback(
        (position) => {
            dispatchAction({ type: 'UPDATE_SWITCH_POSITION', switchPosition: position });
        },
        []
    );

    return {
        machineState: machineEngineState.machineState,
        switchPosition: machineEngineState.switchPosition,
        updateMachineEngineState,
        setProcess
    };
};

export default useMachineEngine;
