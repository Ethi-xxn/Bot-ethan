import fetch from "node-fetch";
import ytdl from 'ytdl-core';
import yts from 'yt-search';
import fs from 'fs';
import {
    pipeline
} from 'stream';
import {
    promisify
} from 'util';
import os from 'os';
import {
    ytmp4
} from '../scraper/ytmp4.js'
import {
    addExif
} from '../lib/sticker.js'
import {
    Sticker
} from 'wa-sticker-formatter'

// regex nya
let dl = /download(kan| kan)?|play(s)?|putar(kan| kan)?|main(kan| kan)?/i
let mp4 = /vid(eo|eos)?/
let mp3 = /lagu|musi(c|k)?(s)?/i
let stik = /(jadi|buat)?(in | in | kan |kan )?sti(c)?ker/i
let foto = /buat (men)?jadi (foto|image)?|ubah(in)? ke (foto|image)?/i
let grup = /(tutup |close |buka |open )?g(c|ro|ru)?(p)?( tutup| close| open| buka)?/i
/**•───── TIXO ✧ MD ─────• **/

let handler = async (m, {
    text,
    isAdmin,
    conn
}) => {

    // download 
    if (dl.exec(text)) {
        let med = ''
        if (mp4.exec(text)) {
            med = mp4.exec(text)[0]
        } else if (mp3.exec(text)) {
            med = mp3.exec(text)[0]
        }

        let cari = dl.exec(text).input.split(med)[1]
        let search = await yts(cari);
        let vid = search.videos[Math.floor(Math.random() * search.videos.length)];
        if (!search) throw 'Video Not Found, Try Another Title';
        let {
            title,
            thumbnail,
            timestamp,
            views,
            ago,
            url
        } = vid;

        if (mp3.exec(text)) {
            await m.reply(wait)
            const streamPipeline = promisify(pipeline);

            const audioStream = ytdl(url, {
                filter: 'audioonly',
                quality: 'highestaudio',
            });

            // Dapatkan jalur ke direktori sementara sistem
            const tmpDir = os.tmpdir();

            // Buat aliran yang dapat ditulis di direktori sementara
            const writableStream = fs.createWriteStream(`${tmpDir}/${m.sender.split('@')[0]}.mp3`);

            // Start the download
            await streamPipeline(audioStream, writableStream);
            let doc = {
                audio: {
                    url: `${tmpDir}/${m.sender.split('@')[0]}.mp3`
                },
                mimetype: 'audio/mp4',
                fileName: title,
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        mediaType: 2,
                        mediaUrl: url,
                        title: title,
                        body: null,
                        sourceUrl: url,
                        thumbnail: await (await conn.getFile(thumbnail)).data
                    }
                }
            };

            await conn.sendMessage(m.chat, doc, {
                quoted: m
            })
        } else if (mp4.exec(text)) {
            await m.reply(wait)
            ytmp4(url).then((result) => {
                const video = result.url
                const title = result.title
                const duration = result.duration
                const cenel = result.channel
                const publish = result.published
                const view = result.views

                conn.sendFile(m.chat, video || emror, title + '.mp4', `
 乂 *Y T M P 4*
 
 ⚘ *title* : ${title}
 ⚘ *channel* : ${cenel}
 ⚘ *publish* : ${publish}
 ⚘ *views* : ${view}
 ⚘ *duration* : ${timestamp}
 ⚘ *resolusi* : 360p
 ⚘ *url* : ${url}

${global.namebot}
`, m)
            })
        }
    } else if (stik.exec(text)) {
        let stiker = false
        try {
            let q = m.quoted ? m.quoted : m
            let mime = (q.msg || q).mimetype || q.mediaType || ''
            if (/webp/g.test(mime)) {
                let img = await q.download?.()
                stiker = await addExif(img, global.packname || '', global.author || '')
            } else if (/image/g.test(mime)) {
                let img = await q.download?.()
                stiker = await createSticker(img, false, global.packname, global.author)
            } else if (/video/g.test(mime)) {
                //	if ((q.msg || q).seconds > 10) throw 'Max 10 seconds!'
                let img = await q.download?.()
                stiker = await mp4ToWebp(img, {
                    packname: global.packname,
                    author: global.author
                })
            } else throw `reply gambarnya kak`
        } catch (e) {
            console.log(e)
            stiker = e
        } finally {
                await m.reply('baiklah tunggu ya')
                
            m.reply(stiker)
        }
    } else if (foto.exec(text)) {
        const quo = m.quoted || m
        let mime = quo.mediaType || ''
        if (/webp/.test(mime)) throw 'reply stiker nya lah🥱'
        let stikerr = await quo.download()
        await m.reply('sabar kak🔮')
        await conn.sendMessage(m.chat, {
            image: stikerr,
            caption: 'nih jadikan😙'
        }, {
            quoted: m
        })
    } else if (grup.exec(text)) {
    
        if (!m.isGroup) throw 'kan ini khusus grup aja kak😅'
if (!isAdmin) return global.dfail('admin', m, this)
        let gb = grup.exec(text)
        if (gb[0].includes('tutup' || 'close')) {
            await conn.groupSettingUpdate(m.chat, 'announcement')
        } else if (gb[0].includes('buka' || 'open')) {
            await conn.groupSettingUpdate(m.chat, 'not_announcement')
        }
        await m.reply('sudah kak✨')
    } else {
        // ai nya
        if (!text) throw 'halo tio disini'
        try {
            let res = await ai([{
                    role: "assistant",
                    content: "Kamu adalah merry. asisten ai yang keren dan kece. gunakan bahasa gaul seperti gw untuk pengganti kata aku dan lu untuk pengganti kata kamu. kamu harus berbicara layaknya orang dewasa dengan pengetahuan yang luas. bersikaplah cuek terhadap semua orang. selalu gunakan emoji disetiap kalimat yang tepat."
                },
                {
                    role: "user",
                    content: text
                }
            ])
            await m.reply(res.answer)
        } catch (e) {
            throw eror
        }
    }
}
handler.help = ['chika']
handler.tags = ['ai']
handler.command = ['chika']

