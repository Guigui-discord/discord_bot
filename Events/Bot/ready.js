const Discord = require("discord.js")
const Event = require("../../Structure/Event");
const SlashCommand = require("../../Structure/SlashCommand")

module.exports = new Event("ready", async bot => {

    await SlashCommand(bot);

    let statuses = [
        "Gugiui <3",
        "Baptiste <3",
        "twitch.tv/batrosteee"
    ];
    setInterval(function() {
       let status = statuses[Math.floor(Math.random() * statuses.length)];
       bot.user.setActivity(status, {
           type: "STREAMING",
           url: "https://www.twitch.tv/batrosteee",
       });
   }, 5000);


    console.log(`${bot.user.username} : En ligne sur ${bot.guilds.cache.size} serveur(s) !`)
})