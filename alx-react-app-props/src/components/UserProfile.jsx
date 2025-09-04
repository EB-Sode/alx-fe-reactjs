import React from 'react';
import { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
  const user = useContext(UserContext);
  const { name, age, bio } = user;

  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

// const UserProfile = (props) => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p>Age: {props.age}</p>
//       <p>Bio: {props.bio}</p>
//     </div>
//   );
// };

export default UserProfile;