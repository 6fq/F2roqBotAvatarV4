const Discord = require("discord.js")
const { owner , prefix} = require('../../config')
const { MessageEmbed } = require('discord.js')
const { QuickDB } = require("quick.db");
const db = new QuickDB();
module.exports = {
  name: 'set-prefix',
  aliases: ['prefix'],
  description: 'add prefix new',
  type: "Owner",
  run: async (client, message, args) => {
   let check=await db['get']('add_'+message['author']['id']+'_users');if(owner['includes'](message['author']['id'])&&check!=!![]){let dogeguild=args[0x0];if(!dogeguild)return;if(dogeguild=='add'){const newprefix=args[0x1];if(!newprefix)return message['reply']('Enter\x20New\x20Prefix');if(newprefix['length']>0x3)return message['channel']['send']('Invalid\x20Prefix,\x20Prefix\x20Is\x20Too\x20Long');await db['set']('prefix_'+message['guild']['id'],newprefix),message['channel']['send']('New\x20Prefix\x20Set\x20To\x20`'+newprefix+'`');}else{if(dogeguild=='delete')return await db['delete']('prefix_'+message['guild']['id']),message['react']('✅');}}

}
}