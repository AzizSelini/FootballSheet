import axios from "axios";

import React from "react";
import { useState } from "react";

let AddPlayer = ({team}) => {
  const [Post, setPost] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const addplayer = (body) => {
    console.log("test");
    axios.post("http://localhost:3000/match/",  body).then((res) => {
      window.location.reload(false);
    });
  };
  return (
    <div >
      <input placeholder="name" type="text" onChange={(event) => setName(event.target.value)} />
      <input placeholder="number" type="text" onChange={(event) => setNumber(event.target.value)} />
      <input placeholder="post" type="text" onChange={(event) => setPost(event.target.value)} />
      {console.log(team)}
      
      
      <button onClick={() => addplayer({name:name,
    number:number,
    Post:Post,team:team
    })}>Click me</button>
    </div>
  );
};

export default AddPlayer;
