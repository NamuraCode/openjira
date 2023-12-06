import { entriesState } from './';

type entriesActionType =
| { type: 'entries - Name' }

export const entriesReducer = (state: entriesState, action: entriesActionType): entriesState => {

     switch (action.type) {
          case 'entries - Name':
               return {
                    ...state,
               };
          default:
               return state
     }
};