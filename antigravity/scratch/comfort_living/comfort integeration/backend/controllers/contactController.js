const ContactMessage = require("../models/ContactMessage");

/*
====================================
SEND MESSAGE
====================================
*/

const createMessage = async (req, res) => {

  try {

    const message = await ContactMessage.create(req.body);

    res.status(201).json({

      success: true,

      message: "Message sent successfully",

      data: message

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

/*
====================================
GET ALL MESSAGES
====================================
*/

const getMessages = async (req, res) => {

  try {

    const messages = await ContactMessage.find()

      .sort({
        createdAt: -1
      });

    res.json({

      success: true,

      count: messages.length,

      messages

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

module.exports = {

  createMessage,

  getMessages

};