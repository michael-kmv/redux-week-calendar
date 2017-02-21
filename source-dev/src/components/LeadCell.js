import React, { PropTypes, Component } from 'react'

export default class LeadCell extends Component {
  onAllDayBtnClick(caption) {
    //console.log('12121'+caption);
    this.props.leadCellClick(caption);
  }

  render() {
    const { caption, data } = this.props;

    return <span className='ib'>
      <button className={'btn ' + (data ? 'active' : '')}>{caption}</button>
      <button
          className={'btn ' + ((data == 2) ? 'checked' : '')}
          onClick={::this.onAllDayBtnClick.bind(this, caption)}
      ></button>
    </span>
  }
}

LeadCell.propTypes = {
  caption: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired,
  leadCellClick: PropTypes.func.isRequired
};

