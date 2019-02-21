const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const prefix = "3!";
bot.commands = new Discord.Collection();

   bot.on("ready", async () => {
   console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
   bot.user.setActivity("Associate", {type:"LISTENING"});
  });

   bot.on('message', message => {
   // if (message.author.bot) return;
   if(message.channel.type === "dm") return;

   let prefix = '3!';
   let messageArray = message.content.split(" ");
   let cmd = messageArray[0]
   let args = messageArray.slice(1);
   let commandfile = bot.commands.get(cmd.slice(prefix.length));
   if(commandfile) commandfile.run(bot,message,args);

   msg = message.content.toLowerCase();
   mention = message.mentions.users.first();

//   Redirect to a specific channel
   let botschannel = message.guild.channels.find(channel => channel.name === 'bot-channel');
   if(!botschannel) return;

   if(msg.startsWith (prefix + "quote")) {
     number = 1;
     var random = Math.floor (Math.random() * (number)) + 1;
     switch (random) {
        case 1: botschannel.send ("I'm going to KICK YAOTOME'S ASS"); break;
      }
     }

   if(msg.startsWith (prefix + "ask")) {
        if(!args[0]) return message.reply("oof");
        let replies = ["That's right."];
        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice(0).join(" ");

        let ballembed = new Discord.RichEmbed()
         .setColor("#f0930e")
         .addField("Question:", question)
         .addField("Answer:", replies[result]);
        return message.channel.send(ballembed);
      }

   if (msg.startsWith (prefix + "scout")) {
     number = 52;
     imageNumber = Math.floor (Math.random() * (number)) + 1;
     return message.channel.send ({files: ["./images/scout/" + imageNumber + ".png"]})
    }

   if (msg.startsWith (prefix + "send")) {
     if (mention == null) { return; }
      message.delete();
      mentionMessage = message.content.slice(6);
      mention.send (mentionMessage);
    }

   if (msg.startsWith (prefix + "say")) {
      let botmessage = args.join(" ");
      message.delete().catch();
      return message.channel.send(botmessage);
    }

   if(cmd ===`${prefix}help`){
      let helpembed = new Discord.RichEmbed()
      .setDescription("Do not include < > when using commands. \nCommand phrases are not caps sensitive")
      .setColor("#f0930e")
      .addField("Commands:","**3!ask** *<question>* | Ask him anything. \n**3!send** *<@user> <message>* | Send a DM to the mentioned user\n**3!scout** | Solo Yolo \n**3!quote** | Random quote\n**3!say** *<message>* | Have the bot say anything you want")
      .addField("Basic 3!commands:", "mafia (alias:maf)")
      .addField("Command phrases:", "Good night Mitsuki, Mippi")
    return message.channel.send(helpembed);
    }

   if (msg.startsWith ("mippi")) {
     return message.channel.send("Stop that! lolol Can't you hear me laughing my ass off? lolol");
   }

   if (msg.startsWith ("hey gays")) {
    return message.channel.send("And Yaotome.");
    }

   if (msg.startsWith ("good night mitsuki")) {
    return botschannel.send("Tomorrow's gonna be fast paced too, one has to sleep properly.");
   }

   // if (msg.startsWith (prefix + "cat")) {
   //     number = 2;
   //     var random = Math.floor (Math.random() * (number)) + 1;
   //     switch (random) {
   //       case 1: botschannel.send ({files:["./images/cat.png"]}); break;
   //       case 2: botschannel.send ({files:["./images/eat_veggie.png"]}); break;
   //     }
   // }

   if(cmd === `${prefix}mafia` || cmd === `${prefix}maf`){
    return message.channel.send("maf maf");
   }

});

bot.login(process.env.token);
