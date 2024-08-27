let formData = require('form-data')

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!text) {
    conn.sendPresenceUpdate("composing", m.chat);
    return conn.reply(m.chat, `• *Example :* .tiktok https://vm.tiktok.com/xxxxx`, m);
  }
  if (!text.match(/tiktok/gi)) {
    return conn.reply(m.chat, 'Make sure the link is from TikTok', m);
  }
  
  await conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  try {
  let hasil = await tiktok(text);
  let { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys");
  
  let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({}),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: footer
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: hasil.caption,
            hasMediaAttachment: true,
            ...(await prepareWAMessageMedia({ video: { url: hasil.server1.url } }, { upload: conn.waUploadToServer }))
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Backsound","id": ".ttmp3 ${text}"}`
              }
            ],
          })
        })
      }
    }
  }, { userJid: m.chat, quoted: m });
  
 await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
 await conn.sendMessage(m.chat, { react: { text: '', key: m.key }})
  } catch (e) {
   await m.reply(String(e))
   await conn.sendMessage(m.chat, { react: { text: '', key: m.key }})
  }
};

handler.help = ['tiktok'].map(v => v + ' *<url>*');
handler.tags = ['downloader'];
handler.command = /^(tiktokdl2|tiktoknowm)$/i;
handler.limit = false;
handler.group = false;
handler.regiser = false;

module.exports = handler;

async function tiktok(url) {
  let result = {}
  const bodyForm = new formData()
  bodyForm.append("q", url)
  bodyForm.append("lang", "id")
  try {
    const { data } = await axios(`https://savetik.co/api/ajaxSearch`, {
      method: "post",
      data: bodyForm,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "User-Agent": "PostmanRuntime/7.32.2"
      }
    })
    const $ = cheerio.load(data.data)
    result.status = true
    result.caption = $("div.video-data > div > .tik-left > div > .content > div > h3").text()
    ;(result.server1 = {
      quality: "MEDIUM",
      url: $("div.video-data > div > .tik-right > div > p:nth-child(1) > a").attr("href")
    }),
      (result.serverHD = {
        quality: $("div.video-data > div > .tik-right > div > p:nth-child(3) > a").text().split("MP4 ")[1],
        url: $("div.video-data > div > .tik-right > div > p:nth-child(3) > a").attr("href")
      }),
      (result.audio = $("div.video-data > div > .tik-right > div > p:nth-child(4) > a").attr("href"))
    return result
  } catch (err) {
    result.status = false
    result.message = "Gatau kenapa"
    console.log(result)
    return result
  }
}