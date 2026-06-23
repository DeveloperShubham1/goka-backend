const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
    {
        name: String,

        code: String,

        hierarchy_level: Number,

        permission_group: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PermissionGroup"
        },

        can_login_web: Boolean,

        can_login_app: Boolean,

        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

module.exports =
    mongoose.model(
        "Role",
        roleSchema
    );