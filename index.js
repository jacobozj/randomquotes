const express = require('express');
const app = express();
const os = require("os")
const port = 80;

const quotes = [
    "The best way to predict the future is to create it.",
    "It's not about how much you know. It's about how much you know yourself.",
    "The only way to do great work is to love what you do.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It is never too late to be what you might have been.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "The only impossible journey is the one you never begin.",
]


app.get('/', (req, res) => {
    const number = Math.floor(Math.random() * 7);
    res.send(quotes[number]+" - Container Id: "+os.hostname())
  })
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
