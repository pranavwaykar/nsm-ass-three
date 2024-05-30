import React from "react"; 
import "./Dashboard.scss"; 
import BreadCrumb from "../../pages/BreadCrumb/BreadCrumb"; // Importing the BreadCrumb component
import DashboardStatPanel from "../DashboardStatPanel/DashboardStatPanel"; // Importing the MainPageContent component
import DashboardTreeMenu from "../DashboardTreeMenu/DashboardTreeMenu"; // Importing the MainPageContent component

// MainPage component definition
const MainPage = () => {
  return (
    <div className="main-page-content">
      {/* <div className="mpc-menu-tree-content">
      <DashboardTreeMenu/>
      </div> */}

      <div className="mpc-menu-stat-content">
        <div className="mpc-breadcrumb-content">
          <BreadCrumb />
        </div>

        <div className="mpc-table-content">
          <DashboardStatPanel />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
