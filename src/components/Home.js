import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../redux/features/userSlice";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PreviewIcon from "@mui/icons-material/Preview";
import Nav from "./Nav";

const Home = () => {
  const { data, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
  }, []);

  console.log(data);

  return (
    <>
      <Nav />
      <Box
        sx={{
          width: "100%",
          maxWidth: "430px",
          bgcolor: "background.paper",
          margin: "30px",
        }}
      >
        {isLoading && <h1>Loading...</h1>}
        {!isLoading &&
          data &&
          data.map((usr) => (
            <nav key={usr.id} aria-label='main mailbox folders'>
              <Link to={`/todo-user/${usr.id}`}>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText
                        primary={
                          <Typography variant='h5' color='info'>
                            {usr.username}
                          </Typography>
                        }
                      />
                      <ListItemIcon>
                        <PreviewIcon />
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Link>
            </nav>
          ))}
      </Box>
    </>
  );
};

export default Home;
