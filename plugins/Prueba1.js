const fetch = require("node-fetch");

const cheerio = require('cheerio')


let handler = async (m, { conn, text, usedPrefix, command }) => {

	if (!text) return conn.reply(m.chat, '[❗] *Penggunaan:* .pindl <url>', m)

	conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

	let hasil = await pin(text)

	conn.sendFile(m.chat, hasil, 'pinterest.mp4', '`Berhasil`', m)

await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})

}

handler.help = ['pindl']

handler.tags = ['downloader']

handler.command = /^(pindl|pinterestdl)$/i


module.exports = handler


async function pin(url) { 

     return new Promise(async (resolve, reject) => { 

         let form = new URLSearchParams() 

         form.append('url', url) 

         let html = await (await fetch('https://pinterestvideodownloader.com/', { method: 'POST', body: form })).text() 

         $ = cheerio.load(html) 

         let data = [] 

         $('table > tbody > tr').each(function (i, e) { 

             if ($($(e).find('td')[0]).text() != '') data.push({ 

                 url: $($(e).find('td')[0]).find('a').attr('href') 

             }) 

         }) 

         if (data.length == 0) return resolve({ status: false }) 

         resolve({ status: true, data }) 

     }) 

 } 
