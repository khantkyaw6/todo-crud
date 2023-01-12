import { Button, Stack } from "@mui/material";
import React from "react";

const Userform = () => {
  return (
    <div>
      <div className='create'>
        <h2>Create a new user</h2>
        <form>
          <label>Real Name:</label>
          <input type='text' required />
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
    </div>
  );
};

export default Userform;
