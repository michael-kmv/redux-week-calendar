export function getPossibleInitState() {
    if (typeof(window.CalendarInitData) !== 'undefined') {
        let newState = {dataRow:{}, leadCell:{}};
        for (let key in window.CalendarInitData) {
            newState.dataRow[key] = window.CalendarInitData[key];
            newState.leadCell[key] = (window.CalendarInitData[key].length > 0) ? 1 : 0;
        }
        return newState;
    }
}
