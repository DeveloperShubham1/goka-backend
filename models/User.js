const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        employee_code: {
            type: String,
            unique: true
        },

        name: String,

        email: {
            type: String,
            unique: true
        },

        phone: String,

        password: String,

        role: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        },

        manager_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null
        },

        device_id: {
            type: String,
            default: null
        },

        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "User",
    userSchema
);