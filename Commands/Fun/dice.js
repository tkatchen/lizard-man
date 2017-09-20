require("../../req.js")
require('../../bot.js')
exports.run = (bot, msg, args) => {
    if(!args[0]){
        const embed = new Discord.RichEmbed()
        .setTitle("Amount of sides on the dice: 6")
        .setDescription(`:game_die: You rolled a: ${Math.floor(Math.random()*6)+1}`)
        msg.channel.send({embed})
    } else {
        if(!Number.isInteger(parseInt(args[0]))) return msg.channel.send("Nice try bud, send a real number next time.")
        const embed = new Discord.RichEmbed()
        .setTitle("Amount of sides on the dice: "+args[0])
        .setDescription(`:game_die: You rolled a: ${Math.floor(Math.random() * parseInt(args[0])) + 1}`)
        msg.channel.send({embed})
    }
}

exports.help = {
    name : "dice",
    desc : "Rolls a dice with a select amount of sides",
    usage: "dice [sides]"
}