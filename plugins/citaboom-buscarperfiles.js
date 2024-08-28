//Codígo creado por David Chian wa.me/5351524614

import _0xf9b516 from 'fs';
const {
  proto,
  generateWAMessageFromContent,
  generateWAMessageContent,
  prepareWAMessageMedia,
  getDevice
} = (await import('@whiskeysockets/baileys'))["default"];
import _0x324cb5 from 'dotenv';
_0x324cb5.config();
const SECRET_KEY = process.env.SECRET_KEY;
const loadProfiles = () => {
  try {
    let _0x2c1e81 = _0xf9b516.readFileSync("./citaperfiles.json", "utf-8");
    return JSON.parse(_0x2c1e81);
  } catch (_0x4c30a7) {
    console.error("Error al cargar perfiles:", _0x4c30a7);
    return [];
  }
};
const saveProfiles = _0xe4c7b4 => {
  try {
    _0xf9b516.writeFileSync("./citaperfiles.json", JSON.stringify(_0xe4c7b4, null, 0x2));
  } catch (_0x347afd) {
    console.error("Error al guardar perfiles:", _0x347afd);
  }
};
const verifi = () => {
  try {
    const _0x45bb59 = JSON.parse(_0xf9b516.readFileSync("./package.json", 'utf-8'));
    if (_0x45bb59.name !== "Megumin-Bot-MD") {
      return false;
    }
    if (_0x45bb59.repository.url !== "git+https://github.com/David-Chian/Megumin-Bot-MD.git") {
      return false;
    }
    if (SECRET_KEY !== "49rof384foerAlkkO4KF4Tdfoflw") {
      return false;
    }
    return true;
  } catch (_0x21ce92) {
    console.error("Error al leer package.json:", _0x21ce92);
    return false;
  }
};
let handler = async (_0x2e37d6, {
  conn: _0x1ef1b3
}) => {
  if (!verifi()) {
    await _0x1ef1b3.reply(_0x2e37d6.chat, "Este comando solo está disponible para Megumin Bot.\n 🔥 https://github.com/David-Chian/Megumin-Bot-MD", _0x2e37d6, rcanal);
    return;
  }
  let _0x548c69 = loadProfiles();
  let _0x4e8149 = _0x548c69.find(_0x1fa210 => _0x1fa210.id === _0x2e37d6.sender);
  if (!_0x4e8149) {
    await _0x1ef1b3.reply(_0x2e37d6.chat, "𝑵𝒐 𝒕𝒊𝒆𝒏𝒆𝒔 𝒖𝒏 𝒑𝒆𝒓𝒇𝒊𝒍 𝒄𝒓𝒆𝒂𝒅𝒐. 𝑼𝒔𝒂 /citaboom 𝒑𝒂𝒓𝒂 𝒄𝒓𝒆𝒂𝒓 𝒕𝒖 𝒑𝒆𝒓𝒇𝒊𝒍.", _0x2e37d6, rcanal);
    return;
  }
  if (!_0x4e8149.matched) {
    _0x4e8149.matched = [];
  }
  if (!_0x4e8149.currentProfile) {
    _0x4e8149.currentProfile = null;
  }
  let _0x42167a = _0x548c69.filter(_0x4c306c => _0x4c306c.genero !== _0x4e8149.genero && !_0x4e8149.matched.includes(_0x4c306c.id) && _0x4c306c.id !== _0x4e8149.currentProfile);
  if (_0x42167a.length === 0x0) {
    await _0x1ef1b3.reply(_0x2e37d6.chat, "𝑵𝒐 𝒉𝒂𝒚 𝒎𝒂𝒔 𝒑𝒆𝒓𝒇𝒊𝒍𝒆𝒔 𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆𝒔 𝒑𝒂𝒓𝒂 𝒕𝒊 𝒆𝒏 𝒆𝒔𝒕𝒆 𝒎𝒐𝒎𝒆𝒏𝒕𝒐.", _0x2e37d6, rcanal);
    return;
  }
  let _0x573b7c = _0x42167a[Math.floor(Math.random() * _0x42167a.length)];
  _0x4e8149.currentProfile = _0x573b7c.id;
  async function _0x4a6d59(_0x3f0709) {
    const {
      imageMessage: _0x40df6f
    } = await generateWAMessageContent({
      'image': {
        'url': _0x3f0709
      }
    }, {
      'upload': _0x1ef1b3.waUploadToServer
    });
    return _0x40df6f;
  }
  try {
    let _0x1d21ad = [];
    for (let _0xdec526 of _0x573b7c.fotos) {
      _0x1d21ad.push({
        'body': proto.Message.InteractiveMessage.Body.fromObject({
          'text': null
        }),
        'header': proto.Message.InteractiveMessage.Header.fromObject({
          'title': "Foto de " + _0x573b7c.nombre,
          'hasMediaAttachment': true,
          'imageMessage': await _0x4a6d59(_0xdec526)
        }),
        'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          'buttons': []
        })
      });
    }
    const _0x3eb4eb = generateWAMessageFromContent(_0x2e37d6.chat, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.fromObject({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': "Perfil de " + _0x573b7c.nombre + " \nEdad: " + _0x573b7c.edad + " \nGénero: " + _0x573b7c.genero
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': _0x573b7c.quiero ? _0x573b7c.quiero : "No has configurado una intención."
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'hasMediaAttachment': false
            }),
            'carouselMessage': proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              'cards': [..._0x1d21ad]
            })
          })
        }
      }
    }, {
      'quoted': _0x2e37d6
    });
    await _0x1ef1b3.relayMessage(_0x2e37d6.chat, _0x3eb4eb.message, {
      'messageId': _0x3eb4eb.key.id
    });
    await _0x1ef1b3.sendButton(_0x2e37d6.chat, "¿𝑻𝒆 𝒊𝒏𝒕𝒆𝒓𝒆𝒔𝒂 𝒄𝒐𝒏𝒐𝒄𝒆𝒓 𝒂 " + _0x573b7c.nombre + '?', "𝐶𝑜𝑛𝑓𝑖𝑟𝑚𝑎𝑐𝑖𝑜𝑛 𝑑𝑒 𝑝𝑒𝑟𝑓𝑖𝑙", null, [["Sí ❤", "/perfilinteres " + _0x573b7c.id], ["No 💤", "/perfilescita"]], _0x2e37d6);
  } catch (_0x5d9af8) {
    console.error(_0x5d9af8);
    await _0x1ef1b3.reply(_0x2e37d6.chat, "❌️ *OCURRIÓ UN ERROR:* " + _0x5d9af8.message, _0x2e37d6);
  }
  saveProfiles(_0x548c69);
};
handler.register = true;
handler["private"] = true;
handler.tags = ["citaboom"];
handler.help = ["buscarpareja"];
handler.command = /^perfilescita|buscarperfil|buscarpareja|bcp|encontrarpareja$/i;
export default handler;