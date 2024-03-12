var UserModel = require("../models")

exports.addUser = function(data){

    // this function should be just focusing on business logic 
    // i.e taking the data and storign it into db 
    // irrespective of the who is calling it 

    // store it into db
    var validatedData = new UserModel(data)
    validatedData.save()
    .then(function(newuser){
        console.log("new user added into db" , newuser)
    }, function(error){
        console.log("error in storing into db" , error)
    })

}