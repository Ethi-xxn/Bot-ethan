//Codígo creado por David Chian wa.me/5351524614

import _0x4a8a43 from 'fs';
import _0xdac98d from 'dotenv';
_0xdac98d.config();
const SECRET_KEY = process.env.SECRET_KEY;
const loadProfiles = () => {
  try {
    let _0x25e5b1 = _0x4a8a43.readFileSync("./citaperfiles.json", "utf-8");
    return JSON.parse(_0x25e5b1);
  } catch (_0x37e840) {
    console.error("Error al cargar perfiles:", _0x37e840);
    return [];
  }
};
const saveProfiles = _0x2871e4 => {
  try {
    _0x4a8a43.writeFileSync("./citaperfiles.json", JSON.stringify(_0x2871e4, null, 0x2));
  } catch (_0x1c39ce) {
    console.error("Error al guardar perfiles:", _0x1c39ce);
  }
};
const isUserBanned = (_0x291767, _0x161110) => {
  const _0x3b8544 = _0x161110.find(_0x523a98 => _0x523a98.id === _0x291767);
  return _0x3b8544 ? _0x3b8544.bannuser : false;
};
const verifi = () => {
  try {
    const _0x5ec402 = JSON.parse(_0x4a8a43.readFileSync("./package.json", "utf-8"));
    if (_0x5ec402.name !== "Megumin-Bot-MD") {
      return false;
    }
    if (_0x5ec402.repository.url !== "git+https://github.com/David-Chian/Megumin-Bot-MD.git") {
      return false;
    }
    if (SECRET_KEY !== "49rof384foerAlkkO4KF4Tdfoflw") {
      return false;
    }
    return true;
  } catch (_0xded0ed) {
    console.error("Error al leer package.json:", _0xded0ed);
    return false;
  }
};
let handler = async (_0x3334de, {
  conn: _0x5be80a,
  text: _0x1a9391
}) => {
  if (!verifi()) {
    await _0x5be80a.reply(_0x3334de.chat, "Este comando solo está disponible para Megumin Bot.\n 🔥 https://github.com/David-Chian/Megumin-Bot-MD", _0x3334de, rcanal);
    return;
  }
  let _0x1ff88d = loadProfiles();
  if (isUserBanned(_0x3334de.sender, _0x1ff88d)) {
    return await _0x5be80a.reply(_0x3334de.chat, "🚫 Lo sentimos, pero has sido baneado y no puedes usar más este comando.\nSi crees que esto es un error contacta con mi creador.", _0x3334de, rcanal);
  }
  let _0x53f518 = loadProfiles();
  let _0x2edf2b = _0x53f518.find(_0x5f0ed2 => _0x5f0ed2.id === _0x3334de.sender);
  if (!_0x2edf2b) {
    await _0x5be80a.reply(_0x3334de.chat, "𝑷𝒓𝒊𝒎𝒆𝒓𝒐 𝒖𝒔𝒂 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 */citaboom* 𝒑𝒂𝒓𝒂 𝒄𝒓𝒆𝒂𝒓 𝒕𝒖 𝒑𝒆𝒓𝒇𝒊𝒍.", _0x3334de, rcanal);
    return;
  }
  if (!_0x1a9391) {
    await _0x5be80a.sendButton(_0x3334de.chat, "𝑩𝒊𝒆𝒏, 𝒑𝒐𝒓 𝒖𝒍𝒕𝒊𝒎𝒐, ¿𝒆𝒏 𝒒𝒖𝒆 𝒑𝒊𝒆𝒏𝒔𝒂𝒔? 𝑫𝒊𝒍𝒆 𝒂 𝒍𝒐𝒔 𝒐𝒕𝒓𝒐𝒔 𝒄𝒐𝒎𝒑𝒂ñ𝒆𝒓𝒐𝒔 𝒒𝒖𝒆 𝒒𝒖𝒊𝒆𝒓𝒆𝒔 𝒉𝒂𝒄𝒆𝒓 𝒄𝒖𝒂𝒏𝒅𝒐 𝒍𝒐𝒔 𝒄𝒐𝒏𝒐𝒛𝒄𝒂𝒔. 𝑨𝒒𝒖𝒊 𝒂𝒃𝒂𝒋𝒐 𝒕𝒆 𝒅𝒆𝒋𝒂𝒓𝒆𝒎𝒐𝒔 𝒂𝒍𝒈𝒖𝒏𝒐𝒔 𝒆𝒋𝒆𝒎𝒑𝒍𝒐𝒔. 𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆𝒔 𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒍𝒊𝒛𝒂𝒓𝒍𝒐 𝒕𝒖 𝒎𝒊𝒔𝒎𝒐?\n𝑼𝒕𝒊𝒍𝒊𝒛𝒂 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 `/𝒚𝒐𝒒𝒖𝒊𝒆𝒓𝒐 (𝒍𝒐 𝒒𝒖𝒆 𝒒𝒖𝒊𝒆𝒓𝒂𝒔)`.", "Puedes elegir entre estos ejemplos:", null, [["Conocer nuevos amigos y ver qué surge 🌸", "/yoquiero Quiero conocer nuevos amigos y ver qué surge 🌸"], ["Encontrar el amor verdadero 💘", "/yoquiero Quiero encontrar el amor verdadero 💘"], ["Solo charlar ☕", "/yoquiero Quiero solo charlar ☕"], ["Salir a divertirme 🎉", "/yoquiero Quiero salir a divertirme 🎉"], ["Hacer nuevos contactos profesionales 💼", "/yoquiero Quiero hacer nuevos contactos profesionales 💼"]], _0x3334de);
  } else {
    _0x2edf2b.quiero = _0x1a9391;
    saveProfiles(_0x53f518);
    await _0x5be80a.sendButton(_0x3334de.chat, "¡𝑮𝒆𝒏𝒊𝒂𝒍! 𝑯𝒂𝒔 𝒂𝒈𝒓𝒆𝒈𝒂𝒅𝒐 𝒕𝒖 𝒊𝒏𝒕𝒆𝒏𝒄𝒊𝒐𝒏: \"" + _0x1a9391 + "\". 𝑷𝒖𝒆𝒅𝒆𝒔 𝒇𝒊𝒏𝒂𝒍𝒊𝒛𝒂𝒓 𝒕𝒖 𝒑𝒆𝒓𝒇𝒊𝒍 𝒂𝒉𝒐𝒓𝒂.", "𝐹𝑖𝑛𝑎𝑙𝑖𝑧𝑎𝑟 𝑃𝑒𝑟𝑓𝑖𝑙", null, [["Finalizar Perfil ✅", '/finalizarperfil']], _0x3334de);
  }
};
handler.register = true;
handler["private"] = true;
handler.command = /^yoquiero$/i;
export default handler;