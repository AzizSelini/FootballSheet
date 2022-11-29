const mongoose =require('mongoose')



const footballSchema = mongoose.Schema({
  number: {
    type: Number
   
  },
  name: {
    type: String,
   
  },
 
  Post: {
    type: String,
  },
  team:Number
});



module.exports =Football = mongoose.model("football", footballSchema);
