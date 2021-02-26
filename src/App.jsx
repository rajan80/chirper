import React, { useState, useEffect } from "react";
import Form from "./components/Form";

const App = () => {
  let chirpArr = [
    { user: "Josh", post: "Wow!" },
    { user: "Garrett", post: "Awesome!" },
    { user: "Jake", post: "Sick!" },
  ];

  const [user, setuser] = useState("");
  const [post, setpost] = useState("");
  const [chirps, setchirps] = useState([
    { user: "Josh", post: "Wow!" },
    { user: "Garrett", post: "Awesome!" },
    { user: "Jake", post: "Sick!" },
  ]);

  const handleinputonChange = (e) => {
    setpost(e.target.value);
  };

  const handleClick = (e) => {
    let newchirp = {
      user: user,
      post: post,
    };
    setchirps([...chirps, newchirp]);

    console.log(chirps);
  };
  let btn = { color: "blue" };

  return (
    <div>
      <input value={user} onChange={(e) => setuser(e.target.value)}></input>

      <p>'You are typing in as: {user} '</p>

      <input onChange={(e) => handleinputonChange(e)}></input>
      <p>'You are typing in as: {post} '</p>

      <button style={btn} onClick={() => handleClick()}>
        Chirp!
      </button>

      {chirps.map((chirp) => {
        return (
          <div>
            <p>{chirp.user}</p>
            <p>{chirp.post}</p>
          </div>
        );
      })}
    </div>
  );
};
export default App;
