const express = require("express");
const cors = require("cors");
const axios = require("axios")

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
           "You're Breathtaking",
  ];


 
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  

  res.status(200).send(randomCompliment);
  
});
app.get("/api/fortunes", (req,res) => {
  const fortunes = ["Congratulations! You are on your way",
  "Diligence and modesty can raise your social status",
  "In this world of contradiction, It’s better to be merry than wise",
  "It is better to be an optimist and proven a fool than to be a pessimist and be proven right",
  "Never fear! The end of something marks the start of something new",
  ]
let rI2 = Math.floor(Math.random() * fortunes.length);
  let rFortune = fortunes[rI2];
  res.status(200).send(rFortune)
});
app.get(`/api/breathtaking/breath`, (req,res)=>{
 let Breathtaking1 = 'https://c.tenor.com/US_0asU44XUAAAAd/keanu-reeves-youre-breathtaking.gif'
  // const Keanu = [,
  // '',
  // 'https://i.dailymail.co.uk/i/pix/2015/11/23/18/2EBC866300000578-3330838-One_lucky_dog_Keanu_Reeves_took_a_break_from_the_action_for_a_wa-a-22_1448305027340.jpg']
  res.status(200).send(Breathtaking1)
});
app.get(`/api/breathtaking/2`, (req,res)=>{
  let b2 = 'https://i.kym-cdn.com/entries/icons/original/000/030/115/cover4.jpg'
  res.status(200).send(b2)
});
app.get

app.listen(4000, () => console.log("Server running on 4000"));
