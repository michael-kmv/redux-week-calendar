import { TIME_CELL_CLICK } from '../constants/DataRow'
import { LEAD_CELL_CLICK } from '../constants/LeadRow'
import { CLEAR_BTN_CLICK, SAVE_BTN_CLICK } from '../constants/ControlButtons'
import { rebuildIntervals, markAllIntervals, clearState, getSaveState } from '../utils/intervals'

const initialState = {
    dataRow: {
        mo: [],
        tu: [],
        we: [],
        th: [],
        fr: [],
        sa: [],
        su: []
    },
    leadCell: {
        mo: 0,
        tu: 0,
        we: 0,
        th: 0,
        fr: 0,
        sa: 0,
        su: 0
    }
};

export default function wCalendarState(state = initialState, action) {
    switch (action.type) {
        case TIME_CELL_CLICK:
          {
            const caption = action.payload.caption;
            state.dataRow[caption] = rebuildIntervals(state.dataRow[caption], action.payload);
            state.leadCell[caption] = (state.dataRow[caption].length > 0) ? 1 : 0;
          }
          return { ...state };

        case LEAD_CELL_CLICK:
          {
            const caption = action.payload.caption;
            const active = state.leadCell[caption];
            if (active == 2) {
              state.dataRow[caption] = [];
              state.leadCell[caption] = 0;
            }
            else {
              state.dataRow[caption] = markAllIntervals();
              state.leadCell[caption] = 2;
            }
          }
          return { ...state };

        case CLEAR_BTN_CLICK:
          state = clearState(initialState);
          return { ...state };

        case SAVE_BTN_CLICK:
          {
            let saveState = getSaveState(state);
            console.log('JSON:',JSON.stringify(saveState));
            console.log('Object:',saveState);
            alert('Check console log')
          }
          return { ...state };

        default:
          return state;
    }

}