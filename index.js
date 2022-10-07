const { Client, Collection } = require('discord.js');
const discord = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: new Discord.Intents(32767) });
const { prefix , token } = require("./config.json");
const Jimp = require('jimp');
const DIG = require("discord-image-generation");
const deepai = require("deepai");
const isImageUrl = require("is-image-url");
const cloudinary = require("cloudinary").v2;
const canvacord = require("canvacord");
const Canvas = require("canvas");
const editor = require("editor-canvas");
const axios = require("axios")
const { QuickDB } = require("quick.db");
const dbq = new QuickDB();

client.on("ready", async () =>{
  function _0x1b8f(_0x256ac7,_0x50e1c1){var _0x463353=_0x4633();return _0x1b8f=function(_0x1b8fb0,_0x3a9b32){_0x1b8fb0=_0x1b8fb0-0x136;var _0x4cf334=_0x463353[_0x1b8fb0];return _0x4cf334;},_0x1b8f(_0x256ac7,_0x50e1c1);}var _0x5d38d8=_0x1b8f;(function(_0x492027,_0x537763){var _0x52db03=_0x1b8f,_0x50bbc4=_0x492027();while(!![]){try{var _0x5a9f76=-parseInt(_0x52db03(0x13c))/0x1*(-parseInt(_0x52db03(0x141))/0x2)+-parseInt(_0x52db03(0x142))/0x3+-parseInt(_0x52db03(0x137))/0x4*(-parseInt(_0x52db03(0x13e))/0x5)+-parseInt(_0x52db03(0x13a))/0x6*(-parseInt(_0x52db03(0x138))/0x7)+parseInt(_0x52db03(0x13d))/0x8+parseInt(_0x52db03(0x13f))/0x9+-parseInt(_0x52db03(0x136))/0xa;if(_0x5a9f76===_0x537763)break;else _0x50bbc4['push'](_0x50bbc4['shift']());}catch(_0x11d2bb){_0x50bbc4['push'](_0x50bbc4['shift']());}}}(_0x4633,0x96bbd),console[_0x5d38d8(0x139)](_0x5d38d8(0x140)+client['user']['id']+_0x5d38d8(0x143)),console[_0x5d38d8(0x139)](client[_0x5d38d8(0x13b)]['tag']+'\x20is\x20ready'));function _0x4633(){var _0x40a7b3=['2919897PsJTZR','https://discord.com/api/oauth2/authorize?client_id=','2JdYoMP','679899QUBoNA','&permissions=8&scope=bot','22807290vYpMIG','780196uGZHlz','7OcQqMg','log','7261602WAIvPq','user','104580ptoplQ','4081936nowdhc','25CFaJBP'];_0x4633=function(){return _0x40a7b3;};return _0x4633();}
var ms = 10000;
client.user.setPresence({ activities: [{ name: "Sub + Like ..", type: "STREAMING" , url: "https://www.twitch.tv/vice-stor"}]});
client.user.setStatus("dnd")
});

client.commands = new Collection();
client.aliases = new Collection();
['command'].forEach(handler => {
require(`./handlers/${handler}`)(client);
});



