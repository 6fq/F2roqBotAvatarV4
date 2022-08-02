const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('<meta http-equiv="refresh" content="0; URL=https://www.youtube.com/embed/HapMWTn2Vzk"/>'));
app.listen(port, () => 
console.log('Hello World'));
 process.on("unhandledRejection", error => {
  return console.log(error)
});
const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./util/EvobotUtil");
const i18n = require("i18n");

const client = new Client({
  disableMentions: "everyone",
  restTimeOffset: 0
});

client.login(TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

i18n.configure({
  locales: ["ar", "de", "en", "es", "fr", "it", "ko", "nl", "pl", "pt_br", "ru", "sv", "tr", "vi", "zh_cn", "zh_tw"],
  directory: join(__dirname, "locales"),
  defaultLocale: "en",
  retryInDefaultLocale: true,
  objectNotation: true,
  register: global,

  logWarnFn: function(msg) {
    console.log("warn", msg);
  },

  logErrorFn: function(msg) {
    console.log("error", msg);
  },

  missingKeyFn: function(locale, value) {
    return value;
  },

  mustacheConfig: {
    tags: ["{{", "}}"],
    disable: false
  }
});

/**
 * Client Events
 */
client.on("ready", () => {
  console.log(`${client.user.username} ready!`);
  client.user.setActivity(`up up up march.`, { type: "PLAYING" });
});
client.on("warn", (info) => console.log(info));
client.on("error", console.error);

/**
 * Import all commands
 */
const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
  if (!prefixRegex.test(message.content)) return;

  const [, matchedPrefix] = message.content.match(prefixRegex);

  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        i18n.__mf("common.cooldownMessage", { time: timeLeft.toFixed(1), name: command.name })
      );
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply(i18n.__("common.errorCommand")).catch(console.error);
  }
});

const KId = "1001907271497941162"
client.on('ready', async() => {
setInterval(() => {
client.channels.cache.find((ch) => ch.id === KId && ch.type === 'voice').join();
}, 5000);
stayVoice('GuildID', 'ChannelID');
function stayVoice(GuildID, ChannelID) {
if(!GuildID) return;
if(!ChannelID) return;
let guild = client.guilds.cache.get(GuildID);
let channel = guild.channels.cache.get(ChannelID);
if(channel.type === 'voice') {
channel.join();
}
}
});