export default handler

async function ai(messages) {

    try {
        const response = await fetch("https://deepenglish.com/wp-json/ai-chatbot/v1/chat", {
            method: "POST",
            headers: {
                Accept: "text/event-stream",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                messages
            })
        });

        return await response.json();
    } catch (error) {
        console.error("An error occurred during data fetching:", error);
        throw error;
    }
}

/**•───── TIXO ✧ MD ─────• **/
// sticker
const isUrl = (text) => text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))

async function createSticker(img, url, packName, authorName, quality) {
    let stickerMetadata = {
        type: 'full',
        pack: packName,
        author: authorName,
        quality
    }
    return (new Sticker(img ? img : url, stickerMetadata)).toBuffer()
}

async function mp4ToWebp(file, stickerMetadata) {
    if (stickerMetadata) {
        if (!stickerMetadata.pack) stickerMetadata.pack = '‎'
        if (!stickerMetadata.author) stickerMetadata.author = '‎'
        if (!stickerMetadata.crop) stickerMetadata.crop = false
    } else if (!stickerMetadata) {
        stickerMetadata = {
            pack: '‎',
            author: '‎',
            crop: false
        }
    }
    let getBase64 = file.toString('base64')
    const Format = {
        file: `data:video/mp4;base64,${getBase64}`,
        processOptions: {
            crop: stickerMetadata?.crop,
            startTime: '00:00:00.0',
            endTime: '00:00:7.0',
            loop: 0
        },
        stickerMetadata: {
            ...stickerMetadata
        },
        sessionInfo: {
            WA_VERSION: '2.2106.5',
            PAGE_UA: 'WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
            WA_AUTOMATE_VERSION: '3.6.10 UPDATE AVAILABLE: 3.6.11',
            BROWSER_VERSION: 'HeadlessChrome/88.0.4324.190',
            OS: 'Windows Server 2016',
            START_TS: 1614310326309,
            NUM: '6247',
            LAUNCH_TIME_MS: 7934,
            PHONE_VERSION: '2.20.205.16'
        },
        config: {
            sessionId: 'session',
            headless: true,
            qrTimeout: 20,
            authTimeout: 0,
            cacheEnabled: false,
            useChrome: true,
            killProcessOnBrowserClose: true,
            throwErrorOnTosBlock: false,
            chromiumArgs: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--aggressive-cache-discard',
                '--disable-cache',
                '--disable-application-cache',
                '--disable-offline-load-stale-cache',
                '--disk-cache-size=0'
            ],
            executablePath: 'C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe',
            skipBrokenMethodsCheck: true,
            stickerServerEndpoint: true
        }
    }
    let res = await fetch('https://sticker-api.openwa.dev/convertMp4BufferToWebpDataUrl', {
        method: 'post',
        headers: {
            Accept: 'application/json, text/plain, /',
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(Format)
    })
    return Buffer.from((await res.text()).split(';base64,')[1], 'base64')
}