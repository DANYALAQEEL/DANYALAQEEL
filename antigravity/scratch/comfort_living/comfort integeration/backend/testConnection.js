require("dotenv").config();
const mongoose = require("mongoose");

async function test() {
    try {
        console.log(process.env.MONGODB_URI);

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("✅ Connected Successfully");

        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

test();