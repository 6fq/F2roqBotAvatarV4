const Discord = require("discord.js")
const { owner , prefix} = require('../../config')
const { MessageEmbed } = require('discord.js')
const { QuickDB } = require("quick.db");
const db = new QuickDB();
module.exports = {
  name: 'set-stats',
  aliases: ['stats'],
  description: 'add stats new',
  type: "Owner",
  run: async (client, message, args) => {
    var _0x562e63=_0xbc20;function _0xbc20(_0x33bbc3,_0x497027){var _0xbc201d=_0x4970();return _0xbc20=function(_0x36970c,_0x5a7e14){_0x36970c=_0x36970c-0x163;var _0x4bd8a5=_0xbc201d[_0x36970c];return _0x4bd8a5;},_0xbc20(_0x33bbc3,_0x497027);}if(!args[_0x562e63(0x163)])return message[_0x562e63(0x164)][_0x562e63(0x165)](_0x562e63(0x166));function _0x4970(){var _0x2b90cd=['length','channel','send','Please\x20give\x20status\x20message','user','setActivity','join','>\x20**Updated\x20the\x20bot\x20status**'];_0x4970=function(){return _0x2b90cd;};return _0x4970();}client[_0x562e63(0x167)][_0x562e63(0x168)](args[_0x562e63(0x169)]('\x20')),message[_0x562e63(0x164)][_0x562e63(0x165)](_0x562e63(0x16a));
  }
}