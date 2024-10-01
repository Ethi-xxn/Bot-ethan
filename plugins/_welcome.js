import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://i.ibb.co/t2fGTwW/file.jpg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]

  if (chat.welcome && m.messageStubType == 27) {
    let welcome = `┌─★ 𝐆𝐞𝐧𝐞𝐬𝐢𝐬𝐁𝐨𝐭-𝐌𝐃\n│「 Bienvenido 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │🤍  Bienvenido a\n   │🤍  ${groupMetadata.subject}\n   └───────────────┈ ⳹`
await conn.sendLuffy(m.chat, packname, textbot, welcome, img, img, canal, estilo)
  }

  if (chat.welcome && m.messageStubType == 28) {
    let bye = `┌─★ 𝐆𝐨𝐣𝐨 𝐁𝐨𝐭\n│「 ADIOS 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │🤍  Se fue\n   │♟ Aveces es mejor simplemente decir adiós\n   └───────────────┈ ⳹`
await conn.sendLuffy(m.chat, packname, textbot, bye, img, img, canal, estilo)
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = `┌─★ 𝐆𝐨𝐣𝐨 𝐁𝐨𝐭\n│「 ADIOS 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │🤍  Se fue\n   │🤍 aveces es mejor decir adios\n   └───────────────┈ ⳹`
await conn.sendLuffy(m.chat, packname, textbot, kick, img, img, canal, estilo)
}}
