import fetch from 'node-fetch';

let handler = async (m, { conn,  text, usedPrefix, command }) => {
	if (!text) return conn.reply(m.chat, `[❗] *Penggunaan:* ${usedPrefix + command} <name>`, m)
	conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
	let kemii = await fetch(`https://api.zahwazein.xyz/webzone/happymod?query=${text}&apikey=${global.zein}`)
	let res = await kemii.json()
    let hasil = res.result.map((v, i) => `Name: ${v.name}\nLink: ${v.link}\n`).join('\n')
    let v = res.result
	await conn.sendFile(m.chat, res.result[0].icon, 'happy.jpg', `${hasil}`, m)
   await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}
handler.help = ['happymod']
handler.tags = ['dl']
handler.command = /^(happymod)$/i

export default handler;