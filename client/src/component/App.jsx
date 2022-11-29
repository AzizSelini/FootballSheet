import React, {useState,useEffect}  from'react';
import axios from "axios"
import Players from './Players.jsx';
import AddPlayer from './AddPlayer.jsx'
import './App.css';

let App = ()=> {
const [player,setPlayer]= useState([]);
useEffect (()=>{
  axios.get("http://localhost:3000/foot").then((res)=>{
    console.log(res.data);
    setPlayer(res.data);
  });
},[]);

return (<div  style={{display:'flex'}}><div>
  <h1 className='ktiba'>team 1</h1>
<Players player={player.filter((e)=>e.team===1)} />
 <AddPlayer  team={1}/>
</div>
<div className='secnddiv'>
  <h1 className='ktiba' >team  2</h1>
<Players player={player.filter((e)=>e.team===2)}   />
 <AddPlayer team={2} />
</div>
</div>);
}

export default App;
