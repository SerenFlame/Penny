const EditMessage = require('discord.js')

module.exports = (client) => {
    EditMessage(client, '870135591835168778', new MessageEmbed()
    .setTitle('Reaction Roles')
    .setColor('RANDOM')
    .setDescription('Claim roles using reactions.')
    .setFooter('Reaction Roles')
    , ['<:HI:913463532576731207>', '<:LOVESTRUCK:913463533990182912>', '<:PISSED:913463533923090473>', '<:POGIPOINTS:913463533923086376>', '<:SAD:913463533272969216>', '<:STRESSED:913463533067452436>' 
])
}