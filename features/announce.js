module.exports = (client) => {
    client.on('message', (messageCreate) => {
      const { channel } = messageCreate
  
      if (channel.type === 'news') {
        messageCreate.crosspost()
        console.log('published news message')
      }
    })
  }