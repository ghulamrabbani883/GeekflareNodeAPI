const mongoose = require('mongoose');

//Creating Schema using mongoose
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        minLength:[4,'Name should be minimum of 4 characters']
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minLength:[8,'Password should be minimum of 8 characters']
    },
    token:{
        type:String
    }
})

//Creating models
const userModel = mongoose.model('user',userSchema);
module.exports = userModel;