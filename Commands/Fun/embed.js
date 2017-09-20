require("../../req.js")
require('../../bot.js')
exports.run = (bot, msg, args) => {
    try{
        tcount = 0
        dcount = 0
        fcount = 0
        ccount = 0
        sec = "Please add the second part to the field"
        function frun(num) {
            var field = msg.content.split("-f" || "-F").slice(1)
            let f = field[num].split("|")
            let ft = f[0]
            let fd = f[1]
            if(!fd) return msg.channel.send(sec)
            fd = fd.split("-")[0]
            fcount++
            return [ft, fd]
        }
        args = args.join(" ")
        if(args.includes("-t" || "-T")) {
            tcount++
            var title = msg.content.split("-t")
            if(title[2]) return msg.channel.send("You can only have one title")
            title = title.slice(1).join("").split("-")[0]
        }
        if(args.includes("-d" || "-D")) {
            dcount++
            var desc = msg.content.split("-d")
            if(desc[2]) return msg.channel.send("You can only have one description")
            desc = desc.slice(1).join("").split("-")[0]
        }
        if(args.includes("-f" || "-F")) {
            var field = msg.content.split("-f").slice(1)
            if(field[5]) return msg.channel.send("I can only send 5 fields")
            var f1 = frun(0)
            if(field[1]){
                f2 = frun(1)
            }
            if(field[2]){
                var f3 = frun(2)
            }
            if(field[3]){
                var f4 = frun(3)
            }
            if(field[4]){
                var f5 = frun(4)
            }
        } 
        if (args.includes("-c" || "-C")) {
            var color = msg.content.split("-c")
            if(color[2]) return msg.channel.send("You can only have one color")
            color = color.slice(1).join("").split("-")[0].replace(" ", '').split(" ")[0]
            if(/^#[0-9A-F]{6}$/i.test('#'+color)) {
                color = "0x"+color
                color = parseInt(color)
                ccount++
            } else {
                return msg.channel.send("Your color is not a hex color")
            }
        }
        if(!args.includes("-d") && !args.includes("-t") &&! args.includes("-f")) return msg.channel.send("You need to add something")
        const embed = new Discord.RichEmbed()
        if(tcount === 1) embed.setTitle(title)
        if(dcount === 1) embed.setDescription(desc)
        if(fcount > 0) embed.addField(f1[0], f1[1])
        if(fcount > 1) embed.addField(f2[0], f2[1])
        if(fcount > 2) embed.addField(f3[0], f3[1])
        if(fcount > 3) embed.addField(f4[0], f4[1])
        if(fcount > 4) embed.addField(f5[0], f5[1])
        if(ccount === 1) embed.setColor(color)
        msg.channel.send({embed})
    } catch(e){
        msg.channel.send("Nice, your embed screwed up and I got this message, message `Tyler#3592` if you'd like. ```js\n"+e+"```")
    }
    
}

exports.help = {
    name : "embed",
    desc : "Will embed a message for you",
    usage: "embed [params] : -t [title] -d [desc] -f [title] | [message] -c [Hex color code]"
}