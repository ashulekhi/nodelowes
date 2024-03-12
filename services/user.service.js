var UserModel = require("../models/user.model")

exports.addUser = function(data){
  return new Promise(function(resolve,reject){
    var validatedData = new UserModel(data)
    validatedData.save()
    .then(function(newuser){
        console.log("new user added into db" , newuser)
        resolve()
    }, function(error){
        reject()
        console.log("error in storing into db" , error)
    })
  })
    // this function should be just focusing on business logic 
    // i.e taking the data and storign it into db 
    // irrespective of the who is calling it 

    // store it into db

}


exports.findAllUsers = function(){
    return new Promise(function(resolve,reject){
        UserModel.find()
        .then(function(users){
            resolve(users)
        }, function(error){
            reject()
        })
    })
}