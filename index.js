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

const welcome = require('./commands/welcome'); 

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
                        "He didn't reply and immediately she thought: they've got him and now they're coming for me",
                        "Will you ever give them up?",
                        "Will you ever let them down?",
                        "Will you ever run around and desert them?",
                        "Will you ever say goodbye?",
                        "You're an immortal writer, and you usually have to change your pen name and writing style just a bit to avoid suspicion. At a book signing, a fan brings up a book for you to sign, except the book is a piece you wrote 1,000 years ago in a completely different name.",
                        "Humans have discovered the key to immortality. With age comes great experience and even greater strength. As a side effect, the older someone is the darker their blood becomes. It is your 21st birthday and you get a cut for the first time in your life only to discover your blood is black as oil.",
                        "You die, and wake up in a chair with a screen in front of you. It reads 'Congratulations on being the 100 billionth person to die! As a reward, you get to customize your body, choose your skills, traits, etc for your next reincarnation! Once you finish, click REINCARNATE'.",
                        "Every baby is taken away by the government and rerturned when they are ten years old. They never remembered what happened in those years, but they always recognize their parents. You, however, remember everything and those aren't your parents.",
                        "The wrinkled fingertips are just the beginning of the transformation. We just leave the water too early.",
                        "After gaining the ability to see everyone's red strings of fate tying soul mates to each other, you realize your string extends past the sky.",
                        "One night you awake to find yourself in a mysterious forest. After wandering for what seems like an eternity, you reach an ancient oak at the heart. Upon its bark are carvings of the name of an old, forgotten god. The name that's inscribed is yours.",
                        "You passed away today. But instead of Hell or Heaven, you find yourself in a small room with a five year old girl who casually invites you over to her tea party. Only then does it dawn on you that you're now her new imaginary friend.",
                        "I'd live and die for moments that we stole on begged and borrowed time. So tell me to run or date sit and watch what we'll become and drink my husband's wine.",
                        "I have a strange feeling with regard to you. As if I had a string somewhere under my left ribs, tightly knotted to a similar string in you. And if you were to leave I'm afraid that cord of communion would snap. And I have a notion that I'd take to bleeding inwardly. As for you, you'd forget me.",
                        "I have a strange feeling with regard to you. As if I had a string somewhere under my left ribs, tightly knotted to a similar string in you. And if you were to leave I'm afraid that cord of communion would snap. And I have a notion that I'd take to bleeding inwardly. As for you, you'd forget me.",
                        "If I didn't know better, I'd think you were still around. I know better, but I still feel you all around.",
                        "I'm a soldier who's returning half her weight.",
                        "Emotions that linger on familiar items",
                        "Worth",
                        "The texture of shame",
                        "The colors of an adventure",
                        "Why mushrooms are so darn cool",
                        "You have been kidnapped by a cult, preparing to sacrifice you to their god. Problems? You're immortal, the god they worship is a close friend of yours and the entire cult was a result of a prank you forgot you pulled centuries ago.",
                ];
                    var rnd = Math.floor(Math.random()*messages.length);
    
                    messageCreate.channel.send(messages[rnd]);
                }
    }
    
    });

client.login(process.env.token);