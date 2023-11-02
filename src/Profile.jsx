import React, { useState, useEffect } from "react";
import locationIcon from "./assets/icon-location.svg";
import companyIcon from "./assets/icon-company.svg";
import twittterIcon from "./assets/icon-twitter.svg";
import websiteIcon from "./assets/icon-website.svg";

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
        <div className="detailsWBio">
          <div className="detailswithDate">
            <div className="mainDetails">
              <h1 className="userName">{user.name}</h1>
              <p className="login">@{user.login}</p>
            </div>
            <p>{formattedDate}</p>
          </div>
          <p className="bio">
            {user.bio ? user.bio : "This profile has no bio"}
          </p>
        </div>
      </div>
      <div
        className="githubDetails"
        style={{
          backgroundColor: "var(--color-background)",
        }}
      >
        <div>
          <p className="title">Repos</p>
          <p className="numbers">{user.public_repos}</p>
        </div>
        <div>
          <p className="title">Followers</p>
          <p className="numbers">{user.followers}</p>
        </div>
        <div>
          <p className="title">Following</p>
          <p className="numbers">{user.following}</p>
        </div>
      </div>
      <div className="links">
        <div>
          <div className="linkContainer">
            <img src={locationIcon} alt="locationIcon" className="linkIcon" />
            <p>{user.location}</p>
          </div>
          <div className="linkContainer">
            <img src={websiteIcon} alt="blogIcon" className="linkIcon" />
            <p>{user.blog}</p>
          </div>
        </div>
        <div>
          <div className="linkContainer">
            <img src={twittterIcon} alt="twitterIcon" className="linkIcon" />
            <p>{user.twitter ? user.twiter : "Not Available"}</p>
          </div>
          <div className="linkContainer">
            <img src={companyIcon} alt="companyIcon" className="linkIcon" />
            <p>{user.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
