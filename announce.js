const { MessageEmbed } = require('Discord.js')
module.exports = {
    name: "announce"
    description: "Get the bot to say what you want in a specific channel"
    usage "<channel id> <msg>"
    async(bot,message,args) => {
        let rChannel =  message.guild.channels.cache.get.(args[0])
        if(!rChannel)return message.channel.send(`You did not specify where to annouce!`)
        console.log(rChannel)
        let MSG = message.content.split(`${bot.prefix}announce ${rChannel.id} `).join("")
        if(!MSG)return message.channel.send(`You did not specify what you announcement contains.`)
        const em = new MessageEmbed()
        .setTitle(`New Announcement`)
        .setDescription(`${MSG}`)
        .setColor('BLUE')
        rChannel.send(em)
        message.delete()
    }
}   