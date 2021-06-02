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
          name: "Loggers uwu",
          type: "PLAYING",
      }
  })});
bot.on('message', message => {
    const prefix = ".";
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if (message.content.startsWith(prefix)) {
        const input = message.content.slice(prefix.length).trim().split(' ');
        const command = input.shift();
        const args = input.join(' ');
        console.log(command);
        console.log(args);
          if (command === 'ping') {
          message.channel.send(`🏓 Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ws.ping)}ms.`)
        } else if (command === 'setAvatar') {
          bot.user.setAvatar(args)
        } else if (command === 'setStatus') {
          bot.user.setActivity(args)
        } else if (command === 'setUsername') {
          bot.user.setUsername(args)
        } else if (command === 'nick') {
          message.guild.me.setNickname(args);
        }}
if (message.content == '!!ban') {
  message.channel.send('Okay, user banned!')
}
if (message.content.startsWith('.say')) {
    const SayMessage = message.content.slice(4).trim();
    message.channel.send("**" + SayMessage + "**")
    message.channel.send("- " + `**${message.author}**`)
}
if (message.content.startsWith('.saay')) {
    const SayMessage = message.content.slice(5).trim();
    message.channel.send(SayMessage)
}
switch (message.content) {
        case "Who is the cutest?":
            message.channel.send("Loggers is the cutest, obviously.")
            break;
        case "e":
            message.channel.send('e');
            break;
        case "javascript":
        case "Javascript":
            message.channel.send('pisswater inkjet');
            break;
        case "uwu":
            message.channel.send("0w0");
            break;
        case "owo":
            message.channel.send("UwU");
            break;
        case "h":
            message.channel.send("h");
            break;
        case "beef":
            message.channel.send("beef");
            break;
        case "!log":
            const logU = bot.emojis.cache.find(emoji => emoji.name === "botasset2");
            message.channel.send(`${logU}`);
            break;
        case "!catlog":
            const catboyloggers = bot.emojis.cache.find(emoji => emoji.name === "botasset1");
            message.channel.send(`${catboyloggers}`);
            break;
        case "!N00bBot":
            const N00bBot = bot.emojis.cache.find(emoji => emoji.name === "petN00bBot");
            message.channel.send(`${N00bBot}`);
            break;
        case ".w":
            var countDownDate = new Date("June 5, 2021 00:00:00").getTime();
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
            var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            message.channel.send("Error: Tomlacko exception at line 87: weddingtime is not defined. Estimate is " + days + " days.")
            break;
        case ".v2":
            message.channel.send("Congrats to Tomlacko and hewwo. We hope that you have a long and happy marriage, and that the bond between you will never be broken. OwO")
            break;
        case ".v4":
            message.channel.send("DannyDorito will not be marrying Catboy Loggers")
            break;
        case ".v5":
            message.channel.send("Congrats to Tomlacko and Birdie! We hope your marriage is long and happy!")
            break;
        case ".v6":
            message.channel.send("The wedding between Philipp and n ob boo t is soon:tm:")
            break;
        case "Nya~":
            message.channel.send("Nya~")
            break;
        default:
            return;
}});
let scheduledMessage = new cron.CronJob('0 12 * * *', () => {
    var countDownDate = new Date("June 5, 2021 12:00:30").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    bot.channels.cache.get('845070775207591946').send("Error: Tomlacko exception at line 116: weddingtime is not defined. Estimate is " + days + " days.");
})
scheduledMessage.start()