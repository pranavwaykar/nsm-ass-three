import React from 'react';
import './BreadCrumb.scss';
import { breadcrumblayout } from '../../constants/BreadcrumbLayout.js'; // Importing a utility function

const BreadCrumb = ({ currentTransactionPage = 'TRANSACTION DETAIL PAGE' }) => {
  
  // Filter breadcrumb items to only include 'CLIENT' and 'MATTER'
  const filteredBreadcrumb = breadcrumblayout.filter(
    item => item.label === 'CLIENT' || item.label === 'MATTER'
  );

  // Add the current transaction page to the breadcrumb trail
  filteredBreadcrumb.push({ path: '#', label: currentTransactionPage });

  return (
    
    <div className='breadcrumb-content'>
      {/* Home icon at the beginning of the breadcrumb trail */}
      <div className='bc-origin-home'>
        <i className='icon-house-solid'></i>
      </div>
      {/* Map over the filteredBreadcrumb array to create the breadcrumb trail */}
      {filteredBreadcrumb.map((item, index) => (
        <div key={index} className='bc-breadcrumb-trail'>
          <i className='icon-chevron-right'></i>
          <span className='bcbt-text'>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
