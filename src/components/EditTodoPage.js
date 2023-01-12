import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getDetail } from "../redux/features/detailSlice";
import Nav from "./Nav";

const EditTodoPage = () => {
  const { data, isLoading } = useSelector((state) => state.detail);
  const [updateTodoList, setUpdateTodoList] = useState({});
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const [val, setVal] = useState([]);
  const handleAdd = () => {
    const abc = [...data?.todolist, {}];
    // const abc = {...val, []};
    setVal(abc);
    console.log(val);
  };

  const composeData = (id, data) => {
    return {
      // uuid: id,
      title: data,
    };
  };

  const handleChange = (onChangeValue, i) => {
    val[i] = composeData(i + 1, onChangeValue.target.value);
    console.log(val);
  };

  useEffect(() => {
    dispatch(getDetail(id));
  }, []);

  console.log(data);

  const updateData = {
    name: data?.name,
    username: data?.username,
    email: data?.email,
    phone: data?.phone,
    todolist: data?.todolist,
  };

  const originalTodolist = data?.todolist;

  // const updateTodolist = originalTodolist.concat(val);

  console.log(updateTodoList);

  // console.log(typeof data?.todolist.title);

  console.log("Update Data Is Here \n ", updateData);

  const submitHandler = (e) => {
    e.prventDefault();
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
      {data && (
        <div className='create'>
          <h2>Edit Todo</h2>
          <form onSubmit={submitHandler}>
            {data.todolist.map((todoitem) => (
              <div key={todoitem.uuid}>
                <label>Todo Title</label>
                <input
                  value={todoitem.title}
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
            ))}
            {val.map((data, i) => {
              return (
                <div key={i}>
                  <label>Todo Title</label>
                  <input type='text' onChange={(e) => handleChange(e, i)} />

                  {/* <button onClick={(e) => handleDelete(e, i)}>x</button> */}
                </div>
              );
            })}
            <Stack direction='row' spacing={2}>
              <Button onClick={() => handleAdd()}>Add More Todo</Button>
              <Button variant='contained' size='small' type='submit'>
                Update
              </Button>
            </Stack>
          </form>
        </div>
      )}
    </>
  );
};

export default EditTodoPage;
