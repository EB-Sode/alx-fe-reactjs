const UserProfile = (props) => {
  return (
    <div style={{ span: '2px', color: 'blue', border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};
''
export default UserProfile;