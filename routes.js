const Express = require("express")
const UserController = require("./controllers/user.controller")

const router = Express.Router()

router.get("/allusers", UserController.allUsers)
router.post("/registeruser" , UserController.createUser)
module.exports = router

