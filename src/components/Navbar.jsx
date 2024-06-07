import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material';
import React, { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});


const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Search = styled("div")(({ theme }) => ({
  width: "40%",
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius,
  padding: "0 10px"
}));

const Navbar = () => {
    const [Open, setOpen] = useState(false);
  return (
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography sx={{ display: { xs: "none", sm: "block" } }} variant='h5'>sambook</Typography>
          <Pets sx={{ display: { xs: "block", sm: "none" } }} />
          <Search>
            <InputBase placeholder="search..." />
          </Search>
          <Box>
            <Icons>
              <Badge badgeContent={4} color="error">
                <Mail  />
              </Badge>
              <Badge badgeContent={4} color="error">
              <Notifications />
              </Badge>
              <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://avatars.githubusercontent.com/u/139587412?v=4"
            onClick={(e) => setOpen(true)}
          />
     
            </Icons>
            <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://avatars.githubusercontent.com/u/139587412?v=4"
          />
          <Typography>sami</Typography>
          </UserBox>
          </Box>
          <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={Open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
        </StyledToolbar>
      </AppBar>
  );
}

export default Navbar;
