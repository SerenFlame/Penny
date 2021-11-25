const Discord = require('discord.js');
const client = new Discord.Client({
    
    allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: true,

    },
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_PRESENCES",
        "GUILD_MEMBERS",
        "GUILD_MESSAGE_REACTIONS",
    ],
})

const prefix = "!";
const welcome = require('./commands/welcome'); 
const setup = require('./Reaction Roles/setup');
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.on('ready', () =>{
    console.log('Bot online')

    welcome(client);
})

client.on("messageCreate", async messageCreate => {
    if(messageCreate.content === "hello"){
        messageCreate.channel.send("Hi! :heart:")
    }
})

client.on("messageCreate", async messageCreate => {
    if(messageCreate.content === "Hello"){
        messageCreate.channel.send("Hi! :heart:")
    }
})

client.on("messageCreate", async messageCreate => {
    if(messageCreate.content === "hi"){
        messageCreate.channel.send("Hello! :wave:")
    }
})

client.on("messageCreate", async messageCreate => {
    if(messageCreate.content === "Hi"){
        messageCreate.channel.send("Hello! :wave:")
    }
})

client.on('messageCreate', messageCreate => {

    if(messageCreate.content === '!prompt') {
              rndmessage(messageCreate);
    
                function rndmessage(messageCreate) {
                    var messages = [ "Head high, she swept out of the room. A second later, head even higher, she swept back in, snatched up the money and was gone again.",
                        "An unattractive witch witnesses a mysterious disappearance. Events are concluded by a bushfire.",
                        "An animal trainer has limited time to derail the runaway train.",
                        "A cynical boy scout has limited time to organise a musical.",
                        "A misunderstood petroleum engineer is the victim of a brutal beating. The story is worsened by a reprieve.",
                        "A terminally ill school teacher has a day to use salvage to build a rundown orphanage. The story is worsened by a long lost relative.",
                        "A Sunday school teacher has a day to claim their birthright. The circumstances are shattered by a rescue.",
                        "A drunk boy scout discovers a murder. The story is commenced by serious illness.",
                        "A witch creates incriminating evidence.",
                        "When a prisoner escapes, a circus of misfits go on to better things. The situation is reduced to chaos by a robbery.",
                        "An alligator wrestler has limited time to rescue hostages.",
                        "When they make a pact with God, three sisters go on to better things. The circumstances are destabilised by a long lost relative.",
                        "A farmer has a day to find the evidence. The situation is made critical by a secret investigator.",
                        "An archivist has a day to rescue orphans. The situation is worsened by an invasion.",
                        "A suspended nun rejects a sadistic boxer.",
                        "An untidy cop and a sea captain combine forces - after they are sent a terrifying message - to regain their reputation.",
                        "A truck driver witnesses a murder. Events are reduced to chaos by a reprieve.",
                        "She'd got him wrong, but that was her loss",
                        "After five years, he just happened to be walking down her street?",
                        "He wanted to tell him how much he loved him but",
                        "He didn't reply and immediately she thought: they've got him and now they're coming for me"
                ];
                    var rnd = Math.floor(Math.random()*messages.length);
    
                    messageCreate.channel.send(messages[rnd]);
                }
    }
    
    });

    module.exports.run = async function (client, message, args, config, gdb, prefix, permissionLevel, db) = {
    client.on('message', message => {
 
        if (!message.content.startsWith(prefix) || message.author.bot) return;
     
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        if (command === 'reactionrole') {
            client.commands.get('reactionrole').execute(message, args, Discord, client);
        } 
      
    })
}

client.login(process.env.token);