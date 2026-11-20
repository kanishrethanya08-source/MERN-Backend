const mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
    confirm:{type: String, required: true},
    role:{type: String, default: "user"},
});

module.exports = Mongoose.model("User", UserSchema);