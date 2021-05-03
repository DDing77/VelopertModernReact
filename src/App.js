import React, {useState, useRef} from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './App.css';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}



function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]:value
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
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);  //  spread를 이용해서 배열 추가
    // setUsers(user.concat(user)); concat을 이용해서 배열 추가

    setInputs({
      username: '',
      email: ''
    });

    nextId.current += 1;
  };

  const onRemove = (id) => {
    //user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id가 id 인 것을 제거함
    setUsers(users.filter(user => (user.id !== id)));
  };

  const onToggle = (id) => {
      setUsers(
        users.map(user =>
          user.id === id ? { ...user, active: !user.active } : user)
      );
  };
  
  const count = countActiveUsers(users);

  return (
    <Wrapper>
      인덱스 화면, 잔디 심기
      <Hello name="react" color="red" isSpecial={true}/>
      <Hello color="pink" />
      <Counter/>
      <InputSample/>
      <br/>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성사용자 수 : {count}</div>
    </Wrapper>
  )
}

export default App;
