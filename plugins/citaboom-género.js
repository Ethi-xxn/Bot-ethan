//Codígo creado por David Chian wa.me/5351524614

import _0x50402b from 'fs';
import _0x36ae16 from 'dotenv';
_0x36ae16.config();
const SECRET_KEY = process.env.SECRET_KEY;
const loadProfiles = () => {
  try {
    let _0x482f3f = _0x50402b.readFileSync("./citaperfiles.json", 'utf-8');
    return JSON.parse(_0x482f3f);
  } catch (_0x4ff802) {
    console.error("Error al cargar perfiles:", _0x4ff802);
    return [];
  }
};
const saveProfiles = _0x523da1 => {
  try {
    _0x50402b.writeFileSync("./citaperfiles.json", JSON.stringify(_0x523da1, null, 0x2));
  } catch (_0x3a9ba2) {
    console.error("Error al guardar perfiles:", _0x3a9ba2);
  }
};
const isUserBanned = (_0x58e9f3, _0x4cd3db) => {
  const _0x1d0bd8 = _0x4cd3db.find(_0x14c1d8 => _0x14c1d8.id === _0x58e9f3);
  return _0x1d0bd8 ? _0x1d0bd8.bannuser : false;
};
const verifi = () => {
  try {
    const _0x535509 = JSON.parse(_0x50402b.readFileSync("./package.json", 'utf-8'));
    if (_0x535509.name !== 'Megumin-Bot-MD') {
      return false;
    }
    if (_0x535509.repository.url !== 'git+https://github.com/David-Chian/Megumin-Bot-MD.git') {
      return false;
    }
    if (SECRET_KEY !== "49rof384foerAlkkO4KF4Tdfoflw") {
      return false;
    }
    return true;
  } catch (_0x4c078a) {
    console.error("Error al leer package.json:", _0x4c078a);
    return false;
  }
};
let handler = async (_0x597eed, {
  conn: _0x571b14,
  text: _0x4d69b4
}) => {
  if (!verifi()) {
    await _0x571b14.reply(_0x597eed.chat, "Este comando solo está disponible para Megumin Bot.\n 🔥 https://github.com/David-Chian/Megumin-Bot-MD", _0x597eed, rcanal);
    return;
  }
  let _0xf79991 = loadProfiles();
  if (isUserBanned(_0x597eed.sender, _0xf79991)) {
    return await _0x571b14.reply(_0x597eed.chat, "🚫 Lo sentimos, pero has sido baneado y no puedes usar más este comando.\nSi crees que esto es un error contacta con mi creador.", _0x597eed, rcanal);
  }
  let _0x52a6ee = loadProfiles();
  let _0x16ba37 = _0x52a6ee.find(_0x2806cf => _0x2806cf.id === _0x597eed.sender);
  if (!_0x16ba37) {
    await _0x571b14.reply(_0x597eed.chat, "𝑷𝒓𝒊𝒎𝒆𝒓𝒐 𝒖𝒔𝒂 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 */citaboom*𝒑𝒂𝒓𝒂 𝒄𝒓𝒆𝒂𝒓 𝒕𝒖 𝒑𝒆𝒓𝒇𝒊𝒍.", _0x597eed, rcanal);
    return;
  }
  if (_0x4d69b4 !== 'Masculino' && _0x4d69b4 !== 'Femenino') {
    await _0x571b14.reply(_0x597eed.chat, "𝑷𝒐𝒓 𝒇𝒂𝒗𝒐𝒓, 𝒔𝒆𝒍𝒆𝒄𝒄𝒊𝒐𝒏𝒂 𝒖𝒏 𝒈𝒆𝒏𝒆𝒓𝒐 𝒗𝒂𝒍𝒊𝒅𝒐 𝒖𝒔𝒂𝒏𝒅𝒐 𝒍𝒐𝒔 𝒃𝒐𝒕𝒐𝒏𝒆𝒔.", _0x597eed, rcanal);
    return;
  }
  _0x16ba37.genero = _0x4d69b4;
  saveProfiles(_0x52a6ee);
  await _0x571b14.sendButton(_0x597eed.chat, "𝑻𝒖 𝒈𝒆𝒏𝒆𝒓𝒐 *" + _0x16ba37.genero + "* 𝒉𝒂 𝒔𝒊𝒅𝒐 𝒄𝒐𝒏𝒇𝒊𝒈𝒖𝒓𝒂𝒅𝒐 𝒄𝒐𝒏 𝒆𝒙𝒊𝒕𝒐. 𝑨𝒉𝒐𝒓𝒂, 𝒔𝒖𝒃𝒆 𝒂𝒍 𝒎𝒆𝒏𝒐𝒔 𝒅𝒐𝒔 𝒇𝒐𝒕𝒐𝒔 𝒑𝒂𝒓𝒂 𝒄𝒐𝒎𝒑𝒍𝒆𝒕𝒂𝒓 𝒕𝒖 𝒑𝒆𝒓𝒇𝒊𝒍.", wm, null, [["Subir Foto 📷", "/fotocita"]], _0x597eed);
};
handler.register = true;
handler["private"] = true;
handler.command = /^generocita|genero|gnc$/i;
export default handler;