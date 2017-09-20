require("./req.js")()
bot.on('ready', () => {
    console.log("Let's go bois!")
})
moderation = []
useful = []
fun = []
bot.commands = new Discord.Collection();
function read(fld, type){
    fs.readdir("./"+fld+"/", (err, files) => {
        if (err) console.error(err);
        let jsfiles = files.filter(f => f.split(".").pop()==="js")
    
        jsfiles.forEach(f => {
            let props = require(`./`+fld+`/${f}`);
            bot.commands.set(props.help.name, props);
            console.log(`${props.help.name} is clear`)
            if(type === moderation) moderation.push(props.help.name)
            if(type === fun) fun.push(props.help.name.charAt(0).toUpperCase() + props.help.name.slice(1))
            if(type === useful) useful.push(props.help.name.charAt(0).toUpperCase() + props.help.name.slice(1))
        });
    });
}
read("Commands/Moderation", moderation)
read("Commands/Fun", fun)
read("Commands/Useful", useful)

const gtable = r.table('guild')
const table = r.table('user')

bot.on('message', async msg => {
    gexist = await gtable.filter({guildID : msg.guild.id}).run();
    exist = await table.filter({userID : msg.author.id}).run();
    if(!gexist[0]) {
        await gtable.insert({
            guildID : msg.guild.id,
            gstuff: {
                prefix : "<",
                tags : [{
                }]
            }
        }).run()
    }
    if(!exist[0]) {
        await table.insert({
            userID : msg.author.id,
        })
    }

    prefix = gexist[0].gstuff.prefix

    if(msg.mentions.members.first()) {
        if(msg.mentions.members.first().id === "325792557697073162") {
            var command = msg.content.split(" ")[1]
            var args = msg.content.split(" ").slice(2)
        } else {
            return;
        }
    } else {
        if(!msg.content.startsWith(prefix)) return;
        var command = msg.content.split(" ")[0].slice(prefix.length).toLowerCase()
        var args = msg.content.split(" ").slice(1)
    }
    if(bot.commands.has(command)) {
        cmd = bot.commands.get(command);
    } else {
        return
    }
    if(cmd){
        cmd.run(bot, msg, args);
    }
});

bot.login(config.token);


module.exports = function () {
    this.moderation = moderation
    this.random = random
    this.useful = fun
}