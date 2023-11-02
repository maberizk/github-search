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

  const date = new Date(user.created_at);
  const formattedDate = `Joined ${date.getDate()} ${date.toLocaleString(
    "default",
    { month: "short" }
  )} ${date.getFullYear()}`;

  return (
    <div
      className="profile"
      style={{
        backgroundColor: "var(--body-color)",
        color: "var(--color-text)",
      }}
    >
      <div className="userDetails">
        <img src={user.avatar_url} alt="User avatar" className="userImg" />
        <div>
          <h1>{user.name}</h1>
          <p>@{user.login}</p>
          <p>{user.bio ? user.bio : "This profile has no bio"}</p>
        </div>
        <p>{formattedDate}</p>
      </div>
      <div className="githubDetails">
        <div>
          <p>Repos</p>
          <p>{user.public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{user.followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{user.following}</p>
        </div>
      </div>
      <div className="links">
        <div>
          <p>{user.location}</p>
          <p>{user.blog}</p>
        </div>
        <div>
          <p>{user.twitter ? user.twiter : "Not Available"}</p>
          <p>{user.company}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;