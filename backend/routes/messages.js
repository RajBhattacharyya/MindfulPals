// const express = require("express");
// const fetchuser = require("../middleware/fetchuser");
// const router = express.Router();

// // Example messages array (replace with a database in a real-world scenario)
// let messages = [
//   { id: 1, text: 'Hello' },
//   { id: 2, text: 'How are you?' },
// ];

// router.get("/messages", (req, res) => {
//     res.json(messages);
//   });

// // Add a new message
// router.post("/messages", (req, res) => {
//   const { text } = req.body;
//   const newMessage = {
//     id: messages.length + 1,
//     text,
//   };
//   messages.push(newMessage);
//   res.json(newMessage);
// });

// module.exports = router;
