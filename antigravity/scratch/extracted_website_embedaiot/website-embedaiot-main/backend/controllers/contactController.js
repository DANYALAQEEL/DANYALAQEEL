const Contact = require("../models/Contact");

// CREATE CONTACT MESSAGE
const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;  
    
    if (!name || !email || !subject || !message) {  
      return res.status(400).json({ message: "All fields required" });
    }

    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    // Send emails in the background (non-blocking) via Vercel email relay
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const relayUrl = "https://embedaiot81.vercel.app/api/send-email";
      const secret = "embedaiot_relay_secret_2026_key";

      // 1. Send notification to admin
      fetch(relayUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret,
          to: process.env.EMAIL_RECEIVER || "embedaiot@gmail.com",
          subject: `New Contact Message from ${name}: ${subject}`,
          text: `Hi, I am ${name}.\n\n${message}`,
          html: `<p>Hi, I am <strong>${name}</strong>.</p><p>${message}</p>`,
          replyTo: email
        })
      }).then(r => {
        if (!r.ok) {
          return r.json().then(data => {
            console.error("Vercel email relay failed for admin notification:", data.error || data.message);
          });
        }
      }).catch(err => console.error("Error calling Vercel email relay for admin notification:", err));

      // 2. Send confirmation to visitor
      fetch(relayUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret,
          to: email,
          subject: "We received your message — Embed AIoT",
          html: `
            <h2>Thank you for contacting Embed AIoT, ${name}!</h2>
            <p>We have received your message and will get back to you shortly.</p>
            <br/>
            <p>Your message:</p>
            <p style="color:gray">${message}</p>
            <br/>
            <p>Best regards,</p>
            <p><strong>Embed AIoT Team</strong></p>
          `
        })
      }).then(r => {
        if (!r.ok) {
          return r.json().then(data => {
            console.error("Vercel email relay failed for visitor confirmation:", data.error || data.message);
          });
        }
      }).catch(err => console.error("Error calling Vercel email relay for visitor confirmation:", err));
    } else {
      console.log("----------------------------------------");
      console.log("EMAIL CREDENTIALS NOT CONFIGURED IN DEV ENV.");
      console.log("Logged Contact Message Details:");
      console.log(`From Visitor: Name: ${name}, Email: ${email}, Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log("----------------------------------------");
    }

    // Respond immediately to the client
    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newContact,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL CONTACTS — admin only
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE CONTACT MESSAGE
const deleteContact = async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Message not found" });
    }
    res.json({ message: "Message deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createContact,
  getContacts,
  deleteContact, 
};