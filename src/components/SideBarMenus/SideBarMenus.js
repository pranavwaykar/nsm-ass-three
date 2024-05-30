import React from "react";
import { SidebarLayout } from "../../constants/SidebarLayout";
import "./SideBarMenus.scss"
import { classNames } from "../../services/util.services";
const SideBarMenus = () => {
  return (
    <>
      {SidebarLayout?.menus?.map((item, index) => (
        <div className='scms-comp' onClick={item.onClick} key={`menu-${index}`} title={item.content}>
          <i className={classNames("scms-app-logo", item?.icon)} />
          <div className="scms-menu-name">{item.content}</div>
        </div>
      ))}
    </>
  );
};

export default SideBarMenus;