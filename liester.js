const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const { Client, Util } = require('discord.js');//
const fs = require('fs');//
const db = require('quick.db');//
const express = require('express');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
//

var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./komutlar/', (err, files) => {//
    if (err) console.error(err);//
    log(`${files.length} komut yüklenecek.`);//
    files.forEach(f => {//
        let props = require(`./komutlar/${f}`);//
        log(`Yüklenen komut: ${props.help.name}.`);//
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//-----------------------GİRENE-ROL-VERME----------------------\\     STG

client.on("guildMemberAdd", member => {
  member.roles.add('811537454435008584'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});

//-----------------------GİRENE-ROL-VERME----------------------\\     STG

//////////////////////////////////////

/////////////////////////////////////


/////////////////Sa-As

//////////https://discord.gg/NP7Ar2j

//------------------------HOŞGELDİN-EMBEDLİ-----------------------\\     STG

client.on("guildMemberAdd", member => {
    const moment = require('moment')
	let günler = {
      "0": "Pazar",
      "1": "Pazartesi",
      "2": "Salı",
      "3": "Çarşamba",
      "4": "Perşembe",
      "5": "Cuma",
      "6": "Cumartesi",
	}
	  let aylar = {
			"01": "Ocak",
			"02": "Şubat",
			"03": "Mart",
			"04": "Nisan",
			"05": "Mayıs",
			"06": "Haziran",
			"07": "Temmuz",
			"08": "Ağustos",
			"09": "Eylül",
			"10": "Ekim",
			"11": "Kasım",
			"12": "Aralık"
    }
  let endAt = member.user.createdAt
      let gün = moment(new Date(endAt).toISOString()).format('DD')
      let ay = moment(new Date(endAt).toISOString()).format('MM').replace("01", "Ocak").replace("02","Şubat").replace("03","Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10","Ekim").replace("11","Kasım").replace("12","Aralık")
     let yıl =  moment(new Date(endAt).toISOString()).format('YYYY')
     let saat = moment(new Date(endAt).toISOString()).format('HH:mm')
let kuruluş = `${gün} ${ay} ${yıl} ${saat}`
    require("moment-duration-format")
      var üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
      var üs = üyesayısı.match(/([0-9])/g)
      üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
      if(üs) {
        üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
          return {
            '0': `<a:sleazy_sifir:802503704108204033>`,
            '1': `<a:sleazy_bir:802503792964796426>`,
            '2': `<a:sleazy_iki:802503825508401172>`,
            '3': `<a:apua_uc:753664204367462461>`,
            '4': `<a:sleazy_dort:802503932793716736>`,
            '5': `<a:sleazy_bes:802503957649555466>`,
            '6': `<a:sleazy_alti:802503992012701736>`,
            '7': `<a:sleazy_yedi:802504017015341056>`,
            '8': `<a:sleazy_sekiz:802504050197004318>`,
            '9': `<a:sleazy_dokuz:802504090365853696>`}[d];})}
      const kanal = member.guild.channels.cache.find(r => r.id === "811537454917615648");
      let register = '811537454573158449'
    let user = client.users.cache.get(member.id);
     
  kanal.send(`
<a:etiket:802511538283479070> <@`+member.id+`>** Sunucumuza ayak bastı. **
  
<:boost3:802511543203397642> **Kayıt olmak için, ses teyit odalarına geçmelisin.**  **<@&811537454573158449> rolündeki arkadaşlar seninle ilgilenecektir.** 
  
<a:tik:802511481915572314> **Seninle birlikte sunucumuz \`${member.guild.memberCount}\` kullanıcıya ulaştı!** 

<a:yukleniyorr:802511572588036097> **Hesap Kuruluş Tarihin :** \`${kuruluş}\`

<a:zil:802511575185227846> **Sunucumuzda güzel vakit geçirmen dileğiyle!**`)
  });

//------------------------HOŞGELDİN-EMBEDLİ-----------------------\\     STG <a:zil:802511575185227846>


//-----------------------TAG-ROL----------------------\\     STG

client.on("userUpdate", async (stg, yeni) => {
  var sunucu = client.guilds.cache.get('784005750560391168'); // Buraya Sunucu ID
  var uye = sunucu.members.cache.get(yeni.id);
  var ekipTag = "ケ";// Buraya Ekip Tag
  var ekipRolü = "807937819178827826"; // Buraya Ekip Rolünün ID
  var logKanali = "807919414585327617"; // Loglanacağı Kanalın ID

  if (!sunucu.members.cache.has(yeni.id) || yeni.bot || stg.username === yeni.username) return;
  
  if ((yeni.username).includes(ekipTag) && !uye.roles.cache.has(ekipRolü)) {
    try {
      await uye.roles.add(ekipRolü);
      await uye.send(`<:OnaylanmPng:796462123341447168> **Tagımızı aldığın için teşekkürler! Otomatik olarak rolünü verdim, yetkili olmak istersen Kuruculara dm atman yeterli! **<:OnaylanmPng:796462123341447168>`);
      await client.channels.cache.get(logKanali).send(new Discord.MessageEmbed().setColor('GREEN').setDescription(`<:OnaylanmPng:796462123341447168> ${yeni} **adlı üye tagımızı alarak ailemize katıldı! Otomatik olarak <@&807937819178827826> rolünü verdim!**`));
    } catch (err) { console.error(err) };
  };
  
  if (!(yeni.username).includes(ekipTag) && uye.roles.cache.has(ekipRolü)) {
    try {
      await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(ekipRolü).position));
      await uye.send(` <:ReddedilmiPng:796462126062370867> **Tagımızı bıraktığın için ekip rolü ve yetkili rollerin alındı! Tagımızı tekrar alıp aramıza katılmak istersen;**\nTagımız: **${ekipTag}** <:ReddedilmiPng:796462126062370867>`);
      await client.channels.cache.get(logKanali).send(new Discord.MessageEmbed().setColor('RED').setDescription(` <:ReddedilmiPng:796462126062370867> ${yeni} **adlı üye tagımızı bırakarak aramızdan ayrıldı! Tekrar ailemize katılması dileğiyle. :/**`));
    } catch(err) { console.error(err) };
  };
});

//----------------------TAG-KONTROL----------------------\\     STG    

client.on("guildMemberAdd", member => {
  let sunucuid = "784005750560391168"; //Buraya sunucunuzun IDsini yazın  
  let tag = "ケ"; //Buraya tagınızı yazın
  let rol = "807937819178827826"; //Buraya tag alındığı zaman verilecek rolün IDsini yazın
  let channel = client.guilds.cache.get(sunucuid).channels.cache.find(x => x.name == '★・tag-log'); //tagrol-log yerine kendi log kanalınızın ismini yazabilirsiniz
if(member.user.username.includes(tag)){
member.roles.add(rol)
  const tagalma = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(`<@${member.id}> **Sunucumuza taglı bir şekilde katıldı! O doğuştan beri bizden..**`)
      .setTimestamp()
     client.channels.cache.get('807919414585327617').send(tagalma)
}
})

//-----------------------TAG-KONTROL----------------------\\     STG    
client.on('ready', ()=>{
client.channels.cache.get(`802161184194166814`).join();
  })
