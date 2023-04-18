const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["Guilds", "GuildMembers", "GuildMessages"] }
)

client.login("process.env.token")