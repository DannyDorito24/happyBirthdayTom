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
    const prefix = "!";
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if (message.author.bot) return;
    switch (message.content) {
        case "Who is the cutest?":
            const cute = [
                "Tomlacko is the cute",
                "hewwo_owo1 is the cute",
                "chairpop is cute",
                "Idk who's the cutest, but it isn't chair bot",
                "ESS83 is cute",
                "Matt is cute",
                "sigma bot is cute",
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
            message.channel.bulkDelete(1);
            const logU = bot.emojis.cache.find(emoji => emoji.name === "logU");
            message.channel.send(`${logU}`);
            break;
        case "!w":
            var countDownDate = new Date("May 1, 2021 13:00:00").getTime();
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
            var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            message.channel.send("The Marriage between hewwo_owo1 and Tomcuteko is in " + weeks + " Weeks, " + days + " Days, " + hours + " Hours, and "+ minutes + " Minutes.")
            break;
        default:
            return;
}
if (message.content.startsWith('!say')) {
    const SayMessage = message.content.slice(4).trim();
    message.channel.send("**" + SayMessage + "**")
    message.channel.send("- " + `**${message.author}**`)
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