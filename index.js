require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

//ENV constants
const BOTTOKEN = process.env.BOTTOKEN;
const GUILD_ID = process.env.GUILD_ID;

//Commands
const prefix = "!"
const ownercmd = "server-owner"

//Setup client for discord.js
client.login(BOTTOKEN);

client.on('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);
});

//General constants


client.on('message', msg => {
  if (msg.content === prefix.concat(ownercmd)) {
    msg.reply("Owner ID=".concat(msg.guild.ownerID));
  };
});