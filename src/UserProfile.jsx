import "./styles/UserProfile.css"

function UserProfile(user) {
    return (
        <div className="user">
            <img className="thumbnail" src={user.imgUrl} /> <br />
            Name: {user.name} <br />
            Email: {user.email} <br />
        </div>
    );
}

export default UserProfile;