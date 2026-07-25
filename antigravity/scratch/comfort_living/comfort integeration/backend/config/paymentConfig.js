module.exports = {

    easypaisa: {

        merchantId: process.env.EASYPAISA_MERCHANT_ID,

        username: process.env.EASYPAISA_USERNAME,

        password: process.env.EASYPAISA_PASSWORD,

        storeId: process.env.EASYPAISA_STORE_ID,

        hashKey: process.env.EASYPAISA_HASH_KEY,

    },

    jazzcash: {

        merchantId: process.env.JAZZ_MERCHANT_ID,

        password: process.env.JAZZ_PASSWORD,

        integritySalt: process.env.JAZZ_SALT,

    }

};