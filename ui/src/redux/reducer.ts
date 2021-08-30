import actions from "./actions";
import { IAction } from '../components/types'

export default function reducer(state= initialState, action:IAction) {
    switch(action.type) {         
        case actions.setData.type:
            console.log('Set institution data');
            return {
                ...state, data: action.data
            };

        default:
        return state; 
    }
};
 
export const initialState = {
    data: [],
};
