exports.allUsers = function (req,res){
   res.send({
    data:["Ashu" , "Lekhi"]
   })
}

exports.createUser = function(req,res){
    console.log("req body" , req.body)

    res.send({
        
    })
    // here we will add user 
    // and send the response back
}