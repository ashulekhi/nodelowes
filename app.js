const Express = require("express")
const PORT = process.env.PORT || 5000
const Router = require("./routes")
const path = require("path")
const BodyParser = require("body-parser")


const app = Express()

app.use(Express.static(path.resolve(__dirname+"/public")))
app.use(BodyParser.json())
app.use(Router)



app.get("/", function(req,res){
    res.send()
})




app.listen(PORT, function(){
    console.log("Server is listening on..." , PORT)
    require("./db/connection")
})