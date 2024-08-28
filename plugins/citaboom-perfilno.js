//Codígo creado por David Chian wa.me/5351524614

import _0x1b077e from 'fs';
import _0x5503de from 'dotenv';
_0x5503de.config();
const SECRET_KEY = process.env.SECRET_KEY;
const loadProfiles = () => {
  if (!_0x1b077e.existsSync("./citaperfiles.json")) {
    _0x1b077e.writeFileSync("./citaperfiles.json", '[]');
  }
  try {
    let _0x41c27a = _0x1b077e.readFileSync("./citaperfiles.json", "utf-8");
    return JSON.parse(_0x41c27a);
  } catch (_0x1895b5) {
    console.error("Error al cargar perfiles:", _0x1895b5);
    return [];
  }
};
const saveProfiles = _0xe06e5 => {
  try {
    _0x1b077e.writeFileSync("./citaperfiles.json", JSON.stringify(_0xe06e5, null, 0x2));
  } catch (_0x49f4e0) {
    console.error("Error al guardar perfiles:", _0x49f4e0);
  }
};
const verifi = () => {
  try {
    const _0x56da05 = JSON.parse(_0x1b077e.readFileSync("./package.json", 'utf-8'));
    if (_0x56da05.name !== "Megumin-Bot-MD") {
      return false;
    }
    if (_0x56da05.repository.url !== "git+https://github.com/David-Chian/Megumin-Bot-MD.git") {
      return false;
    }
    if (SECRET_KEY !== "49rof384foerAlkkO4KF4Tdfoflw") {
      return false;
    }
    return true;
  } catch (_0x565f0b) {
    console.error("Error al leer package.json:", _0x565f0b);
    return false;
  }
};
let handler = async (_0x26c6c7, {
  conn: _0x128434
}) => {
  if (!verifi()) {
    await _0x128434.reply(_0x26c6c7.chat, "Este comando solo está disponible para Megumin Bot.\n 🔥 https://github.com/David-Chian/Megumin-Bot-MD", _0x26c6c7, rcanal);
    return;
  }
  let _0x29ae54 = loadProfiles();
  let _0x525da2 = _0x29ae54.find(_0x53f851 => _0x53f851.id === _0x26c6c7.sender);
  if (!_0x525da2) {
    await _0x128434.reply(_0x26c6c7.chat, "𝑵𝒐 𝒕𝒊𝒆𝒏𝒆𝒔 𝒖𝒏 𝒑𝒆𝒓𝒇𝒊𝒍 𝒄𝒓𝒆𝒂𝒅𝒐. 𝑼𝒔𝒂 */citaboom* 𝒑𝒂𝒓𝒂 𝒄𝒓𝒆𝒂𝒓 𝒕𝒖 𝒑𝒆𝒓𝒇𝒊𝒍.", _0x26c6c7, rcanal);
    return;
  }
  if (!_0x525da2.matched) {
    _0x525da2.matched = [];
  }
  if (!_0x525da2.currentProfile) {
    _0x525da2.currentProfile = null;
  }
  _0x525da2.currentProfile = null;
  await _0x128434.sendButton(_0x26c6c7.chat, "¿𝑫𝒆𝒔𝒆𝒂𝒔 𝒔𝒆𝒈𝒖𝒊𝒓 𝒗𝒊𝒆𝒏𝒅𝒐 𝒐𝒕𝒓𝒐𝒔 𝒑𝒆𝒓𝒇𝒊𝒍𝒆𝒔?", '𝐶𝑜𝑛𝑡𝑖𝑛𝑢𝑎𝑟', null, [["Continuar 💙", "/perfilescita"]], _0x26c6c7);
  saveProfiles(_0x29ae54);
};
handler.register = true;
handler['private'] = true;
handler.command = /^perfilno$/i;
export default handler;