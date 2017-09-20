require("../../req.js")
require('../../bot.js')
exports.run = (bot, msg, args) => {
    args = args.join(" ")
    let links = []
    if(!args) return msg.channel.send("Please have something for me to search")

    google(args, async (err, res) => {
        if(!res.links[0].href) return msg.channel.send("There were no search results")
        msg.channel.send(res.links[0].href)
    })
}

exports.help = {
    name : "google",
    desc : "Will google something for you",
    usage: "google [search]"
}