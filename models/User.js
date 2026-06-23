const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        phone: {
            type: String,
            default: null
        },

        passwordHash: {
            type: String,
            required: true
        },

        currentRoleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role",
            required: true
        },

        reportingTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null
        },

        managedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null
        },

        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

userSchema.index({ email: 1 });
userSchema.index({ currentRoleId: 1 });
userSchema.index({ reportingTo: 1 });
userSchema.index({ managedBy: 1 });

module.exports = mongoose.model("User", userSchema);