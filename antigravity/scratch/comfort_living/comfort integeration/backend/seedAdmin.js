const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const Admin = require("./models/Admin");

async function seedAdmin() {

    try {

        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI not found in .env");
        }

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("✅ MongoDB Connected");

        const adminEmail = "admin@comfortliving.com";

        const existingAdmin = await Admin.findOne({
            email: adminEmail.toLowerCase()
        });

        if (existingAdmin) {

            console.log("⚠ Super Admin already exists.");

            process.exit(0);

        }

        const hashedPassword = await bcrypt.hash(
            "Admin@12345",
            12
        );

        await Admin.create({

            name: "Comfort Living Super Admin",

            email: adminEmail.toLowerCase(),

            password: hashedPassword,

            role: "admin",

            isActive: true,

            failedLoginAttempts: 0,

            lockUntil: null

        });

        console.log("🎉 Super Admin Created Successfully");

        process.exit(0);

    }

    catch (error) {

        console.log(error);

        process.exit(1);

    }

}

seedAdmin();