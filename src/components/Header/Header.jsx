import React from "react";
import "./Header.css";
import { Avatar, IconButton } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__hours"><span className="highlight">H</span> O U R S</div>
      </div>

      <div className="header__center">
          <div className="header__option--active">Dashboard</div>
          <div className="header__option">Projects</div>
          <div className="header__option">Team</div>
          <div className="header__option">Clients</div>
          <div className="header__option">Time</div>
          <div className="header__option">Reports</div>
      </div>
      <IconButton>
        <NotificationsNoneIcon style={{color:'white'}} />
      </IconButton>
      
      <div className="header__right">
        <div className="header__info">
          <Avatar src="https://th.bing.com/th/id/OIP.EEpb5KDjZDxdc8ny__9qYAHaKH?pid=ImgDet&rs=1" />
          <h4>Mario</h4>
        </div>
        <IconButton>
          <ExpandMoreIcon style={{color:'white'}} />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
