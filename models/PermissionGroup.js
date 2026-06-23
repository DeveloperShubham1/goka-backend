const mongoose = require("mongoose");

const schema =
new mongoose.Schema(
{
    name:String,

    permissions:[String]
},
{
    timestamps:true
}
);

module.exports =
mongoose.model(
    "PermissionGroup",
    schema
);