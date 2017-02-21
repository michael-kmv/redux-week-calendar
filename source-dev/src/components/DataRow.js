import React, { PropTypes, Component } from 'react'
import { timeIntervals } from '../constants/DataRow'

export default class DataRow extends Component {
  onCalendarBtnClick(caption, index, active) {
    this.props.cellClick(caption, timeIntervals[index], active);
  }
  onCalendarBtnOver(caption, index, active, e) {
    if (e.buttons == 1 || e.buttons == 3) {
      this.props.cellClick(caption, timeIntervals[index], active);
    }
  }

  render() {
    const { caption, data } = this.props;

    return <span className='ib'>
      { timeIntervals.map((item,index) => {
          let active = false;
          for (let i=0; i<data.length; i++) {
              if ( (item.bt <= data[i].bt) && (item.et >= data[i].bt) ||
                   (item.bt <= data[i].et) && (item.et >= data[i].et) ||
                   (item.bt >= data[i].bt) && (item.et <= data[i].et)
                 ) {
                active = true;
                break;
              }
          }
          return <button
              className={'btn sbtn ' + (active ? 'active' : '')}
              key={caption + index}
              onMouseDown={::this.onCalendarBtnClick.bind(this, caption, index, active)}
              onMouseEnter={::this.onCalendarBtnOver.bind(this, caption, index, active)}
          >{/*{item.bt}-{item.et}*/}</button>
        })
      }
    </span>
  }
}

DataRow.propTypes = {
    caption: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    cellClick: PropTypes.func.isRequired
};
