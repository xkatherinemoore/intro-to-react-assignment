//Define a functional component that takes a user object as a prop
function UserProfile({ user }) {
  return (
    <div className="user-profile">
      {/* we use curly brackets in JSX to insert JS expressions */}
      <img src={user.imgUrl} className="user-profile-image" alt={user.name} />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
//Don't forget to export your UserProfile - this allows 
//App.jsx to import it and use it to render our User data
export default UserProfile