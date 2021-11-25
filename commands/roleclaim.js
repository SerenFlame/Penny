const { MessageEmbed, ReactionUserManager } = require('discord.js')

module.exports = { 
    name: "reactionrole"
    description: "Set up a reaction role message."

    async ReactionUserManager(bot, message, args) {
        const channelID =  message.mentions.channels.first()
        
        const desc = args.slice(1).join(" ")
        if(!desc) return message.reply("Please add a valid description.")

        const emoji1 = '🎇'
        const emoji2 = '🎃'


        Let embed = new MessageEmbed()
        .setColor('WHITE')
        .setTitle("Title")
        .setDescription()

        Let msgEmbed = await channelID.send(embed)
        await msgEmbed.react(emoji1)
        await msgEmbed.react(emoji2)
    }
}