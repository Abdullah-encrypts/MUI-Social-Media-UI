import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React, { useState } from "react";

const NavBar = () => {

  const [open, setOpen] = useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display:'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]:{
        display:"flex"
    }
  }));
  
  const UserBox = styled(Box)(({ theme }) => ({
    display:'flex',
    gap: '10px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]:{
        display:"none"
    }
  }));



  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          Abdullah Encrypts
        </Typography>
        <AcUnitIcon sx={{ display: { xs: "block", sm: "none" } }}></AcUnitIcon>
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={9} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar onClick={e=> setOpen(true)} alt="Remy Sharp" src="/assets/Jordan.jpg" sx={{width: 30, height:30}}/>
        </Icons>
        <UserBox onClick={e=> setOpen(true)}>
        <Avatar alt="Remy Sharp" src="/assets/Jordan.jpg" sx={{width: 30, height:30}}/>
        <Typography variant="span">
            Jordan
        </Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
