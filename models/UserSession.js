const mongoose = require("mongoose");

const userSessionSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        deviceId: {
            type: String,
            required: true
        },

        deviceName: {
            type: String,
            default: null
        },

        deviceType: {
            type: String,
            enum: ["ANDROID", "IOS", "WEB"],
            required: true
        },

        appVersion: {
            type: String,
            default: null
        },

        ipAddress: {
            type: String,
            default: null
        },

        loginAt: {
            type: Date,
            default: Date.now
        },

        logoutAt: {
            type: Date,
            default: null
        },

        lastActiveAt: {
            type: Date,
            default: Date.now
        },

        fcmToken: {
            type: String,
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

/**
 * Indexes
 */

userSessionSchema.index({ userId: 1 });

userSessionSchema.index({ deviceId: 1 });

userSessionSchema.index({ isActive: 1 });

userSessionSchema.index({ loginAt: -1 });

module.exports = mongoose.model(
    "UserSession",
    userSessionSchema
);