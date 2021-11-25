const { MessageEmbed, ReactionUserManager } = require('discord.js')

module.exports = { 
    name: "reactionrole"
    description: "Set up a reaction role message."

    async ReactionUserManager(bot, message, args) {
        const channelID =  '870135591835168778'

        const desc = args.slice(1).join(" ")
        
        Let embed = new MessageEmbed()
        .setColor('WHITE')
        .setTitle("Title")
        .setDescription()

        message.channel.send(embed)

    }
}