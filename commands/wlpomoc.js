module.exports =
{
    name: 'wlpomoc',
    description: "This is a whitelist help command!",
    execute(message, args)
    {
        if(message.member.roles.cache.has('684371222670344245') || message.member.roles.cache.has('782981759737528320'))
        {
            message.channel.send('*Dodatkowe komendy:*');
            message.channel.send('  **.wldodaj** - komenda ta służy do dodawania zdanej osobie rangi (wzór działania: .wldodaj **@NazwaGracza/ID Gracza**)');
            message.channel.send('  **.wlhex** - przekazuje hexa zdanej osoby do dodania (wzór działania: .wlhex **@NazwaGracza/ID Gracza** *HEX*)');
        }
        else
        {
            message.channel.send('Nie masz odpowiednich permisji!');
        }
    }
}