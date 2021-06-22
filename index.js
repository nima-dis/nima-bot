const Discord = require('discord.js');
const client = new Discord.Client();
client.once('ready', () => {
	console.log('onlin shodam');
});






client.on('message', message => {
  
  if (message.content === '!salam') {
		message.dm.send('salam be hame @here.');
	}
  
  });

client.login('token');
