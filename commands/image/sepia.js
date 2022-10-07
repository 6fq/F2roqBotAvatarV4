const db = require("quick.db")
const moment = require("moment");
const fs = require("fs");
const DIG = require("discord-image-generation");
const { MessageEmbed , Discord } = require("discord.js")
const { MessageAttachment } = require("discord.js")


module.exports = {
  name: "sepia",
description: "يحول الصوره ",
 aliases:[""],
 usage: `{prefix}sepia \`[Files,url,mention]\``,
examples:``,
 type: "image",
  run: async (client, message , Discord) => {
    const _0x4adf8c=_0x4811;function _0x4811(_0x4dc739,_0x581f2a){const _0x185486=_0x1854();return _0x4811=function(_0x4811f0,_0x17a105){_0x4811f0=_0x4811f0-0x194;let _0xc70c6=_0x185486[_0x4811f0];return _0xc70c6;},_0x4811(_0x4dc739,_0x581f2a);}(function(_0x4d3a2f,_0x51fb64){const _0x1399c2=_0x4811,_0x48ca47=_0x4d3a2f();while(!![]){try{const _0x4c3919=parseInt(_0x1399c2(0x196))/0x1*(parseInt(_0x1399c2(0x19e))/0x2)+-parseInt(_0x1399c2(0x1a2))/0x3*(parseInt(_0x1399c2(0x194))/0x4)+-parseInt(_0x1399c2(0x1a3))/0x5+parseInt(_0x1399c2(0x199))/0x6+parseInt(_0x1399c2(0x195))/0x7+parseInt(_0x1399c2(0x197))/0x8*(parseInt(_0x1399c2(0x198))/0x9)+-parseInt(_0x1399c2(0x19b))/0xa;if(_0x4c3919===_0x51fb64)break;else _0x48ca47['push'](_0x48ca47['shift']());}catch(_0x5c61f6){_0x48ca47['push'](_0x48ca47['shift']());}}}(_0x1854,0xb7646));function _0x1854(){const _0x567b96=['first','users','604KzKTzq','5143628jnLOqg','490738CpJDdW','2139832gYEdMP','36gntUVd','4129146AHvsbU','attachments','16551520PzpKMq','proxyURL','content','6ZlnziD','png','split','mentions','13026cPoFmQ','4515785UYCuOk','displayAvatarURL'];_0x1854=function(){return _0x567b96;};return _0x1854();}const imgURL=message[_0x4adf8c(0x19a)][_0x4adf8c(0x1a5)]()&&message[_0x4adf8c(0x19a)][_0x4adf8c(0x1a5)]()[_0x4adf8c(0x19c)]||message[_0x4adf8c(0x1a1)]['users'][_0x4adf8c(0x1a5)]()&&message['mentions'][_0x4adf8c(0x1a6)][_0x4adf8c(0x1a5)]()['displayAvatarURL']({'dynamic':!![],'format':_0x4adf8c(0x19f),'size':0x800})||message[_0x4adf8c(0x19d)][_0x4adf8c(0x1a0)]('\x20')[0x1]||message['author'][_0x4adf8c(0x1a4)]({'dynamic':!![],'format':_0x4adf8c(0x19f),'size':0x800});
     let img = await new DIG.Sepia().getImage(imgURL);
    let attach = new MessageAttachment(img, "Sepia.png");
    message.reply({ files: [attach] })
  }
}
