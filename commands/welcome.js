const { MessageEmbed } = require("discord.js");

module.exports = (client) => {
const channelID = "901508589615718451";
client.on("guildMemberAdd", (member) => {
    console.log(member);
    const channel = member.guild.channels.cache.get(channelID);

        const newEmbed = new MessageEmbed()
            .setTitle (`You finally arrived at ${member.guild.name}`)
            .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
            .setDescription (`I am Penny and welcome to the server, <@${member.user.id}>.`)
            .setFooter (`Have fun!` ,member.user.displayAvatarURL({dynamic: true, size:512}))
            .setColor('RANDOM')
        
    channel.send({ embeds: [newEmbed] })
        })
    }