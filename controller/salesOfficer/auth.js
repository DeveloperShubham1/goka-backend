const bcrypt = require("bcryptjs");

const User = require("../../models/User");

const { generateToken } = require("../../services/jwt.service");

exports.login =
    async (req, res) => {

        try {

            const {
                email,
                password
            } = req.body;

            const user =
                await User.findOne({
                    email
                })
                    .populate("role");

            if (!user) {
                return res.status(404)
                    .json({
                        success: false,
                        message: "User not found"
                    });
            }

            const match =
                await bcrypt.compare(
                    password,
                    user.password
                );

            if (!match) {
                return res.status(400)
                    .json({
                        success: false,
                        message: "Invalid Password"
                    });
            }

            const token =
                generateToken({
                    id: user._id,
                    role: user.role.code
                });

            res.status(200).json({
                success: true,
                token
            });

        } catch (err) {
            console.log(err);
        }

    };