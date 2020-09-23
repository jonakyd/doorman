import { Client } from 'discord.js';

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const DISCORD_COMMAND_PREFIX = process.env.DISCORD_COMMAND_PREFIX || '!';

const client = new Client();

client.on<'ready'>('ready', () => {
  if (client.user) {
    console.log(`Logged in as ${client.user.tag}!`);
  }
});

client.on<'message'>('message', (message) => {
  // Message filter
  if (!message.content.startsWith(DISCORD_COMMAND_PREFIX) || message.author.bot) return;

  const args = message.content.slice(DISCORD_COMMAND_PREFIX.length).trim().split(/ +/);
  const command = args.shift()!.toLowerCase();

  // Stay-shame
  if (command === 'stay-shame' && message.mentions.users.size > 0) {
    const taggedUser = message.mentions.users.first();

    if (taggedUser?.username === 'John_D') {
      message.channel.send(`${taggedUser.username} can't be a lifer because he knows it all`);
      return;
    }
    if (taggedUser) {
      message.channel.send(`${taggedUser.username} is a well known :lifer: \n https://tenor.com/uVLK.gif `);
    }
  }
});

client.login(DISCORD_TOKEN);
