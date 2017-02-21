import {
  LEAD_CELL_CLICK
} from '../constants/LeadRow'


export function leadCellClick(caption) {
  return (dispatch) => {
    dispatch({
      type: LEAD_CELL_CLICK,
      payload: {caption: caption}
    })
  }
}
