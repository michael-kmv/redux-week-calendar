import {
    CLEAR_BTN_CLICK,
    SAVE_BTN_CLICK
} from '../constants/ControlButtons'


export function clearClick() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_BTN_CLICK,
      payload: ''
    })
  }
}

export function saveClick() {
    return (dispatch) => {
        dispatch({
            type: SAVE_BTN_CLICK,
            payload: ''
        })
    }
}