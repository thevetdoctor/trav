import actions from "./actions";
import { IAction, IState } from '../components/types'

export default function reducer(state:IState = initialState, action:IAction) {
    switch(action.type) {         
        case actions.setData.type:
            console.log('Set institution data');
            return {
                ...state, data: action.payload
            };

        default: 
        return state; 
    }
};
 
export const initialState:IState = {
    data: [],
};