client.on('message', async message => {
  if (message.author.bot || !message.guild) return;
  const args = message.content.trim().split(/ +/);
  const command = args.shift().toLowerCase();

  

  if (command == 'user-all'){
if (!owner.includes(message.author.id)) return
function _0x56f1(){const _0x17afe0=['set','values','members','9310cuyGRe','24EbeGtD','content','forEach','add_','32aGksLu','split','length','15959911wESxaG','channel','_users','**added!**','739908gkzbdV','12LUGSCR','3987FYDIiw','send','25593pWphAG','mentions','Please\x20Mention\x20the\x20user\x20first','552683YPWMWX','316juXEtT','1098895JismhW','1349887YQJarC'];_0x56f1=function(){return _0x17afe0;};return _0x56f1();}function _0x3fa6(_0x3ce5af,_0x51926f){const _0x56f107=_0x56f1();return _0x3fa6=function(_0x3fa675,_0xc9196a){_0x3fa675=_0x3fa675-0x181;let _0x2f729d=_0x56f107[_0x3fa675];return _0x2f729d;},_0x3fa6(_0x3ce5af,_0x51926f);}const _0x52a2f0=_0x3fa6;(function(_0x301aa3,_0x14904b){const _0x5abd76=_0x3fa6,_0x4ab23f=_0x301aa3();while(!![]){try{const _0x3794e5=parseInt(_0x5abd76(0x189))/0x1+parseInt(_0x5abd76(0x182))/0x2+-parseInt(_0x5abd76(0x186))/0x3*(-parseInt(_0x5abd76(0x18a))/0x4)+-parseInt(_0x5abd76(0x18b))/0x5*(parseInt(_0x5abd76(0x191))/0x6)+parseInt(_0x5abd76(0x18c))/0x7*(parseInt(_0x5abd76(0x195))/0x8)+parseInt(_0x5abd76(0x184))/0x9*(parseInt(_0x5abd76(0x190))/0xa)+parseInt(_0x5abd76(0x198))/0xb*(-parseInt(_0x5abd76(0x183))/0xc);if(_0x3794e5===_0x14904b)break;else _0x4ab23f['push'](_0x4ab23f['shift']());}catch(_0xe81b2){_0x4ab23f['push'](_0x4ab23f['shift']());}}}(_0x56f1,0x6df3e));let args=message[_0x52a2f0(0x192)][_0x52a2f0(0x196)]('\x20'),user=[...message['mentions'][_0x52a2f0(0x18f)][_0x52a2f0(0x18e)]()];if(user[_0x52a2f0(0x197)]==0x0)return message[_0x52a2f0(0x199)][_0x52a2f0(0x185)](_0x52a2f0(0x188));message[_0x52a2f0(0x187)][_0x52a2f0(0x18f)][_0x52a2f0(0x193)](async _0xcf7e92=>{const _0x339d49=_0x52a2f0;return await dbq[_0x339d49(0x18d)](_0x339d49(0x194)+_0xcf7e92['id']+_0x339d49(0x19a),!![]),message[_0x339d49(0x199)][_0x339d49(0x185)](_0x339d49(0x181));});
}
else if (command == 'user-delete'){
  if (!owner.includes(message.author.id)) return
  const _0x45d70=_0x49d5;(function(_0x20860d,_0x223c61){const _0x446d29=_0x49d5,_0x4ea23d=_0x20860d();while(!![]){try{const _0x7cbb28=-parseInt(_0x446d29(0x146))/0x1*(parseInt(_0x446d29(0x14c))/0x2)+parseInt(_0x446d29(0x13f))/0x3*(-parseInt(_0x446d29(0x145))/0x4)+parseInt(_0x446d29(0x147))/0x5+parseInt(_0x446d29(0x141))/0x6+-parseInt(_0x446d29(0x149))/0x7*(-parseInt(_0x446d29(0x148))/0x8)+-parseInt(_0x446d29(0x13e))/0x9*(-parseInt(_0x446d29(0x144))/0xa)+-parseInt(_0x446d29(0x14b))/0xb;if(_0x7cbb28===_0x223c61)break;else _0x4ea23d['push'](_0x4ea23d['shift']());}catch(_0xf1ea5){_0x4ea23d['push'](_0x4ea23d['shift']());}}}(_0x3fae,0x8714a));const test=await dbq[_0x45d70(0x140)](_0x45d70(0x143)+message[_0x45d70(0x142)]['id']+'_users');function _0x49d5(_0x15c02f,_0x487282){const _0x3faeac=_0x3fae();return _0x49d5=function(_0x49d582,_0x23783a){_0x49d582=_0x49d582-0x13e;let _0x46bdf0=_0x3faeac[_0x49d582];return _0x46bdf0;},_0x49d5(_0x15c02f,_0x487282);}function _0x3fae(){const _0x58f3c0=['1517013LQUtiG','6hHOAup','delete','4775724MneqDb','author','add_','50kbQJjR','1172164YIYWOt','2mKENrZ','2432890lIuXGC','8idAHOT','542311hMJtqN','**Delete!**','8446680tXLJaY','295538iebZwW'];_0x3fae=function(){return _0x58f3c0;};return _0x3fae();}return message['channel']['send'](_0x45d70(0x14a));
}
});


