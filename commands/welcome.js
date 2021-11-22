const { MessageEmbed } = require("discord.js");

module.exports = (client) => {
const channelID = "901508589615718451";
client.on("guildMemberAdd", (member) => {
    console.log(member);
    const channel = member.guild.channels.cache.get(channelID);

        const newEmbed = new MessageEmbed()
            .setTitle (`Welcome to ${member.guild.name}`)
            .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
            .setDescription (`Welcome to Discord Tambayan, <@${member.user.id}>. I am Penny, nice to meet you!`)
            .setFooter (`Welcome` ,member.user.displayAvatarURL({dynamic: true, size:512}))
            .setColor('RANDOM')
        
    channel.send({ embeds: [newEmbed] })
        })
    }