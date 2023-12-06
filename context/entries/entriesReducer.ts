import { EntriesState } from './';

type EntriesActionType =
| { type: 'entries - add' }

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {

     switch (action.type) {
        //   case 'entries - add':
        //        return {
        //             ...state,
        //        };
          default:
               return state
     }
};