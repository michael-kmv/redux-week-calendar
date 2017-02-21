import {
  TIME_CELL_CLICK
} from '../constants/DataRow'


export function cellClick(caption, timeInterval, active) {
  return (dispatch) => {
    dispatch({
      type: TIME_CELL_CLICK,
      payload: {caption: caption, timeInterval: timeInterval, active: active}
    })
  }
}
