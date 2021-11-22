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

        const Messages = await channel.messageCreate.fetch();
        const Response = new MessageEmbed()
        .setColor("RANDOM")

        if(Amount > 100 || Amount <= 0) {
            Response.setDescription(`Amount cannot exceed 100, and cannot be under 1.`)
            return interaction.reply({embeds: [Response]})
     }

        if(Target) {
            let i = 0;
            const filtered = [];
            (await Messages).filter((m) => {
                if(m.author.id === Target.id && Amount > i) {
                    filtered.push(m);
                    i++;
                }
            })

            await channel.bulkDelete(filtered, true).then(messageCreate => {
                Response.setDescription(`⚔ ${messageCreate.size} purged from ${Target}.`)
                interaction.reply({embeds: [Response]})
            })
        } else {
            await channel.bulkDelete(Amount, true).then(messageCreate => {
                Response.setDescription(`⚔ ${messageCreate.size} purged from this channel.`)
                interaction.reply({embeds: [Response]})
            })
        }
    }
}