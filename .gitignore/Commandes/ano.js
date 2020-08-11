const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    message.channel.send({
        embed: {
            color: 0x10000,
            title: args.join(' '),
            author: {
                name: '💀 | Anonyme',
            }
        }
    });

    message.channel.send;
  message.delete();

}

module.exports.help = {
    name: 'ano',
}