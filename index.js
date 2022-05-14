const Discord = require("discord.js")
require ("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on('message', message => {
    if(message.content == "Status") {
      message.channel.send("Im online!");
    }
  });

  client.login(process.env.TOKEN);









