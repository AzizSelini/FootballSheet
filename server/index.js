const express = require("express");
const mongoose = require("mongoose");
let cors = require('cors');
const app = express();
const PORT = 3000;
const Football = require("./model/Football");
const bodyparser = require("body-parser");
const path = require('path');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const DB = "mongodb+srv://root:root@cluster0.y0muvyy.mongodb.net/football";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected..");
  });
app.get("/Goal", (req, res) => {
  res.send("Goaaaal");
});
app.get("/foot", async (req, res) => {
  try {
    await Football.find({}).then((result) => {
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
});
app.post("/match/", async (req, res) => {
  try {
  
    
    Football.create(req.body)
    res.send("hello my new player");
  } catch (err) {
    console.log(err);
  }
});
app.delete("/match/:number", async (req, res) => {
  try {
    await Football.findOneAndDelete({ number: req.params.number });
    res.send("player is deleted");
  } catch (err) {
    console.log(err);
  }
}); 

app.put('/match/:name',async(req,res)=>{
    try{
        await Football.findOneAndUpdate({
            name:req.params.name
        },req.body)
        res.send("the name is updated")
    }
    catch(err){
        res.send(err)
    }
})

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}...`);
});
