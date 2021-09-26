module.exports = (client, triggerText, replyText) => {
    client.on('message', message => {
        if(message.channel.type === 'dm' && message.content.toLowerCase() === triggerText.toLowerCase()) {
            message.author.send(replyText);
        }
        //else if(!message.content.includes('.otworz') || !message.content.includes('.zamknij') || triggerText != '.pomoc')
        //{
        //    message.author.send('Aby uzyskać pomoc musisz wpisać komendę **".pomoc"**');
        //}
    });
}