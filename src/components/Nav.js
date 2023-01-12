import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              textAlign: "center",
            }}
          >
            Redux Toolkit with Json Server
          </Typography>
          <Box>
            <Link to='/'>
              <Button
                sx={{
                  marginRight: "10px",
                }}
                size='medium'
                color='warning'
                variant='contained'
              >
                Home
              </Button>
            </Link>
            <Link to='/create'>
              <Button size='medium' variant='contained'>
                Create
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
