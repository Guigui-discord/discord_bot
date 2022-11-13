const Discord = require("discord.js")
const Command = require("../../Structure/Command")

module.exports = new Command({

    name: "twitch",
    description: "Twitch de Batrosteee",
    utilisation: "",
    alias: ["tw", "twitch"],
    permission: "",
    category: "3) Utile",
    cooldown: 5,

    async run(bot, message, args, db) {
     
    
        message.reply("**Voici la Chaîne de** Baptiste \n\n https://twitch.tv/batrosteee")
    }})