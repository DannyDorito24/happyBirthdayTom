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
    console.log(message.author.username, "sent:", message.content);
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
switch (message.content) {
        case "Who is the cutest?":
            const cute = [
                "Tomlacko is the cute",
                "hewwo_owo1 is the cute",
                "chairpop is cute",
                "Idk who's the cutest, but it isn't chair bot",
                "ESS83 is cute",
                "~Matt is cute",
                "gamer bot is cute",
                "355-83 is cute",
                "Honkey is cute",
                "uwuBot is cute uwu",
                "Philipp_DE is cute",
                "355-83 is cute",
                "cortex is cute",
                "cyktom is cute",
                "DannyDorito is cute",
                "BoySanic is cute",
                "Flamingowrangler is cute",
                "polymetric is cute",
                "RussEfarmer is cute",
                "Stinky queen is cute",
                "DutChen is cute",
                "Maze is cute",
                "all hail cheese is cute",
                "Cactooz is cute",
                "Cactus is cute",
                "EssAyyEmm is cute",
                "kronzal is cute",
                "MrFreeeMAKER is cute",
                "MrSpike is cute",
                "ToothpasteVixen is cute",
                "urielsalis is cute",
                "Tom and hewwo_owo1 are cute",
                "Tom and hewwo_owo1 are cute",
                "Tom and hewwo_owo1 are cute",
                "Tom and hewwo_owo1 are cute"
            ]
            const cute_index = Math.floor(Math.random() * (cute.length - 1) + 1);
            message.channel.send(cute[cute_index])
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
        case ".w":
            var countDownDate = new Date("June 1, 2021 00:00:00").getTime();
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
            var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            message.channel.send("The wedding between ESS83 and flamingowrangler is in " + weeks + " weeks and " + days + " days.")
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
    var countDownDate = new Date("June 1, 2021 00:00:30").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    bot.channels.cache.get('845070775207591946').send("The wedding between ESS83 and flamingowrangler is in " + weeks + " week.");
})
scheduledMessage.start()