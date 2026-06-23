const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },

        level: {
            type: Number,
            default: null
        },

        permissionGroupId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PermissionGroup",
            required: true
        },

        can_login_web: {
            type: Boolean,
            default: false
        },

        can_login_app: {
            type: Boolean,
            default: false
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

roleSchema.index({ name: 1 });
roleSchema.index({ level: 1 });

module.exports = mongoose.model("Role", roleSchema);