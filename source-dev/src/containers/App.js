import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LeadCell from '../components/LeadCell'
import DataRow from '../components/DataRow'
import ControlButtons from '../components/ControlButtons'
import * as dataRowActions from '../actions/DataRowActions'
import * as leadRowActions from '../actions/LeadRowActions'
import * as controlButtonsActions from '../actions/ControlButtonsActions'

class App extends Component {
  render() {
    const { data } = this.props;
    const { cellClick } = this.props.dataRowActions;
    const { leadCellClick } = this.props.leadRowActions;
    const { clearClick, saveClick } = this.props.controlButtonsActions;

    return <div className='row'>
      <div className='ib gray'>
        <div className='ib w32'></div><div className='ib w32'><span className='allday'>ALL DAY</span></div>
      </div>
      <div className='ib gray'>
        <div className='ib'>
          <div className='ib ctime'>00:00</div><div className='ib ctime'>03:00</div><div className='ib ctime'>06:00</div>
          <div className='ib ctime'>09:00</div><div className='ib ctime'>12:00</div><div className='ib ctime'>15:00</div>
          <div className='ib ctime'>18:00</div><div className='ib ctime'>21:00</div>
        </div>
        <div className='clear'></div>
        <div className='ib'>
          <div className='ib tick'></div><div className='ib tick'></div><div className='ib tick'></div>
          <div className='ib tick'></div><div className='ib tick'></div><div className='ib tick'></div>
          <div className='ib tick'></div><div className='ib tick'></div>
        </div>
      </div>
      <div className='calendarrow'>
        <div><LeadCell caption='mo' data={data.leadCell.mo} leadCellClick={leadCellClick} /><DataRow caption='mo' data={data.dataRow.mo} cellClick={cellClick} /></div>
        <div><LeadCell caption='tu' data={data.leadCell.tu} leadCellClick={leadCellClick} /><DataRow caption='tu' data={data.dataRow.tu} cellClick={cellClick} /></div>
        <div><LeadCell caption='we' data={data.leadCell.we} leadCellClick={leadCellClick} /><DataRow caption='we' data={data.dataRow.we} cellClick={cellClick} /></div>
        <div><LeadCell caption='th' data={data.leadCell.th} leadCellClick={leadCellClick} /><DataRow caption='th' data={data.dataRow.th} cellClick={cellClick} /></div>
        <div><LeadCell caption='fr' data={data.leadCell.fr} leadCellClick={leadCellClick} /><DataRow caption='fr' data={data.dataRow.fr} cellClick={cellClick} /></div>
        <div><LeadCell caption='sa' data={data.leadCell.sa} leadCellClick={leadCellClick} /><DataRow caption='sa' data={data.dataRow.sa} cellClick={cellClick} /></div>
        <div><LeadCell caption='su' data={data.leadCell.su} leadCellClick={leadCellClick} /><DataRow caption='su' data={data.dataRow.su} cellClick={cellClick} /></div>
      </div>
      <div className='clear'></div>
      <div className='ctrlrow'>
        <ControlButtons clearClick={clearClick} saveClick={saveClick} />
      </div>
    </div>
  }
}

function mapStateToProps(state) {
  return {
      data: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
      dataRowActions: bindActionCreators(dataRowActions, dispatch),
      leadRowActions: bindActionCreators(leadRowActions, dispatch),
      controlButtonsActions: bindActionCreators(controlButtonsActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
