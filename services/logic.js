//mport collection/model
const db = require('./db')

//define logic to resolve regi req
const register = (admno,firstname,lastname,address,emailId,mobileNo,gender,dob,groups)=>{
    //check fname existing  in usercollection of bank db
    return db.Student.findOne({
        admno
    }).then((result)=>{
        console.log(result);

        //fname is existing ,send response useralredy exist
        if(result){
            return{
                statusCode:401,
                message:"User Already Exist.."
            }
        }
        //fname not existing
        else{
     const newStudent = new db.Student({
        admno,
        firstname,
        lastname,
        address,
        emailId,
        mobileNo,
        gender,
        dob,
        groups
     })

     //to save data in mdb
     newStudent.save()
     return{
        statusCode:200,
        message:"Register successfully..."
     }
        }
    })
}

const getData= ()=>{
return  db.Student.find({
       
}).then((result)=>{
return  result
})
}


//export
module.exports={
    register,
    getData
}