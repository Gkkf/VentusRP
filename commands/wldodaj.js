const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'wldodaj',
    execute(client, message, args){

        message.delete();
        if (message.channel.id === '784360686893531136') 
        {

        if (!message.member.hasPermission('MENTION_EVERYONE')) return message.channel.send(`Nie masz odpowiednich permisji`).then(m => m.delete({ timeout: 5000 }));

        if (!args[0]) return message.channel.send("Niepoprawne użycie. Powinno być: `<nick użytkownika || id użytkownika>").then(m => m.delete({ timeout: 5000 }))

             const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
             const roleName = '684338372873027584';//message.guild.roles.cache.find(r => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

             const alreadyHasRole = member._roles.includes('684338372873027584');

             if (alreadyHasRole) return message.channel.send('Osoba już posiada tą rangę!').then(m => m.delete({ timeout: 5000 }));

             const embed = new MessageEmbed()
                 .setTitle(`Nazwa roli: 🔹 Mieszkaniec`)
                 .setDescription(`${message.author} nadał rangę **Mieszkańca** dla ${member.user}`)
                 .setColor('EC0D1A')
                 .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                 .setFooter(new Date().toLocaleString())

            return member.roles.add('684338372873027584').then(member.roles.remove('782984827870904330')).then(() => message.channel.send(embed));
        }
    }
}