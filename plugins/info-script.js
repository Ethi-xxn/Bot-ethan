
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = 'https://i.ibb.co/8g5yZr5/file.jpg'
m.react('🤍')
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado = `\`乂 S C R I P T  -  B O T\`

> 🐥 *Te gusta gojo Bot? no olvisdes dejarnos una estrellita en el repositorio para seguir trayendo actualizaciones* ☕
`
await conn.sendButton(m.chat, estado, '@ethi_xxn', pp, [
['DUEÑO 🤍', '.owner']], null, [['GIT HUB 🤍', `https://github.com/Angelito-OFC/GenesisBot-MD`]], m)
}
handler.help = ['script']
handler.tags = ['info']
handler.command = /^(sc|script|Repositorio?)$/i

export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
