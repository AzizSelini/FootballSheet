import React from "react";
import axios from "axios";
import { useState } from "react";
let Players = (props) => {
  const [name,setName]=useState("")
  console.log(props);
  const update=(id,n)=>{
    axios.put(`http://localhost:3000/match/${id}`,{name:n})
    window.location.reload(false)
  }
  const del = (number) => {
    axios.delete(`http://localhost:3000/match/${number}`).then((res) => {
      console.log(props.number);
      window.location.reload(false);
    });
  };
  return (
    <div>
      
      {props.player.map((e, i) => {
        return (
          <div key = {i}>
            <ul className="ktiba">
              <li className="asemi">{e.number}</li>
              <li className="asemi">{e.name}</li>
              <li className="asemi"> {e.Post} </li>
              <button
                onClick={() => {
                  del(e.number);
                }}
              >
                delete
              </button>
              <input placeholder="name" type="text" onChange={(e)=>setName(e.target.value)} />
              <button className="hover" onClick={()=>{update(e.name,name)}}>up</button>
            </ul>
          </div>

        );
      })}
    </div>
  );
};

export default Players;
