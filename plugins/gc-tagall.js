const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
m.react('🤍') 
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
const oi = `*» INFO :* ${pesan}`;
  let teks = `*!ㅤ ㅤ ⏜
ㅤㅤ  ✦🪭 ࣪◌ೇ 𝐈𝐧𝐯𝐨𝐜𝐚𝐧𝐝𝐨 𝐚𝐥 𝐠𝐫𝐮𝐩𝐨ִֶָ .
ㅤ ㅤ ⏝࣪✦˖꒷꒦⏝꒦꒷꒦⏝꒦꒷꒦⏝꒦꒷   !*\n PAJEROS * ${participants.length} DESPIERTEN* 🗣️\n\n ${oi}\n\n╭  ┄ 𝅄  ۪꒰ ׅ \`${packname}\` ׅ ꒱  ۟  𝅄 ┄\n`;
  for (const mem of participants) {
    teks += ` ⫏ㅤֵ𑑓${mem.id.split('@')[0]}\n`;
  }
  teks += `╰⸼ ┄ ┄ ┄ ─  ꒰  ׅ୭ *${vs}* ୧ ׅ ꒱  ┄  ─ ┄ ⸼`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['todos <mesaje>'];
handler.tags = ['grupo'];
handler.command = /^(tagall|invocar|marcar|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;