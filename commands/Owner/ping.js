const { MessageEmbed } = require("discord.js")
const discord = require("discord.js")
const { prefix } = require('../../config.json'); 

module.exports = {
  name: "ping",
  description: "Test the bots response time.",
 aliases:[""],
 usage: `{prefix}ping`,
examples:`{prefix}ping`,
 type: "Owner",

  run: async (client, message) => {
    var _0x8dabba=_0x5890;function _0x1b6e(){var _0x5ecf7d=['ping','8117659BBbKRp','419168lWKCHW','setDescription','`Speed\x20message\x20','5754evRTcF','channel','984FBmYVy','117669RzAGDu','52sLlqav','2uxKjGi','1045758PsnUtm','edit','791095iFTdrt','ms`','20piqQER','send','4386339IgOoAL','guild','round','now','catch','setColor'];_0x1b6e=function(){return _0x5ecf7d;};return _0x1b6e();}(function(_0x1803a8,_0x2afbb4){var _0x2491c2=_0x5890,_0x89e280=_0x1803a8();while(!![]){try{var _0x58c5e4=-parseInt(_0x2491c2(0xf9))/0x1*(parseInt(_0x2491c2(0x108))/0x2)+parseInt(_0x2491c2(0xf7))/0x3*(-parseInt(_0x2491c2(0xf8))/0x4)+parseInt(_0x2491c2(0xfc))/0x5+parseInt(_0x2491c2(0xfa))/0x6+-parseInt(_0x2491c2(0xf4))/0x7*(-parseInt(_0x2491c2(0xf6))/0x8)+-parseInt(_0x2491c2(0x100))/0x9+parseInt(_0x2491c2(0xfe))/0xa*(parseInt(_0x2491c2(0x107))/0xb);if(_0x58c5e4===_0x2afbb4)break;else _0x89e280['push'](_0x89e280['shift']());}catch(_0x5230f4){_0x89e280['push'](_0x89e280['shift']());}}}(_0x1b6e,0x7863e));function _0x5890(_0x2965f0,_0x5ac725){var _0x1b6e15=_0x1b6e();return _0x5890=function(_0x5890b7,_0x2dc743){_0x5890b7=_0x5890b7-0xf4;var _0x550f61=_0x1b6e15[_0x5890b7];return _0x550f61;},_0x5890(_0x2965f0,_0x5ac725);}var ping=''+(Date[_0x8dabba(0x103)]()-message['createdTimestamp']),api=''+Math[_0x8dabba(0x102)](client['ws'][_0x8dabba(0x106)]);const pings=new MessageEmbed()[_0x8dabba(0x109)]('Loading...')[_0x8dabba(0x105)]('DARK_GOLD');message['channel'][_0x8dabba(0xff)]({'embeds':[pings]})['then'](_0x41513c=>{var _0x1517e0=_0x8dabba;let _0x4af893=new MessageEmbed()[_0x1517e0(0x109)](_0x1517e0(0x10a)+(Date[_0x1517e0(0x103)]()-message['createdTimestamp'])+'ms`\x0a`Discord\x20Api\x20'+api+'ms`\x0a`ping\x20Bot\x20'+ping+_0x1517e0(0xfd))[_0x1517e0(0x105)](message[_0x1517e0(0x101)]['me']['displayHexColor']);_0x41513c[_0x1517e0(0xfb)]({'embeds':[_0x4af893]})[_0x1517e0(0x104)](_0x2715f1=>message[_0x1517e0(0xf5)][_0x1517e0(0xff)](_0x2715f1));});
  },
};