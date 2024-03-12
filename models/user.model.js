const { Mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  email: {type:String,required:true, unique:true},
  password: {type:String,required:true}
});

const UserModel = Mongoose.model("users", UserSchema)

module.exports  =UserModel