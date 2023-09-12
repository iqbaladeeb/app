const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/school", {
  // useCreateIndex:true,
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(() => {
  console.log('connection successful');
}).catch((error) => {
  console.log(error);
})