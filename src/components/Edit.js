import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../redux/features/detailSlice";
import { useParams, useHistory, Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import Nav from "./Nav";

const Edit = () => {
  const { data, isLoading } = useSelector((state) => state.detail);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
  }, []);

  console.log(data);

  useEffect(() => {
    setName(data.name);
    setEmail(data.email);
    setPhone(data.phone);
    setUsername(data.username);
  }, []);

  console.log(name, username, phone, email);

  const updateData = {
    name,
    username,
    email,
    phone,
    todolist: data?.todolist,
  };
  const editUserInfoHandler = (e) => {
    e.preventDefault();
    fetch(`http://192.168.100.118:8000/todo-user/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    }).then(() => {
      console.log("Data Updated");
      history.push(`/todo-user/${data.id}`);
    });
  };

  return (
    <>
      <Nav />
      {/* {isLoading && <h2>Loading Data...</h2>} */}
      {data && (
        <div className='create'>
          <h2>Edit user</h2>
          <form onSubmit={editUserInfoHandler}>
            <label>Real Name:</label>
            <input
              type='text'
              required
              value={name}
              // placeholder={data.name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Username:</label>
            <input
              type='text'
              required
              value={username}
              // placeholder={data.username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Email:</label>
            <input
              type='email'
              value={email}
              required
              // placeholder={data.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone:</label>
            <input
              type='phone'
              required
              value={phone}
              // placeholder={data.phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            {/* {data.todolist.map((item) => (
              <div key={item.uuid}>
                <label>Todo Title {item.uuid}</label>
                <input placeholder={item.title} />
              </div>
            ))} */}

            <Stack direction='row' spacing={2}>
              <Button variant='contained' fullWidth size='small' type='submit'>
                Update
              </Button>
            </Stack>
          </form>
        </div>
      )}
    </>
  );
};

export default Edit;

// const [updateName, setUpdateName] = useState("");
// const [updateUsername, setUpdateUsername] = useState("");
// const [updateEmail, setUpdateEmail] = useState("");
// const [updatePhone, setUpdatePhone] = useState("");

// const updateData = {
//   name: updateName,
//   username: updateUsername,
//   email: updateEmail,
//   phone: updatePhone,
//   todolist: data?.todolist,
// };
// console.log(updateData);

// const updateData = {
//   name,
//   username,
//   email,
//   phone,
//   todolist: data?.todolist,
// };
// console.log(updateData);

// const preData = {
//   name: data?.name,
//   username: data?.username,
//   email: data?.email,
//   phone: data?.phone,
// };
