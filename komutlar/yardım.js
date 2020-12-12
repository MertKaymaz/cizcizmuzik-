const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('787255638446309416') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('RANDOM')
        .setTitle(`CızCızMüzik+ Yardım Listesi <a:mk_aa:781989465845268482> `)
        .setDescription(`!!radyocal ➠ Radyoyu Açmanızı Sağlar.
!!çal ➠ Belirtilen müziği oynatmayı sağlar.
!!kapat ➠ Belirtilen müziği kapatmayı sağlar sağlar. 
!!geç ➠ Sıradaki müziğe geçiş yapar.
!!duraklat ➠ Müziği durkaklatır.
!!devam ➠ Müziği devam ettirir.` )  
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Tarafından Zevkli Bir Müzik Dinlemek İçin İstendi .`, message.author.avatarURL)
        .setFooter(`${message.author.username} CızCızMüzik+ **CızCızAilesi**`,message.author.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'BottanSizeYardımEder',
  usage: '!!yardım'
};