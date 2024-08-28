//Codígo creado por David Chian wa.me/5351524614

import _0x1df231 from 'fs';
const {
  proto,
  generateWAMessageFromContent,
  generateWAMessageContent,
  prepareWAMessageMedia
} = (await import("@whiskeysockets/baileys"))["default"];
import _0x51645f from 'dotenv';
_0x51645f.config();
const SECRET_KEY = process.env.SECRET_KEY;
const loadProfiles = () => {
  try {
    let _0xf1817e = _0x1df231.readFileSync('./citaperfiles.json', 'utf-8');
    return JSON.parse(_0xf1817e);
  } catch (_0x145fec) {
    console.error("Error al cargar perfiles:", _0x145fec);
    return [];
  }
};
const saveProfiles = _0x331900 => {
  try {
    _0x1df231.writeFileSync('./citaperfiles.json', JSON.stringify(_0x331900, null, 0x2));
  } catch (_0x1c39eb) {
    console.error("Error al guardar perfiles:", _0x1c39eb);
  }
};
const verifi = () => {
  try {
    const _0x2ed303 = JSON.parse(_0x1df231.readFileSync("./package.json", "utf-8"));
    if (_0x2ed303.name !== "Megumin-Bot-MD") {
      return false;
    }
    if (_0x2ed303.repository.url !== "git+https://github.com/David-Chian/Megumin-Bot-MD.git") {
      return false;
    }
    if (SECRET_KEY !== "49rof384foerAlkkO4KF4Tdfoflw") {
      return false;
    }
    return true;
  } catch (_0x2961dc) {
    console.error("Error al leer package.json:", _0x2961dc);
    return false;
  }
};
let handler = async (_0x2651b3, {
  conn: _0x4e2a61,
  args: _0x334983
}) => {
  if (!verifi()) {
    await _0x4e2a61.reply(_0x2651b3.chat, "Este comando solo está disponible para Megumin Bot.\n 🔥 https://github.com/David-Chian/Megumin-Bot-MD", _0x2651b3, rcanal);
    return;
  }
  let _0x5751c6 = loadProfiles();
  let _0x406807 = _0x5751c6.find(_0xe58889 => _0xe58889.id === _0x2651b3.sender);
  let _0x31b777 = _0x5751c6.find(_0x209b19 => _0x209b19.id === _0x334983[0x0]);
  if (!_0x406807 || !_0x31b777) {
    await _0x4e2a61.reply(_0x2651b3.chat, "Ha ocurrido un error al procesar tu solicitud.", _0x2651b3);
    return;
  }
  if (!_0x406807.matched) {
    _0x406807.matched = [];
  }
  if (!_0x406807.candidates) {
    _0x406807.candidates = [];
  }
  if (!_0x406807.candidates.includes(_0x31b777.id)) {
    _0x406807.candidates.push(_0x31b777.id);
  }
  async function _0x3ffb5c(_0x57934e) {
    const {
      imageMessage: _0x22609d
    } = await generateWAMessageContent({
      'image': {
        'url': _0x57934e
      }
    }, {
      'upload': _0x4e2a61.waUploadToServer
    });
    return _0x22609d;
  }
  try {
    let _0x17bcf4 = [];
    for (let _0x26358c of _0x31b777.fotos) {
      _0x17bcf4.push({
        'body': proto.Message.InteractiveMessage.Body.fromObject({
          'text': null
        }),
        'header': proto.Message.InteractiveMessage.Header.fromObject({
          'title': "Foto de " + _0x31b777.nombre,
          'hasMediaAttachment': true,
          'imageMessage': await _0x3ffb5c(_0x26358c)
        }),
        'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          'buttons': []
        })
      });
    }
    const _0x57b0c7 = generateWAMessageFromContent(_0x2651b3.chat, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.fromObject({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': "Perfil de " + _0x31b777.nombre + "\nEdad: " + _0x31b777.edad + "\nGénero: " + _0x31b777.genero
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': _0x31b777.quiero ? _0x31b777.quiero : "No has configurado una intención."
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'hasMediaAttachment': false
            }),
            'carouselMessage': proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              'cards': [..._0x17bcf4]
            })
          })
        }
      }
    }, {
      'quoted': _0x2651b3
    });
    await _0x4e2a61.relayMessage(_0x2651b3.chat, _0x57b0c7.message, {
      'messageId': _0x57b0c7.key.id
    });
    await _0x4e2a61.sendButton(_0x2651b3.chat, "¿𝑻𝒆 𝒊𝒏𝒕𝒆𝒓𝒆𝒔𝒂 𝒄𝒐𝒏𝒐𝒄𝒆𝒓 𝒂 " + _0x31b777.nombre + '?', "𝐶𝑜𝑛𝑓𝑖𝑟𝑚𝑎𝑐𝑖𝑜𝑛 𝑑𝑒 𝑝𝑒𝑟𝑓𝑖𝑙", null, [["Sí ❤️", "/matchcita " + _0x31b777.id], ["No 💤", "/perfilno " + _0x31b777.id]], _0x2651b3);
  } catch (_0x32276e) {
    console.error(_0x32276e);
    await _0x4e2a61.reply(_0x2651b3.chat, "❌️ *OCURRIÓ UN ERROR:* " + _0x32276e.message, _0x2651b3);
  }
  saveProfiles(_0x5751c6);
};
handler.register = true;
handler["private"] = true;
handler.command = /^mostrarperfil$/i;
export default handler;