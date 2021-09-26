const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'wlhex',
    execute(client, message, args){

        message.delete();
        if (message.channel.id === '784429981546840124') 
        {

        if (!message.member.hasPermission('MENTION_EVERYONE')) return message.channel.send(`Nie masz odpowiednich permisji`).then(m => m.delete({ timeout: 5000 }));

        if (!args[0] || !args[1]) return message.channel.send("Niepoprawne użycie. Powinno być: `<nick użytkownika || id użytkownika> <HEX>").then(m => m.delete({ timeout: 5000 }))


             const player = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
             const hex = message.guild.members.cache.get(args[1]);

             const embed = new MessageEmbed()
                 .setTitle(`Osoba zdała pozytywnie!`)
                 .setDescription(`Należy dodać WL dla **Mieszkańca**: ${player.user} HEX: ${hex}`)
                 .setColor('EC0D1A')
                 .setThumbnail(player.user.displayAvatarURL({ dynamic: true }))
                 .setFooter(new Date().toLocaleString())

            return (() => client.channels.get('784428956966453308').message.channel.send(embed));

        }
    }
}