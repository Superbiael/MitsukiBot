const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   if(!args[0]) return message.reply("oof");
   let replies = [
     "That's right.",
   ];

   let result = Math.floor((Math.random() * replies.length));
   let question = args.slice(0).join(" ");

   let ballembed = new Discord.RichEmbed()
    .setColor("#f0930e")
    .addField("Question:", question)
    .addField("Answer:", replies[result]);

   let botschannel = message.guild.channels.find(`name`, "bot-channel");
   if(!botschannel) return;
   return message.channel.send(ballembed);
 }

module.exports.help = {
  name:"mitsuki"
  }
