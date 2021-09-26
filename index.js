const { settings } = require('cluster');
const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE", "USER", "REACTION"]});

const prefix = '.';

//--------------------------------------------------//

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles)
{
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

//--------------------------------------------------//

const privateMessage = require('./commands/pm')

client.once('ready', () => 
{
    console.log('VentusRP BOT is now online!');

    client.user.setActivity('.pomoc - w prywatnej wiadomości, aby uzystkać pomoc!');

    //--------------------------------------------------//

    privateMessage(client, '.pomoc', '**Oto dostępne komendy:** ```.otworz - otwiera nowy ticket``` ```.zamknij - zamyka obecny ticket```');
});




client.on('message', async message =>
{

    if(message.content.includes('wyspa'))
    {
        message.channel.send('Miałeś na myśli WyspaRP?');
    }
    
    if(message.content.includes('wyspie'))
    {
        message.channel.send('Okej');
    }
    if(message.content.includes('Gkkf'))
    {
        message.channel.send('Co chcesz od szefa kasztanie?');
    }

    //--------------------------------------------------//

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'nazwa')
    {
        client.commands.get('nazwa').execute(message, args);
    }
    else if(command == 'wlpomoc')
    {
        client.commands.get('wlpomoc').execute(message, args);
    }
    else if(command == 'wldodaj')
    {
        client.commands.get('wldodaj').execute(client, message, args);
    }
    else if(command == 'wlhex')
    {
        client.commands.get('wlhex').execute(client, message, args);
    }


    if(message.channel.type != 'dm') return;
    else if(message.content.toLowerCase() === '.otworz')
    {
        message.author.send('jeszcze nie działa');
    }

    if(message.channel.type != 'dm') return;
    else if(message.content.toLowerCase() === '.zamknij')
    {
        message.author.send('tym bardziej...');
    }







    //--------------------------------------------------//

//    else if(command == 'regulaminadministracja')
//    {
//        client.commands.get('regulaminadministracja').execute(message, args, Discord);
//    }
    
});




















client.login(process.env.token);