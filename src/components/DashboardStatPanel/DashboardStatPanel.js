import React from 'react'
import './DashboardStatPanel.scss';
import Table from '../Table/Table';

const DashboardStatPanel = () => {
  return (
    <div className='dsp-section'>
      <Table/>
      <div className="dsps-right-menu">
         Options
      </div>
    </div>
  )
}

export default DashboardStatPanel
