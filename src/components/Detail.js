import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import { getDetail } from "../redux/features/detailSlice";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading } = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getDetail(id));
  }, []);
  console.log(data);

  const deleteHandler = () => {
    fetch(`http://192.168.100.118:8000/todo-user/${data.id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("Data Deleted");
      history.push("/");
    });
    console.log("Data Deleted");
  };

  return (
    <>
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
              <Link to={`/todo-user/${id}/edit/todo-edit`}>
                <Button size='medium' variant='contained'>
                  Add More Todo
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isLoading && <h2>Loading Data...</h2>}
      {!isLoading && data && (
        <Card sx={{ maxWidth: 1200 }}>
          <CardContent>
            <Typography variant='h3' color='text.secondary' gutterBottom>
              {data.name}'s data
            </Typography>
            <Typography variant='h5' color='text.secondary' gutterBottom>
              Username: {data.username}
            </Typography>
            <Typography variant='h5' color='text.secondary' gutterBottom>
              Email: {data.email}
            </Typography>
            <Typography variant='h5' color='text.secondary' gutterBottom>
              Phone: {data.phone}
            </Typography>
            <br />

            <Typography variant='h3' color='text.secondary' gutterBottom>
              Todo List
            </Typography>
            {data &&
              data.todolist.map((todo) => (
                <>
                  <Typography key={todo.uuid}>
                    {todo.title}
                    <IconButton>
                      <EditIcon size='small' />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon size='small' />
                    </IconButton>
                  </Typography>
                </>
              ))}
          </CardContent>
          <CardActions>
            <Button size='small' color='warning' onClick={deleteHandler}>
              Delete
            </Button>
            <Link to={`/todo-user/${id}/edit`}>
              <Button color='info' size='small'>
                Edit
              </Button>
            </Link>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default Detail;
