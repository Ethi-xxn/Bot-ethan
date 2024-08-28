//Codígo creado por David Chian wa.me/5351524614

import _0x5232ed from 'fs';
const {
  proto,
  generateWAMessageFromContent,
  prepareWAMessageMedia,
  generateWAMessageContent,
  getDevice
} = (await import("@whiskeysockets/baileys"))["default"];
import _0x13bdc9 from 'dotenv';
_0x13bdc9.config();
const SECRET_KEY = process.env.SECRET_KEY;
const loadProfiles = () => {
  try {
    let _0x43095f = _0x5232ed.readFileSync('./citaperfiles.json', "utf-8");
    return JSON.parse(_0x43095f);
  } catch (_0x34d8c5) {
    console.error("Error al cargar perfiles:", _0x34d8c5);
    return [];
  }
};
const loadBannedUsers = () => {
  try {
    let _0xddac58 = _0x5232ed.readFileSync("./bannedUsers.json", "utf-8");
    return JSON.parse(_0xddac58);
  } catch (_0x56997f) {
    console.error("Error al cargar usuarios baneados:", _0x56997f);
    return [];
  }
};
const verifi = () => {
  try {
    const _0x5009db = JSON.parse(_0x5232ed.readFileSync("./package.json", "utf-8"));
    if (_0x5009db.name !== "Megumin-Bot-MD") {
      return false;
    }
    if (_0x5009db.repository.url !== "git+https://github.com/David-Chian/Megumin-Bot-MD.git") {
      return false;
    }
    if (SECRET_KEY !== "49rof384foerAlkkO4KF4Tdfoflw") {
      return false;
    }
    return true;
  } catch (_0x47abbd) {
    console.error("Error al leer package.json:", _0x47abbd);
    return false;
  }
};
let handler = async (_0x52dc21, {
  conn: _0x3fd2b1
}) => {
  if (!verifi()) {
    await _0x3fd2b1.reply(_0x52dc21.chat, "Este comando solo está disponible para Megumin Bot.\n 🔥 https://github.com/David-Chian/Megumin-Bot-MD", _0x52dc21, rcanal);
    return;
  }
  let _0x35c7e1 = loadBannedUsers();
  if (_0x35c7e1.includes(_0x52dc21.sender)) {
    await _0x3fd2b1.reply(m.chat, "🚫 Lo sentimos, pero has sido baneado y no puedes usar más este comando.", _0x52dc21, rcanal);
    return;
  }
  let _0x4583be = loadProfiles();
  let _0x1c0e1d = _0x4583be.find(_0x1cc76f => _0x1cc76f.id === _0x52dc21.sender);
  if (!_0x1c0e1d || !_0x1c0e1d.nombre || !_0x1c0e1d.edad || !_0x1c0e1d.genero || _0x1c0e1d.fotos.length < 0x2 || !_0x1c0e1d.quiero) {
    await _0x3fd2b1.reply(_0x52dc21.chat, "𝑻𝒖 𝒑𝒆𝒓𝒇𝒊𝒍 𝒏𝒐 𝒆𝒔𝒕á 𝒄𝒐𝒎𝒑𝒍𝒆𝒕𝒐. 𝑷𝒐𝒓 𝒇𝒂𝒗𝒐𝒓, 𝒄𝒐𝒎𝒑𝒍𝒆𝒕𝒂 𝒕𝒐𝒅𝒐𝒔 𝒍𝒐𝒔 𝒑𝒂𝒔𝒐𝒔 𝒂𝒏𝒕𝒆𝒔 𝒅𝒆 𝒇𝒊𝒏𝒂𝒍𝒊𝒛𝒂𝒓.", _0x52dc21, rcanal);
    return;
  }
  async function _0x33e297(_0x24439d) {
    const {
      imageMessage: _0x3af8c1
    } = await generateWAMessageContent({
      'image': {
        'url': _0x24439d
      }
    }, {
      'upload': _0x3fd2b1.waUploadToServer
    });
    return _0x3af8c1;
  }
  try {
    let _0x4e24d9 = [];
    for (let _0xbf5991 of _0x1c0e1d.fotos) {
      _0x4e24d9.push({
        'body': proto.Message.InteractiveMessage.Body.fromObject({
          'text': null
        }),
        'header': proto.Message.InteractiveMessage.Header.fromObject({
          'title': "Foto de " + _0x1c0e1d.nombre,
          'hasMediaAttachment': true,
          'imageMessage': await _0x33e297(_0xbf5991)
        }),
        'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          'buttons': []
        })
      });
    }
    const _0x2370dd = generateWAMessageFromContent(_0x52dc21.chat, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.fromObject({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': "Perfil de " + _0x1c0e1d.nombre + " - Edad: " + _0x1c0e1d.edad + ", Género: " + _0x1c0e1d.genero
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': _0x1c0e1d.quiero ? _0x1c0e1d.quiero : "No has configurado una intención."
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'hasMediaAttachment': false
            }),
            'carouselMessage': proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              'cards': [..._0x4e24d9]
            })
          })
        }
      }
    }, {
      'quoted': _0x52dc21
    });
    await _0x3fd2b1.relayMessage(_0x52dc21.chat, _0x2370dd.message, {
      'messageId': _0x2370dd.key.id
    });
    await _0x3fd2b1.sendButton(_0x52dc21.chat, "𝑻𝒖 𝒑𝒆𝒓𝒇𝒊𝒍 𝒆𝒔𝒕𝒂 𝒄𝒂𝒔𝒊 𝒍𝒊𝒔𝒕𝒐, " + _0x1c0e1d.nombre + ". 𝑷𝒖𝒆𝒅𝒆𝒔 𝒇𝒊𝒏𝒂𝒍𝒊𝒛𝒂𝒓 𝒍𝒂 𝒄𝒐𝒏𝒇𝒊𝒈𝒖𝒓𝒂𝒄𝒊ó𝒏 𝒐 𝒄𝒂𝒏𝒄𝒆𝒍𝒂𝒓𝒍𝒂.", "𝐶𝑜𝑛𝑓𝑖𝑟𝑚𝑎𝑐𝑖𝑜𝑛 𝑑𝑒 𝑝𝑒𝑟𝑓𝑖𝑙", null, [["Continuar ⭐️", "/perfilescita"], ["Cancelar Perfil ❌", '/cancelarperfil']], _0x52dc21);
  } catch (_0x3cc73e) {
    console.error(_0x3cc73e);
    await _0x3fd2b1.reply(_0x52dc21.chat, "❌️ *OCURRIÓ UN ERROR:* " + _0x3cc73e.message, _0x52dc21);
  }
};
handler.register = true;
handler["private"] = true;
handler.command = /^finalizarperfil$/i;
export default handler;