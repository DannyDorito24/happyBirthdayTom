const cron = require("cron")
const dotenv = require("dotenv").config(".env")
const TOKEN = process.env.TOKEN
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.login(TOKEN);
bot.once('ready', () => {
    console.log("ready")
})
bot.once('ready', () => {
    bot.user.setPresence({
      status: 'online',
      activity: {
          name: "Tom and Hewwo's wedding",
          type: "WATCHING",
      }
  })});
bot.on('message', message => {
    console.log(message.author.username, "sent:", message.content);
    if (message.author.bot) return;
    if(message.content === 'e') {
        message.channel.send('e');
    }
    if(message.content.includes('!!ban')) {
        message.channel.send('Ok, user banned')
    }
    if(message.content === 'uwu') {
        message.channel.send('0w0')
    }
    if(message.content === 'owo') {
        message.channel.send('UwU')
    }
    if(message.content === 'h') {
        message.channel.send('h')
    }
    if(message.content === 'beef') {
        message.channel.send('beef')
    }
    if(message.content === "!logg") {
        message.channel.bulkDelete(1);
        const logU = bot.emojis.cache.find(emoji => emoji.name === "logU");
        message.channel.send(`${logU}`);
     }
    if(message.content ==='!w') {
  var countDownDate = new Date("May 1, 2021 13:00:00").getTime();
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
  var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    message.channel.send("The Marriage between hewwo_owo1 and Tomcuteko is in " + weeks + " Weeks, " + days + " Days, " + hours + " Hours, and "+ minutes + " Minutes.")
    }
});
let scheduledMessage = new cron.CronJob('0 13 * * *', () => {
    var countDownDate = new Date("May 1, 2021 13:00:00").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    bot.channels.cache.get('830806015602720769').send("The Marriage between hewwo_owo1 and Tomcuteko is in " + weeks + " weeks and " + days + " Days");
})
let happyBirthday = new cron.CronJob('0 * * * *', () => {
    bot.channels.cache.get('825457540509728848').send("Happy Birthday <@263862604915539969>")
})

scheduledMessage.start()