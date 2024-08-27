let { tiktok } = require('api-dylux')

let handler = async (m, { conn, text, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* .${command} https://vm.tiktok.com/xxxxx`, m)
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let res = await tiktok(text)
  await conn.sendMessage(m.chat, {
  audio: { url: `${res.result.music}` },
  mimetype: 'audio/mpeg'
  },{quoted: m})
  return
}
handler.help = ['tiktokmp3 *<url>*'];
handler.tags = ['downloader'];
handler.command = /^(tiktokmp3|ttmp3|tiktokaudio)$/i;
handler.limit = true;
handler.group = false;

module.exports = handler;