//Codígo creado por David Chian wa.me/5351524614

import _0x4a3ffe from 'fs';
import _0x69500d from 'dotenv';
_0x69500d.config();
const SECRET_KEY = process.env.SECRET_KEY;
const loadProfiles = () => {
  try {
    let _0x16a1dc = _0x4a3ffe.readFileSync('./citaperfiles.json', "utf-8");
    return JSON.parse(_0x16a1dc);
  } catch (_0x498d26) {
    console.error("Error al cargar perfiles:", _0x498d26);
    return [];
  }
};
const saveProfiles = _0x128041 => {
  try {
    _0x4a3ffe.writeFileSync('./citaperfiles.json', JSON.stringify(_0x128041, null, 0x2));
  } catch (_0x59e75e) {
    console.error("Error al guardar perfiles:", _0x59e75e);
  }
};
const isUserBanned = (_0x30b35d, _0x269270) => {
  const _0x397001 = _0x269270.find(_0x407900 => _0x407900.id === _0x30b35d);
  return _0x397001 ? _0x397001.bannuser : false;
};
const verifi = () => {
  try {
    const _0x21e43c = JSON.parse(_0x4a3ffe.readFileSync("./package.json", "utf-8"));
    if (_0x21e43c.name !== "Megumin-Bot-MD") {
      return false;
    }
    if (_0x21e43c.repository.url !== "git+https://github.com/David-Chian/Megumin-Bot-MD.git") {
      return false;
    }
    if (SECRET_KEY !== "49rof384foerAlkkO4KF4Tdfoflw") {
      return false;
    }
    return true;
  } catch (_0x4d160e) {
    console.error("Error al leer package.json:", _0x4d160e);
    return false;
  }
};
let handler = async (_0x23a96, {
  conn: _0x31378d,
  text: _0x4b4e15
}) => {
  if (!verifi()) {
    await _0x31378d.reply(_0x23a96.chat, "Este comando solo está disponible para Megumin Bot.\n 🔥 https://github.com/David-Chian/Megumin-Bot-MD", _0x23a96, rcanal);
    return;
  }
  let _0x23aa09 = loadProfiles();
  if (isUserBanned(_0x23a96.sender, _0x23aa09)) {
    return await _0x31378d.reply(_0x23a96.chat, "🚫 Lo sentimos, pero has sido baneado y no puedes usar más este comando.\nSi crees que esto es un error contacta con mi creador.", _0x23a96, rcanal);
  }
  let _0x354409 = loadProfiles();
  let _0x22705c = _0x354409.find(_0x58fe78 => _0x58fe78.id === _0x23a96.sender);
  if (!_0x22705c) {
    await _0x31378d.reply(_0x23a96.chat, "𝑷𝒓𝒊𝒎𝒆𝒓𝒐 𝒖𝒔𝒂 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 */citaboom*𝒑𝒂𝒓𝒂 𝒄𝒓𝒆𝒂𝒓 𝒕𝒖 𝒑𝒆𝒓𝒇𝒊𝒍.", _0x23a96, rcanal);
    return;
  }
  if (!_0x4b4e15) {
    await _0x31378d.reply(_0x23a96.chat, "𝑷𝒐𝒓 𝒇𝒂𝒗𝒐𝒓, 𝒊𝒏𝒈𝒓𝒆𝒔𝒂 𝒖𝒏 𝒏𝒐𝒎𝒃𝒓𝒆 𝒗𝒂𝒍𝒊𝒅𝒐 𝒖𝒔𝒂𝒏𝒅𝒐 𝒆𝒍 𝒇𝒐𝒓𝒎𝒂𝒕𝒐: /nombre TuNombre", _0x23a96, rcanal);
    return;
  }
  _0x22705c.nombre = _0x4b4e15.trim();
  saveProfiles(_0x354409);
  await _0x31378d.sendButton(_0x23a96.chat, "𝑻𝒖 𝒏𝒐𝒎𝒃𝒓𝒆 *" + _0x22705c.nombre + "* 𝒉𝒂 𝒔𝒊𝒅𝒐 𝒄𝒐𝒏𝒇𝒊𝒈𝒖𝒓𝒂𝒅𝒐 𝒄𝒐𝒏 𝒆𝒙𝒊𝒕𝒐. 𝑨𝒉𝒐𝒓𝒂, 𝒄𝒐𝒏𝒇𝒊𝒈𝒖𝒓𝒂 𝒕𝒖 𝒆𝒅𝒂𝒅.", wm, null, [["Configurar Edad 🎂", '/edadcita']], _0x23a96);
};
handler.register = true;
handler["private"] = true;
handler.command = /^nombrecita|nombre|nbc$/i;
export default handler;