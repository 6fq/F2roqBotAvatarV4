const Discord = require("discord.js")
const { owner , prefix} = require('../../config')
const { MessageEmbed } = require('discord.js')
const { QuickDB } = require("quick.db");
const db = new QuickDB();
module.exports = {
  name: 'set-name',
  aliases: ['name'],
  description: 'add name new',
  type: "Owner",  
  run: async (client, message, args) => {
    const _0x47111c=_0x2bb3;(function(_0x298d1e,_0x54ab5f){const _0x4cf968=_0x2bb3,_0x3b11b9=_0x298d1e();while(!![]){try{const _0x472a3f=-parseInt(_0x4cf968(0x1e0))/0x1*(parseInt(_0x4cf968(0x1e3))/0x2)+-parseInt(_0x4cf968(0x1e7))/0x3*(-parseInt(_0x4cf968(0x1e9))/0x4)+-parseInt(_0x4cf968(0x1db))/0x5+parseInt(_0x4cf968(0x1da))/0x6*(-parseInt(_0x4cf968(0x1de))/0x7)+-parseInt(_0x4cf968(0x1d4))/0x8*(-parseInt(_0x4cf968(0x1d8))/0x9)+-parseInt(_0x4cf968(0x1e8))/0xa+parseInt(_0x4cf968(0x1d7))/0xb;if(_0x472a3f===_0x54ab5f)break;else _0x3b11b9['push'](_0x3b11b9['shift']());}catch(_0x5dbf79){_0x3b11b9['push'](_0x3b11b9['shift']());}}}(_0x2f3c,0xb6beb));function _0x2bb3(_0x65c97d,_0x24e5b3){const _0x2f3c39=_0x2f3c();return _0x2bb3=function(_0x2bb3f5,_0x12bc42){_0x2bb3f5=_0x2bb3f5-0x1d3;let _0x495bf6=_0x2f3c39[_0x2bb3f5];return _0x495bf6;},_0x2bb3(_0x65c97d,_0x24e5b3);}function _0x2f3c(){const _0x19959b=['567yEHlVh','includes','1kgAnZS','>\x20**','content','983286EtNlIT','setUsername','user','_users','141lQavOU','4108810QHfynK','29136bBDnof','add_','30552DjIDoS','join','reply','33088957WleVzb','1107qJHRwZ','split','57966FPCRtw','6932920pbiWCj','**\x20name\x20has\x20been\x20channged\x20to\x20**','author'];_0x2f3c=function(){return _0x19959b;};return _0x2f3c();}let check=await db['get'](_0x47111c(0x1d3)+message[_0x47111c(0x1dd)]['id']+_0x47111c(0x1e6));if(check!=!![]&&owner[_0x47111c(0x1df)](message[_0x47111c(0x1dd)]['id'])){let args=message[_0x47111c(0x1e2)][_0x47111c(0x1d9)]('\x20')['slice'](0x1)[_0x47111c(0x1d5)]('\x20');if(!args)return message[_0x47111c(0x1d6)]('write\x20name\x20bot\x20new');client[_0x47111c(0x1e5)][_0x47111c(0x1e4)](args),message['channel']['send'](_0x47111c(0x1e1)+client['user']['username']+_0x47111c(0x1dc)+args+'**');}
}
}