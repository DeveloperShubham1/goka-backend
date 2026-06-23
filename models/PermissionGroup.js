const mongoose = require("mongoose");

const permissionGroupSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        permissions: [
            {
                type: String,
                trim: true
            }
        ]
    },
    {
        timestamps: true
    }
);

permissionGroupSchema.index({ name: 1 });

module.exports = mongoose.model(
    "PermissionGroup",
    permissionGroupSchema
);