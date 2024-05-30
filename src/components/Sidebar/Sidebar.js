import React, { useState } from 'react';
import './Sidebar.scss';
import { SidebarLayout } from '../../constants/SidebarLayout'; // Importing the layout configuration for the sidebar
import SideBarMenus from '../SideBarMenus/SideBarMenus'; // Importing the SideBarMenus component
import Avatar from "../Avatar/Avatar"; // Importing the Avatar component
import { classNames } from '../../services/util.services'; // Importing a utility function


const SideBar = () => {
  
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="sidebar-content" style={{ backgroundColor: `${SidebarLayout.theme.bg}` }}>
      <ProjectPlaceholder service={SidebarLayout.logo} />

      <div className='sc-menus-section'>
        <SideBarMenus />
      </div>

      <div className='sc-user-controls-section' tabIndex={0} onBlur={() => setShowPopup(false)} onClick={() => setShowPopup((o) => !o)}> 
        <Avatar type="sidebar" img={SidebarLayout.user.thumbnail} />
        {/* Rendering the user profile popup if showPopup is true */}
        {showPopup && <UserProfile user={SidebarLayout.user} userPopupMenus={SidebarLayout.userPopupMenus} />}
      </div>
    </div>
  );
};

// ProjectPlaceholder component definition
const ProjectPlaceholder = ({ service }) => {
  return (
    <div className='sc-service-segment' title={service?.content}> 
      <img className="scss-logo" src={service?.image} alt='image' /> 
      <div className="scss-name">{service?.content}</div>
    </div>
  );
};

// UserProfile component definition
const UserProfile = ({ user = {}, userPopupMenus = [] }) => {
  return (
    <div className='user-profile' onClick={(e) => e.stopPropagation()}>
      <div className="up-profile">
        <Avatar type="profile" img={user.thumbnail} />
        <div className="upp-content">
          <div className="uppc-name">{user.name}</div>
          <div className="uppc-email">{user.email}</div>
        </div>
      </div>
      <div className="up-menus">
        {userPopupMenus?.map((menu, index) => (
          <ProfileMenu menu={menu} key={`manu-${index}`} />
        ))}
      </div>
    </div>
  );
};

// ProfileMenu component definition
const ProfileMenu = ({ menu = {} }) => {

  const [showMenu, setMenu] = useState(false);

  return (
    <div className="profile-menu" onClick={() => {
      if (menu?.subMenus?.length) {
        setMenu((o) => !o)
      }
    }}>
      {/* Rendering menu icon if available */}
      {menu?.icon ? <i className={classNames("pm-icon", menu?.icon)} /> : <></>}
      <div className="pm-content">{menu.content}</div>

      {/* Rendering right icon for submenu if available */}
      {menu?.subMenus?.length ? <>
        <i className={classNames("pm-right-icon", "icon-chevron-right")}></i>
        {showMenu ? <ProfileSubmenus setMenu={setMenu} menus={menu?.subMenus} /> : <></>}
      </> : <></>}
    </div>
  )
}

// ProfileSubmenus component definition
const ProfileSubmenus = ({ menus }) => {
  return (
    <div className="profile-submenus">
      {/* Rendering submenus in a loop */}
      {menus?.map((menu, index) => (
        <div className="ps-menu" onMouseDown={() => { }} key={`submenu-${index}`}>{menu?.content}</div>
      ))}
    </div>
  )
}

export default SideBar;
