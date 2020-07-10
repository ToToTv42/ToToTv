const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    
    let mention = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.join(" ").slice(27);
    if(!message.guild.member(message.author).hasPermission("VIEW_AUDIT_LOG")) return message.reply("Vous n'avez pas les permissions")
   /* let warn = new Discord.MessageEmbed()
    .setTitle('Warn 🤬')
    .setThumbnail(message.author.avatarURL)
    .addField(`Warn de :`, `${message.author}`)
    .addField(`Warn user :`,`${mention}`)
    .addField(`Reason :`,`${reason}`)
    .setColor('#830606')
    let log_bot = message.guild.channels.find('name', "log-bot")
    if(!log_bot) return message.reply("Le salon n'hesite pas , Merci de cree un salon log-bot")
    log_bot.send(warn)*/
    message.channel.send(`${mention} has been Warned`)
}

module.exports.help = {
    name: "warn"
}

