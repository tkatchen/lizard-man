require("../../req.js")
require('../../bot.js')
exports.run = (bot, msg, args) => {
    args = args.join(" ")
    giphy.search({
        q: args,
        rating: 'g',
        limit : 1
    }, function (err, res) {
        if(!res.data[0]) return msg.channel.send("Couldn't find you gif")
        msg.channel.send({files : [res.data[0].images.downsized.url]})
    });
}

exports.help = {
    name : "gif",
    desc : "Searches a gif for you",
    usage: "gif [content]"
}