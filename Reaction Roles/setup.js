const { Client, Message, MessageActionRow, MessageButton } = require('discord.js');

module.exports = { 
    name: "role"   
    description: "Pick any role to access more of the server."
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async {client, message, args} => {
        const row = new MessageActionRow().addComponents(
            new MessageButton(
                .setCustomId("random")
                .setLabel("primary")
                .setStyle("PRIMARY")
            )
        );
        messageCreate.channel.send({content: "Hello World", components: []})
    }
}