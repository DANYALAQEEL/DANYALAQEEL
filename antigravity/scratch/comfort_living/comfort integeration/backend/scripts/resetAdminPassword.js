require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Admin = require("../models/Admin");

(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        const admin = await Admin.findOne({
            email: "admin@comfortliving.com",
        });

        if (!admin) {
            console.log("Admin not found");
            process.exit();
        }

        admin.password = await bcrypt.hash("Admin123@", 10);

        await admin.save();

        console.log("✅ Password reset successfully.");
        console.log("Email: admin@comfortliving.com");
        console.log("Password: Admin123@");

        process.exit();
    } catch (err) {
        console.log(err);
        process.exit();
    }
})();