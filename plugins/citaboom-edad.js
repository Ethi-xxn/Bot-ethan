//Codígo creado por David Chian wa.me/5351524614

import _0x20e6bb from 'fs';
import _0x5d8d2e from 'dotenv';
_0x5d8d2e.config();
const SECRET_KEY = process.env.SECRET_KEY;
const loadProfiles = () => {
  try {
    let _0x33cff8 = _0x20e6bb.readFileSync("./citaperfiles.json", "utf-8");
    return JSON.parse(_0x33cff8);
  } catch (_0x533c33) {
    console.error("Error al cargar perfiles:", _0x533c33);
    return [];
  }
};
const saveProfiles = _0x45f691 => {
  try {
    _0x20e6bb.writeFileSync("./citaperfiles.json", JSON.stringify(_0x45f691, null, 0x2));
  } catch (_0xbb9541) {
    console.error("Error al guardar perfiles:", _0xbb9541);
  }
};
const isUserBanned = (_0x2119e9, _0x448787) => {
  const _0x58315d = _0x448787.find(_0x222bc2 => _0x222bc2.id === _0x2119e9);
  return _0x58315d ? _0x58315d.bannuser : false;
};
const verifi = () => {
  try {
    const _0x156768 = JSON.parse(_0x20e6bb.readFileSync('./package.json', "utf-8"));
    if (_0x156768.name !== "Megumin-Bot-MD") {
      return false;
    }
    if (_0x156768.repository.url !== "git+https://github.com/David-Chian/Megumin-Bot-MD.git") {
      return false;
    }
    if (SECRET_KEY !== "49rof384foerAlkkO4KF4Tdfoflw") {
      return false;
    }
    return true;
  } catch (_0xf8808e) {
    console.error("Error al leer package.json:", _0xf8808e);
    return false;
  }
};
let handler = async (_0x2b8093, {
  conn: _0x4fa9d2,
  text: _0x536d11
}) => {
  if (!verifi()) {
    await _0x4fa9d2.reply(_0x2b8093.chat, "Este comando solo está disponible para Megumin Bot.\n 🔥 https://github.com/David-Chian/Megumin-Bot-MD", _0x2b8093, rcanal);
    return;
  }
  let _0x38148b = loadProfiles();
  if (isUserBanned(_0x2b8093.sender, _0x38148b)) {
    return await _0x4fa9d2.reply(_0x2b8093.chat, "🚫 Lo sentimos, pero has sido baneado y no puedes usar más este comando.\nSi crees que esto es un error contacta con mi creador.", _0x2b8093, rcanal);
  }
  let _0x5a5f1f = loadProfiles();
  let _0x502414 = _0x5a5f1f.find(_0x462dbb => _0x462dbb.id === _0x2b8093.sender);
  if (!_0x502414) {
    await _0x4fa9d2.reply(_0x2b8093.chat, "𝑷𝒓𝒊𝒎𝒆𝒓𝒐 𝒖𝒔𝒂 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 */citaboom*𝒑𝒂𝒓𝒂 𝒄𝒓𝒆𝒂𝒓 𝒕𝒖 𝒑𝒆𝒓𝒇𝒊𝒍.", _0x2b8093, rcanal);
    return;
  }
  let _0x1f81d5 = parseInt(_0x536d11.trim());
  if (isNaN(_0x1f81d5) || _0x1f81d5 <= 0x0) {
    await _0x4fa9d2.reply(_0x2b8093.chat, "𝑷𝒐𝒓 𝒇𝒂𝒗𝒐𝒓, 𝒊𝒏𝒈𝒓𝒆𝒔𝒂 𝒖𝒏𝒂 𝒆𝒅𝒂𝒅 𝒗𝒂𝒍𝒊𝒅𝒂 𝒖𝒔𝒂𝒏𝒅𝒐 𝒆𝒍 𝒇𝒐𝒓𝒎𝒂𝒕𝒐: /edad TuEdad", _0x2b8093, rcanal);
    return;
  }
  _0x502414.edad = _0x1f81d5;
  saveProfiles(_0x5a5f1f);
  await _0x4fa9d2.sendButton(_0x2b8093.chat, "𝑻𝒖 𝒆𝒅𝒂𝒅 *" + _0x502414.edad + "* 𝒉𝒂 𝒔𝒊𝒅𝒐 𝒄𝒐𝒏𝒇𝒊𝒈𝒖𝒓𝒂𝒅𝒂 𝒄𝒐𝒏 𝒆𝒙𝒊𝒕𝒐. 𝑨𝒉𝒐𝒓𝒂, 𝒔𝒆𝒍𝒆𝒄𝒄𝒊𝒐𝒏𝒂 𝒕𝒖 𝒈𝒆𝒏𝒆𝒓𝒐.", wm, null, [["Masculino ♂️", "/generocita Masculino"], ["Femenino ♀️", "/generocita Femenino"]], _0x2b8093);
};
handler.register = true;
handler['private'] = true;
handler.command = /^edadcita|edad|edc$/i;
export default handler;