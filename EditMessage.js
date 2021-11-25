const { Message } = require("discord.js")

const addReactions = (message, reactions) => {
    message.react(reactions[0])
    reactions.shift()
    if(reactions.length > 0)
        setTimeout(() => addReactions(message, reactions), 500)
}

module.exports = async (client, id, text, reactions = []) => {
    const channel = await.client.channels.fetch(id)

    channel.messages.fetch().then((message) => {
        if(Message.size === 0) {
            channel.send(text).then((message) => {
                addReactions(messageCreate, reactions)
            })
        } else {
            for(const message of messages) {
                message[1].edit(text)
                addReactions(message[1], reactions)
            }
        }
    })
}