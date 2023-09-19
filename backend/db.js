const mongoose = require('mongoose');
const mongooseURI="mongodb://localhost:27017"

connectToMongoose = ()=>{
mongoose.connect(mongooseURI,()=>{
    console.log("Connected to Mongo Success");``
})
}

module.exports = connectToMongoose;