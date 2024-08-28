//Codígo creado por David Chian wa.me/5351524614

import _0x2f4f9d from 'fs';
import _0x37209d from 'dotenv';
_0x37209d.config();
const SECRET_KEY = process.env.SECRET_KEY;
const loadProfiles = () => {
  try {
    let _0x3cac28 = _0x2f4f9d.readFileSync("./citaperfiles.json", "utf-8");
    return JSON.parse(_0x3cac28);
  } catch (_0x2da0df) {
    console.error("Error al cargar perfiles:", _0x2da0df);
    return [];
  }
};
const saveProfiles = _0x2abe0a => {
  try {
    _0x2f4f9d.writeFileSync("./citaperfiles.json", JSON.stringify(_0x2abe0a, null, 0x2));
  } catch (_0x5368df) {
    console.error("Error al guardar perfiles:", _0x5368df);
  }
};
const verifi = () => {
  try {
    const _0x139a88 = JSON.parse(_0x2f4f9d.readFileSync("./package.json", "utf-8"));
    if (_0x139a88.name !== "Megumin-Bot-MD") {
      return false;
    }
    if (_0x139a88.repository.url !== 'git+https://github.com/David-Chian/Megumin-Bot-MD.git') {
      return false;
    }
    if (SECRET_KEY !== "49rof384foerAlkkO4KF4Tdfoflw") {
      return false;
    }
    return true;
  } catch (_0x465da4) {
    console.error("Error al leer package.json:", _0x465da4);
    return false;
  }
};
let handler = async (_0x1fc72d, {
  conn: _0x2c04fd,
  args: _0x599baf
}) => {
  if (!verifi()) {
    await _0x2c04fd.reply(_0x1fc72d.chat, "Este comando solo está disponible para Megumin Bot.\n 🔥 https://github.com/David-Chian/Megumin-Bot-MD", _0x1fc72d, rcanal);
    return;
  }
  let _0x129662 = loadProfiles();
  let _0xce95ba = _0x129662.find(_0x4a7174 => _0x4a7174.id === _0x1fc72d.sender);
  let _0x3bca5f = _0x129662.find(_0x937038 => _0x937038.id === _0x599baf[0x0]);
  if (!_0xce95ba || !_0x3bca5f) {
    await _0x2c04fd.reply(_0x1fc72d.chat, "Ha ocurrido un error al procesar tu solicitud.", _0x1fc72d);
    return;
  }
  _0xce95ba.likes = _0xce95ba.likes || [];
  _0x3bca5f.likes = _0x3bca5f.likes || [];
  if (!_0xce95ba.likes.includes(_0x3bca5f.id)) {
    _0xce95ba.likes.push(_0x3bca5f.id);
  }
  saveProfiles(_0x129662);
  try {
    await _0x2c04fd.sendButton(_0x3bca5f.id, _0xce95ba.nombre + " 𝒆𝒔𝒕𝒂 𝒊𝒏𝒕𝒆𝒓𝒆𝒔𝒂𝒅𝒐 𝒆𝒏 𝒕𝒊. ¿𝑻𝒆 𝒈𝒖𝒔𝒕𝒂𝒓𝒊𝒂 𝒗𝒆𝒓 𝒔𝒖 𝒑𝒆𝒓𝒇𝒊𝒍?\n𝑺𝒊 𝒏𝒐 𝒆𝒔𝒕𝒂𝒔 𝒊𝒏𝒕𝒆𝒓𝒆𝒔𝒂𝒅𝒐/𝒂 𝒔𝒐𝒍𝒐 𝒊𝒈𝒏𝒐𝒓𝒂 𝒆𝒔𝒕𝒆 𝒎𝒆𝒏𝒔𝒂𝒋𝒆.", "𝐼𝑛𝑡𝑒𝑟𝑒𝑠 𝑒𝑛 𝑡𝑢 𝑝𝑒𝑟𝑓𝑖𝑙", null, [["Mostrar Perfil", "/mostrarperfil " + _0xce95ba.id]], _0x1fc72d);
  } catch (_0x1c5755) {
    console.error("Error al enviar el mensaje:", _0x1c5755);
    await _0x2c04fd.reply(_0x1fc72d.chat, "❌️ *OCURRIÓ UN ERROR:* " + _0x1c5755.message, _0x1fc72d);
    return;
  }
};
handler.register = true;
handler['private'] = true;
handler.command = /^perfilinteres$/i;
export default handler;