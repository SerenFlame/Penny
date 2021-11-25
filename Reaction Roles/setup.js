const { Client, Message, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = (client) => { 
    name: "role"   
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    async run(client, message, args) => {
    const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setCustomId("djs")
                .setLabel("primary")
                .setStyle("PRIMARY")
            new MessageButton()
                .setCustomId("dpy")
                .setLabel("secondary")
                .setStyle("SECONDARY")
                )
        const roles_embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription("Get your roles to access more of the server.")

        const m = await messageCreate.channel.send({ embeds: [roles_embed], components: [row] })

        const iFilter = i => i.user.id === message.author.id

        const collector = m.createMessageComponentCollector({ filter: iFilter, time: 60000})

        collector.on('collect', async i => {
            if(i.customId === 'djs'){
                const role = message.guild.roles.cache.get('913474970930249778')
                if(i.member.roles.cache?.has('913474970930249778')){
                    i.member.roles.remove('913474970930249778')
                    i.reply({ content: `Removed the ${role} role!`, ephemeral: true })
                } else {
                    i.member.roles.add('913474970930249778')
                    i.reply({ content: `Added the ${role} role!`, ephemeral: true })
            if(i.customId === 'dpy'){
                const role = message.guild.roles.cache.get('913475023619100752')
                if(i.member.roles.cache?.has('913475023619100752')){
                    i.member.roles.remove('913475023619100752')
                     i.reply({ content: `Removed the ${role} role!`, ephemeral: true })
                } else {
                    i.member.roles.add('913475023619100752')
                    i.reply({ content: `Added the ${role} role!`, ephemeral: true })
                }
            }
        })
    }
}