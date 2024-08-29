import { ttdl } from 'ruhend-scraper';

let handler = async (m, { conn, text, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* .${command} https://vm.tiktok.com/xxxxx`, m)
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let res = await conn.sendFile(m.chat, audio, 'tiktok.mp3', dev, m);
}
handler.help = ['tiktokmp3 *<url>*'];
handler.tags = ['downloader'];
handler.command = /^(tiktokmp3|ttmp3|tiktokaudio)$/i;
handler.limit = true;
handler.group = false;

export default handler;