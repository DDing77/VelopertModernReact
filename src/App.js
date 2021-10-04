import React, { useState, useRef } from 'react';
import Counter from './Counter';
import CreateUser from './CreateUser';
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target)
    setInputs({
      ...inputs,
      [name]: value
    });
  };


  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: true
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: true
    }
  ]);

  const nextId = useRef(users.length + 1);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]);

    setInputs({
      username: '',
      email: ''
    });

    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id));
    nextId.current -= 1;
  };

  const onToggle = (id) => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active} : user
      )
    );
  };

  console.log(nextId.current);
  console.log(users.length);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </>
  );
}

export default App;
