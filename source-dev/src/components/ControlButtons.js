import React, { Component } from 'react'

export default class ControlButtons extends Component {
  onClearClick() {
    this.props.clearClick();
  }
  onSaveClick() {
    this.props.saveClick();
  }

  render() {
    return <span className='ib page'>
      <button className='ctrlbtn' onClick={::this.onClearClick}>Clear</button>{' '}
      <button className='ctrlbtn' onClick={::this.onSaveClick}>Save Changes</button>{' '}
    </span>
  }
}

