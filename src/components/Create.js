// import React from "react";
// import { Button, Stack } from "@mui/material";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";
// // import { DeleteOutline } from "@mui/icons-material";
// import Nav from "./Nav";

// const Create = () => {
//   const [name, setName] = useState("");
//   const [username, setUsername] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [counter, setCounter] = useState(0);
//   const [inputValues, setInputValues] = useState({});
//   const history = useHistory();

//   const arr = Array.from(Array(counter));
//   console.log(arr);

//   const composeData = (id, data) => {
//     return {
//       uuid: id,
//       title: data,
//     };
//   };

//   const data = Object.keys(inputValues).map((key, index) =>
//     composeData(key, inputValues[key])
//   );
//   console.log(data);

//   const addHandler = () => {
//     setCounter(counter + 1);
//   };

//   const handleOnChange = (e) => {
//     const abc = {};
//     abc[counter] = e.target.value;
//     setInputValues({ ...inputValues, ...abc });
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const blog = {
//       name,
//       username,
//       phone,
//       email,
//       todolist: data,
//     };

//     fetch("http://192.168.100.118:8000/todo-user", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(blog),
//     }).then(() => {
//       console.log("New Data Added");
//       history.push("/");
//     });
//   };

//   return (
//     <>
//       <Nav />
//       <div className='create'>
//         <h2>Create a new user</h2>
//         <form onSubmit={submitHandler}>
//           <label>Real Name:</label>
//           <input
//             type='text'
//             required
//             onChange={(e) => setName(e.target.value)}
//           />
//           <label>Username:</label>
//           <input
//             type='text'
//             required
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <label>Email:</label>
//           <input
//             type='email'
//             required
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <label>Phone:</label>
//           <input
//             type='phone'
//             required
//             onChange={(e) => setPhone(e.target.value)}
//           />

//           {Array.from(Array(counter)).map((c, index) => {
//             return (
//               <div key={index}>
//                 <label>Todo Title {index + 1}</label>
//                 <input onChange={handleOnChange} />
//                 {/* <button>
//                 <DeleteOutline size='small' />
//               </button> */}
//               </div>
//             );
//           })}

//           <Stack direction='row' spacing={2}>
//             <Button
//               onClick={addHandler}
//               variant='contained'
//               m={14}
//               size='small'
//             >
//               Add Todo
//             </Button>
//             <Button variant='contained' size='small' type='submit'>
//               Create
//             </Button>
//           </Stack>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Create;

import React from "react";
import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { useHistory } from "react-router-dom";
// import { DeleteOutline } from "@mui/icons-material";

import Nav from "./Nav";

const Create = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const [val, setVal] = useState([]);
  const handleAdd = () => {
    const abc = [...val, {}];
    // const abc = {...val, []};
    setVal(abc);
    console.log(val);
  };

  const composeData = (id, data) => {
    return {
      uuid: id,
      title: data,
    };
  };

  const handleChange = (onChangeValue, i) => {
    val[i] = composeData(i + 1, onChangeValue.target.value);
    console.log(val);
  };

  // const handleDelete = (e, i) => {
  //   e.preventDefault();
  //   // const deletVal = [...val];
  //   // deletVal.splice(i, 1);
  //   // setVal(deletVal);

  //   val.filter((item) => {
  //     console.log("Item uuid:", item.uuid);
  //     const id = i + 1;
  //     console.log("Id:", i);
  //     return item.uuid !== id;
  //   });
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    const blog = {
      name,
      username,
      phone,
      email,
      todolist: val,
    };

    fetch("http://192.168.100.118:8000/todo-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New Data Added");
      history.push("/");
    });
  };

  return (
    <>
      <Nav />
      <div className='create'>
        <h2>Create a new user</h2>
        <form onSubmit={submitHandler}>
          <label>Real Name:</label>
          <input
            type='text'
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label>Username:</label>
          <input
            type='text'
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email:</label>
          <input
            type='email'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Phone:</label>
          <input
            type='phone'
            required
            onChange={(e) => setPhone(e.target.value)}
          />

          {val.map((data, i) => {
            return (
              <div key={i}>
                <label>Todo Title {i + 1}</label>
                <input type='text' onChange={(e) => handleChange(e, i)} />

                {/* <button onClick={(e) => handleDelete(e, i)}>x</button> */}
              </div>
            );
          })}

          <Stack direction='row' spacing={2}>
            <Button
              onClick={() => handleAdd()}
              variant='contained'
              m={14}
              size='small'
            >
              Add Todo
            </Button>
            <Button variant='contained' size='small' type='submit'>
              Create
            </Button>
          </Stack>
        </form>
      </div>
    </>
  );
};

export default Create;
