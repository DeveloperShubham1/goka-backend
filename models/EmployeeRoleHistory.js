const mongoose = require("mongoose");

const roleHistorySchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        roleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role",
            required: true
        },

        roleName: {
            type: String,
            required: true
        },

        assignedAt: {
            type: Date,
            default: Date.now
        },

        revokedAt: {
            type: Date,
            default: null
        },

        assignedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        reason: {
            type: String,
            default: null
        }
    },
    {
        timestamps: false
    }
);

roleHistorySchema.index({ userId: 1 });
roleHistorySchema.index({ roleId: 1 });
roleHistorySchema.index({ revokedAt: 1 });

module.exports = mongoose.model(
    "RoleHistory",
    roleHistorySchema
);