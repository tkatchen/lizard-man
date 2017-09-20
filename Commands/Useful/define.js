require("../../req.js")
exports.run = (bot, msg, args) => {
    if(args[1]) return msg.channel.send("Oh no, I can only define one word`")
    if(!args[0]) return msg.channel.send("Come on... how am I supposed to define nothing?") 
    args = args.join("")
    wordnet.lookup(args, function(err, words) {
        if(!words) return msg.channel.send("Oh no we can't define that *word*...")
        defs = ["**1:** "+words[0].glossary]
        if(words[1]) defs.push("\n**2:** "+words[1].glossary)
        if(words[2]) defs.push("\n**3:** "+words[2].glossary)
        defs = defs.join("")
        const embed = new Discord.RichEmbed()
        .setColor(0x055e18)
        .addField("Word", args)
        .addField("Definition", defs)
        msg.channel.send({embed})
    });
}

exports.help = {
    name: "define",
    desc: "Will find the definition of a word",
    usage: "define [word]"
}