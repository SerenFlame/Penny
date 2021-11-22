const { CommandInteraction, MessageEmbed, Interaction, Message } = require(`discord.js`)

module.exports = {
    name: "clear",
    description: "Deletes a specified amount of messages from a channel or a target.",
    permission: "ADMINISTRATOR"
    options: [
        {
            name: "amount",
            description: "Select the amount of messages from a channel or a target",
            type: "NUMBER",
            required: true
        },
        {
            name: "target"
            description: "Select a target to clear their messages.",
            type: "USER",
            required: false
        }
    ],


    @param {CommandInteraction} interaction

    async execute(interaction) {
        const { channel, options } = interaction;

        const Amount = options.getNumber("amount");
        const Target = options.getMember("target");

        const Messages = await channel.messages.fetch();
        const Response = new MessageEmbed()
        .setColor("RANDOM")

        if(Target) {
            let i = 0;
            const filtered = [];
            (await Messages).filter((m) => {
                if(m.author.id === Target.id && Amount > i) {
                    filtered.push(m);
                    i++;
                }
            })

            await channel.bulkDelete(filtered, true).then(messages => {
                Response.setDescription(`⚔ ${messages.size} purged from ${Target}.`)
                interaction.reply({embeds: [Response]})
            })
        } else {
            await channel.bulkDelete(Amount, true).then(messages => {
                Response.setDescription(`⚔ ${messages.size} purged from this channel.`)
                interaction.reply({embeds: [Response]})
            })
        }
    }
}