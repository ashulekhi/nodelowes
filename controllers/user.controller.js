var UserService = require("../services/user.service")
exports.allUsers = async function (req,res){
  try {
    var result = await UserService.findAllUsers()
    res.send({
        data:result
    })
  }
  catch(e){
    res.status(500).send()
    
  }
}

exports.createUser = async function(req,res){
    console.log("req body" , req.body)
    try{
        var response =  await  UserService.addUser(req.body)
        res.send({
            message:"user Created"
        })  
    }
    catch(e){
       res.status(500).send()
    }
  
    // here we will add user 
    // and send the response back
}