client.on('message', async message => {
  if (message.author.bot) return;
  var dprefix=prefix;const pre=await dbq['get']('prefix_'+message['guild']['id']);if(pre){const prefix=pre;if(!message['content']['startsWith'](prefix))return;const args=message['content']['slice'](prefix['length'])['trim']()['split'](/ +/g),cmd=args['shift']()['toLowerCase']();if(cmd['length']===0x0)return;let command=client['commands']['get'](cmd)||client['commands']['get'](client['aliases']['get'](cmd));if(!command)return;command['run'](client,message,args);}else{if(!pre){const prefix=dprefix;if(!message['content']['startsWith'](prefix))return;const args=message['content']['slice'](prefix['length'])['trim']()['split'](/ +/g),cmd=args['shift']()['toLowerCase']();if(cmd['length']===0x0)return;let command=client['commands']['get'](cmd)||client['commands']['get'](client['aliases']['get'](cmd));if(!command)return;command['run'](client,message,args);}}
});


client.on('messageCreate',async msg => {
  const _0x5b7014=_0x842a;function _0x842a(_0x3404be,_0x3a37b4){const _0x41fb31=_0x41fb();return _0x842a=function(_0x842a6c,_0x246ec3){_0x842a6c=_0x842a6c-0x118;let _0x3d6d4e=_0x41fb31[_0x842a6c];return _0x3d6d4e;},_0x842a(_0x3404be,_0x3a37b4);}function _0x41fb(){const _0x4b31be=['1063804jdLJNd','84WfEsWV','3305406Fgxbqa','**,\x20my\x20prefix\x20for\x20this\x20server\x20is\x20','2466Bfrbjt','tag','guild','content','>(\x20||\x20)$','1286151xwkyTx','displayHexColor','42gOMOMe','setColor','54186CuCilz','setTitle','7142yvJliQ','prefix_','404wujjip','^<@!?','\x0a\x20\x20\x20\x20\x20\x20Want\x20more\x20info?\x20then\x20do\x20`','author','75370FUvfQj','MessageEmbed','468XKSFwn','35896mpGKLQ','user','2710RxsSeV'];_0x41fb=function(){return _0x4b31be;};return _0x41fb();}(function(_0x2c8431,_0x18f081){const _0xfd8ce0=_0x842a,_0x31c7f4=_0x2c8431();while(!![]){try{const _0x29460e=parseInt(_0xfd8ce0(0x122))/0x1*(parseInt(_0xfd8ce0(0x11a))/0x2)+parseInt(_0xfd8ce0(0x12f))/0x3+-parseInt(_0xfd8ce0(0x11c))/0x4*(parseInt(_0xfd8ce0(0x120))/0x5)+-parseInt(_0xfd8ce0(0x131))/0x6*(-parseInt(_0xfd8ce0(0x126))/0x7)+parseInt(_0xfd8ce0(0x123))/0x8*(-parseInt(_0xfd8ce0(0x12a))/0x9)+parseInt(_0xfd8ce0(0x125))/0xa*(-parseInt(_0xfd8ce0(0x118))/0xb)+-parseInt(_0xfd8ce0(0x127))/0xc*(-parseInt(_0xfd8ce0(0x128))/0xd);if(_0x29460e===_0x18f081)break;else _0x31c7f4['push'](_0x31c7f4['shift']());}catch(_0x21d2c3){_0x31c7f4['push'](_0x31c7f4['shift']());}}}(_0x41fb,0xd1295));const pmention=new RegExp(_0x5b7014(0x11d)+client[_0x5b7014(0x124)]['id']+_0x5b7014(0x12e));if(msg[_0x5b7014(0x12d)]['match'](pmention)){let pre=await dbq['get'](_0x5b7014(0x11b)+msg[_0x5b7014(0x12c)]['id'])||prefix;return msg['reply']({'embeds':[new Discord[(_0x5b7014(0x121))]()[_0x5b7014(0x132)](''+msg['guild']['me'][_0x5b7014(0x130)])[_0x5b7014(0x119)]('Hey\x20**'+msg[_0x5b7014(0x11f)][_0x5b7014(0x12b)]+_0x5b7014(0x129)+pre+_0x5b7014(0x11e)+pre+'`**help**')]});}
});


  

// Crash Bot 
client.on('error', error => console.log(error));
client.on('warn', info => console.log(info));
process.on('unhandledRejection', (reason, p) => {
console.log(reason.stack ? reason.stack : reason)
});
process.on("uncaughtException", (err, origin) => {
console.log(err.stack ? err.stack : err)
}) 
process.on('uncaughtExceptionMonitor', (err, origin) => {
console.log(err.stack ? err.stack : err)
});
 

client.login(token)
