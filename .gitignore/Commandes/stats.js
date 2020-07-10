const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async(client, message , args) => {

    const membre = message.mentions.members.first() || message.member;
    
    message.channel.send({
        embed: {
            color: 0xe43333,
            title: `Statistiques de l'utilisateur **${membre.user.tag}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL() //.setThumbnail(message.author.avatarURL)
            },
            
            fields: [
                {
                    name: "> ID :",
                    value: membre.user.id

                },
                {
                    name: "> Compte crée le :",
                    value: moment.utc(membre.user.createdAt).format("LL")
                },
                {
                    name: "> Joue à :",
                    value: `${membre.user.presence.game ? `${membre.user.presence.game.name}` : "Aucun jeu"}`
                },
                {
                    name: "> A rejoind le serveur le :",
                    value: moment.utc(membre.joinedAt).format("LL")
                }
            ],
            footer: {
                text: `Information de l'utilisateur ${membre.user.username}`
            }
        }
    })

};

module.exports.help = {
    name: "stats"
}