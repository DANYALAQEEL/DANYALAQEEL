const bcrypt = require("bcryptjs");

(async () => {
    const hash = await bcrypt.hash("admin@comfortliving.com", 10);
    console.log(hash);
})();