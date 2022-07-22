import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import styled from 'styled-components';

import avatar1 from '../../images/1.png'
import avatar2 from '../../images/2.png'
import avatar3 from '../../images/3.png'
import avatar4 from '../../images/4.png'
import avatar5 from '../../images/5.png'
import avatar6 from '../../images/6.png'
import avatar7 from '../../images/7.png'
import avatar8 from '../../images/8.png'
import avatar9 from '../../images/9.png'
import avatar10 from '../../images/10.png'
import avatar11 from '../../images/11.png'
import avatar12 from '../../images/12.png'
import avatar13 from '../../images/13.png'
import avatar14 from '../../images/14.png'
import avatar15 from '../../images/15.png'


const AvatarImg = styled.img`
width: 50px;
height: 50px;
margin: 10px;
`

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState(avatar1)
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateAvatar = (e) => {
    setAvatar(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  console.log(avatar)

  return (
    <main>

      <form onSubmit={onSignUp}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <label>User Name</label>
          <input
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          <label>Avatar</label>
          <select
            type='text'
            name='email'
            onChange={updateAvatar}
            value={avatar}
          >
            <option value={avatar1}>
              1
            </option>
            <option value={avatar2}>
              2
            </option>
            <option value={avatar3}>
              3
            </option>
            <option value={avatar4}>
              4
            </option>
            <option value={avatar5}>
              5
            </option>
            <option value={avatar6}>
              6
            </option>
            <option value={avatar7}>
              7
            </option>
            <option value={avatar8}>
              8
            </option>
            <option value={avatar9}>
              9
            </option>
            <option value={avatar10}>
              10
            </option>
            <option value={avatar11}>
              11
            </option>
            <option value={avatar12}>
              12
            </option>
            <option value={avatar13}>
              13
            </option>
            <option value={avatar14}>
              14
            </option>
            <option value={avatar15}>
              15
            </option>
          </select>
          <AvatarImg src={avatar} />
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div>
          <label>Repeat Password</label>
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </main>
  );
};

export default SignUpForm;
