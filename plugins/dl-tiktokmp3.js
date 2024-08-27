let { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys") 
let handler = async (m, { conn }) => {
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `Whatsapp Bot`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Khemii;Bot;;;\nFN:Whatsapp Bot\nTEL;type=Mobile;waid=13135550002:+62 838-9738-7848\nEND:VCARD",
}
}), { userJid: m.chat, quoted: m })
conn.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
handler.tags = ['ai']
handler.help = ['metaai']
handler.command = ["metaai"]
module.exports = handler