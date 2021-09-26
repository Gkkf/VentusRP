module.exports =
{
    name: 'nazwa',
    description: "This is a name command!",
    execute(message, args)
    {
        message.channel.send('Nazwa serwera to: **VentusRP**');
    }
}