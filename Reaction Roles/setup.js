const { Client, Message, MessageActionRow, MessageButton } = require('discord.js');

module.exports = (client) => { 
    name: "role"   
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    client.on(client, message, args) => {
    const row = new MessageActionRow().addComponents(
            new MessageButton(
                .setCustomId("random")
                .setLabel("primary")
                .setStyle("PRIMARY")
            )
        );
        messageCreate.channel.send({ content: "Hello World", components: [] })
    }
}