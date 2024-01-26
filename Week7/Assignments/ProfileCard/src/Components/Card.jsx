import React, { useState } from "react";
import { IoLocation } from "react-icons/io5";
import "./Card.css";

const Card = () => {
  const [data, setdata] = useState(null);
  const [input, setinput] = useState("");
  const [searched, setSearched] = useState(false);

  const fetchData = () => {
    fetch(`https://api.github.com/users/${input}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setdata(data);
      })
      .catch((error) => {
        setdata(null);
      })
      .finally(() => {
        setSearched(true);
      });
  };

  return (
    <div className="card-container">
      <h1>GitProfile Insight</h1>
      <input
        className="input-style"
        placeholder="Enter the User ID"
        onChange={(e) => {
          setinput(e.target.value);
        }}
      />
      <button className="button-style" onClick={fetchData}>
        Search
      </button>
      {searched && !data ? (
        <p>User does not exist.</p>
      ) : data ? (
        <div className="card-content">
          <div className="image-container">
            <img src={data.avatar_url} alt="" className="card-image" />
          </div>
          <h1>{data.login}</h1>
          <div className="user-info-text">
            <p>{data.bio}</p>
            <div>
              <p>Repos : {data.public_repos}</p>
              <p>Following: {data.following}</p>
              <p>Followers: {data.followers}</p>
              <p>
                {data.location ? (
                  <div>
                    <p>
                      {" "}
                      <IoLocation /> {data.location}
                    </p>
                  </div>
                ) : (
                  <p>Location not available</p>
                )}
              </p>
            </div>
          </div>
          <a href={data.html_url} className="button-link">
            <button className="button-style">Click Here to View Profile</button>
          </a>
        </div>
      ) : null}
      <p>
        Built by <a href="https://www.vivektenali.com">Vivek</a>
      </p>
    </div>
  );
};

export default Card;
