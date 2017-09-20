module.exports = function() {
    this.r = require("rethinkdbdash")({
        db: 'DRPG',     
    });
    this.Discord = require("discord.js");
    this.bot = new Discord.Client();
    this.config = require("./config.json");
    this.child_process = require('child_process')
    this.fs = require('fs')
    this.help = require("./Commands/Useful/help.js")
    this.math = require('mathjs')
    this.wordnet = require('wordnet')
    this.google = require('google')
    this.giphy = require("giphy-api")("81e0a5c3d29041518b9c07ab7e6a2a55")
}