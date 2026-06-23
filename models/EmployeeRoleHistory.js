const mongoose = require("mongoose");

const employeeRoleHistorySchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        old_role_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        },
        new_role_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        },

        old_manager_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        new_manager_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        changed_by: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        reason: String,
    },
    {
        timestamps: true
    }
);

module.exports =
    mongoose.model(
        "EmployeeRoleHistory",
        employeeRoleHistorySchema
    );