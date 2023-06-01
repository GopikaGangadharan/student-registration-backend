//import mongoose
const mongoose = require('mongoose')

//connecting string
mongoose.connect('mongodb://localhost:27017/school')

//collectiom/model
const Student = mongoose.model('Student',{
    admno:Number,
    firstname:String,
    lastname:String,
    address:String,
    emailId:String,
    mobileNo:Number,
    gender:String,
    dob:String,
    groups:String
})


//export model
module.exports={
    Student
}