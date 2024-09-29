import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { incrementAge } from '../../store/userSlice';

const User: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>User Information</h2>
      <p>First Name: {user.firstname}</p>
      <p>Last Name: {user.lastname}</p>
      <p>Age: {user.age}</p>
      <button onClick={() => dispatch(incrementAge())}>Increment Age</button>
    </div>
  );
};

export default User;