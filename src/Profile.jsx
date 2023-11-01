import React, { useState, useEffect } from "react";

const Profile = ({ username }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [username]);

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="profile">
        <div>
          <div>
            <img src={user.avatar_url} alt="User avatar" />
            <h1>{user.name}</h1>
            <p>@{user.login}</p>
            <p>{user.created_at}</p>
          </div>
          <div>
            <p>{user.bio}</p>
          </div>
          <div>
            <p>Repos</p>
            <p>{user.public_repos}</p>
            <p>Followers</p>
            <p>{user.followers}</p>
            <p>Following</p>
            <p>{user.following}</p>
          </div>
          <div>
            <p>{user.location}</p>
            <p>{user.twitter}</p>
            <p>{user.blog}</p>
            <p>{user.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
