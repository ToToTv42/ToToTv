const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    let help = new Discord.MessageEmbed() 
        .setTitle('Help')
        .setDescription('Liste Des Commandes')
        .addField(' &ping', 'Affiche votre Ping')
        .addField(' &kick (user) ','kick un membre du serveur')
        .addField(' &warn (user) ', 'warn une personne')
        .addField(' &cachelettre (mot)','cache le texte que vous avez mis ')
        .addField(' &casino', 'commande de jeu sympatique a faire')
        .addField(' &clear (nombre)','efface les message celon le nombre ')
        .addField('pf (pile ou face)', 'petit a faire pile ou face ')
        .addField(' &stats (mention)', 'donne les statistique de la personne mentionne')
        .setFooter('..')
        .setColor('#830606')
        message.channel.send(help)
}


module.exports.help = {
    name: "help"
}