require('../../req.js')()
require('../../bot.js')
exports.run = async (bot, msg, args) => {
    if(!args[0]){
        const embed = new Discord.RichEmbed()
        .setTitle("Commands")
        .setColor(0x055e18)
        .addField("Moderation", moderation.join("\n") + ".")
        .addField("Fun", fun.join("\n"))
        .addField("Useful", useful.join("\n"))
        msg.channel.send({embed})
    } else {
        if(bot.commands.has(args[0])) {
            command = bot.commands.get(args[0]);
            const embed = new Discord.RichEmbed()
            .setColor(0x055e18)
            .setTitle(command.help.name)
            .setDescription(command.help.desc)
            .addField("Usage", "`"+gexist[0].gstuff.prefix+""+command.help.usage+"`")
            msg.channel.send({embed})
        } else {
            msg.channel.send("Please send a proper command, use `"+gexist[0].gstuff.prefix+"help` for a list of commands")
        }
    }
}

exports.help = {
    name: "help",
    desc: "Gives you a list of the helps or will further explain a command",
    usage: "help [command]"
}