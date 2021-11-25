const Discord = require("discord.js")
const { MessageButton, MessageActionRow } = require("discord-buttons")

module.exports = async (client, messageCreate, args, prefix) => {

    const embed = new Discord.MessageEmbed()
    .setTitle("Pick a role, any role")
    .setDescription("Pick a role to access the channels.")
    .setColor("NAVY")
    
    const bt1 = new MessageButton()
    .setStyle("green")
    .setLabel("Yes")
    .setID("1")

    const bt2 = new MessageButton()
    .setStyle("green")
    .setLabel("No")
    .setID("2")

    const yes = new MessageActionRow()
    .addComponent(btn1)
    .addComponent(btn2)

    messageCreate.channel.send('Hello', {
        embeds: embed, 
        component: yes
    })

}

module.exports.help = {
    name: "rr"
    aliases: []
}