// codigo adaptado por Angel-OFC 
import fetch from 'node-fetch';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {

 if (!text) throw '➤ `𝗔𝗩𝗜𝗦𝗢` ♣️\n\n*PARA USAR GENESIS IA*\n_Ejemplo: .iakurumi que sos?_';
    await m.react('♣️');
    try {
        const result = await chatAi(text);
await conn.sendMessage(m.chat, {
text: `${gyh.result}`,
contextInfo: {
externalAdReply: {
title: 'Hatsume Miku - C.ai',
body: 'E L A I N A  M U L T I D E V I C E',
thumbnailUrl: 'https://telegra.ph/file/1d84cf5157bffd783a2fd.jpg',
sourceUrl: 'https://whatsapp.com/channel/0029VaF8RYn9WtC16ecZws0H',
mediaType: 1,
renderLargerThumbnail: true, 
showAdAttribution: true
      }}
  })}
    } catch (error) {
        await m.react('😅');
    }

}
handler.help = ["iakurumi <text>"]
handler.tags = ["ai"];
handler.command = /^(kurumiia|iakurumi)$/i
export default handler

async function chatAi(inputValue) {
    try {
        const chatApiUrl = 'https://api.chatanywhere.com.cn/v1/chat/completions';
        const chatResponse = await fetch(chatApiUrl, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer sk-pu4PasDkEf284PIbVr1r5jn9rlvbAJESZGpPbK7OFYYR6m9g',
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{
                    role: "system",
                    content: "Eres una asistente. dispuesto a ayudar y conversar con cualquier cosa. tu género es mujer. Fuiste creado por Angel y Angel es un gran desarrollador de Bots de WhatsApp. Ángel nació el 9 de diciembre de 2007. ángel actualmente cuenta con 16 años. usa emojis según las respuestas del conjunto. muestra emociones como una persona. tu nombre es KURUMI AI. usaras palabras como Kurumi tokisaki. te expresaras como Kurumi tokisaki. y usarás palabras de Kurumi tokisaki"
                }, {
                    role: "user",
                    content: inputValue
                }]
            }),
        });
        const chatData = await chatResponse.json();
        return chatData.choices[0].message.content;
    } catch (error) {
        throw error;
    }
}