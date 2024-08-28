//Codígo creado por David Chian wa.me/5351524614

import _0x942614 from 'fs';
import _0x37b859 from '../lib/uploadFile.js';
import _0xd57c0f from '../lib/uploadImage.js';
import 'node-fetch';
import _0x234b6f from 'dotenv';
_0x234b6f.config();
const SECRET_KEY = process.env.SECRET_KEY;
const loadProfiles = () => {
  try {
    let _0xca402e = _0x942614.readFileSync('./citaperfiles.json', "utf-8");
    return JSON.parse(_0xca402e);
  } catch (_0x29510a) {
    console.error("Error al cargar perfiles:", _0x29510a);
    return [];
  }
};
const saveProfiles = _0x49f2f3 => {
  try {
    _0x942614.writeFileSync('./citaperfiles.json', JSON.stringify(_0x49f2f3, null, 0x2));
  } catch (_0x4a8708) {
    console.error("Error al guardar perfiles:", _0x4a8708);
  }
};
const isUserBanned = (_0x4ddd6d, _0x50ff5d) => {
  const _0x7d4b8a = _0x50ff5d.find(_0x46b893 => _0x46b893.id === _0x4ddd6d);
  return _0x7d4b8a ? _0x7d4b8a.bannuser : false;
};
const verifi = () => {
  try {
    const _0x49eaab = JSON.parse(_0x942614.readFileSync('./package.json', "utf-8"));
    if (_0x49eaab.name !== "Megumin-Bot-MD") {
      return false;
    }
    if (_0x49eaab.repository.url !== "git+https://github.com/David-Chian/Megumin-Bot-MD.git") {
      return false;
    }
    if (SECRET_KEY !== '49rof384foerAlkkO4KF4Tdfoflw') {
      return false;
    }
    return true;
  } catch (_0x4b424c) {
    console.error("Error al leer package.json:", _0x4b424c);
    return false;
  }
};
let handler = async (_0x13fbf5, {
  conn: _0x11cbf0
}) => {
  if (!verifi()) {
    await _0x11cbf0.reply(_0x13fbf5.chat, "Este comando solo está disponible para Megumin Bot.\n 🔥 https://github.com/David-Chian/Megumin-Bot-MD", _0x13fbf5, rcanal);
    return;
  }
  let _0x458c74 = loadProfiles();
  if (isUserBanned(_0x13fbf5.sender, _0x458c74)) {
    return await _0x11cbf0.reply(_0x13fbf5.chat, "🚫 Lo sentimos, pero has sido baneado y no puedes usar más este comando.\nSi crees que esto es un error contacta con mi creador.", _0x13fbf5, rcanal);
  }
  let _0x481299 = loadProfiles();
  let _0x4b5ded = _0x481299.find(_0x584423 => _0x584423.id === _0x13fbf5.sender);
  if (!_0x4b5ded) {
    await _0x11cbf0.reply(_0x13fbf5.chat, "𝑷𝒓𝒊𝒎𝒆𝒓𝒐 𝒖𝒔𝒂 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 */citaboom* 𝒑𝒂𝒓𝒂 𝒄𝒓𝒆𝒂𝒓 𝒕𝒖 𝒑𝒆𝒓𝒇𝒊𝒍.", _0x13fbf5, rcanal);
    return;
  }
  let _0x32baa9 = _0x13fbf5.quoted ? _0x13fbf5.quoted : _0x13fbf5;
  let _0x2ccd56 = (_0x32baa9.msg || _0x32baa9).mimetype || '';
  if (!_0x2ccd56) {
    await _0x11cbf0.reply(_0x13fbf5.chat, "𝑷𝒐𝒓 𝒇𝒂𝒗𝒐𝒓, 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂 𝒖𝒏𝒂 𝒊𝒎𝒂𝒈𝒆𝒏 𝒑𝒂𝒓𝒂 𝒔𝒖𝒃𝒊𝒓𝒍𝒂 𝒄𝒐𝒎𝒐 𝒑𝒂𝒓𝒕𝒆 𝒅𝒆 𝒕𝒖 𝒑𝒆𝒓𝒇𝒊𝒍 𝒖𝒔𝒂𝒏𝒅𝒐 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 /foto.", _0x13fbf5, rcanal);
    return;
  }
  await _0x13fbf5.react('⏳');
  try {
    let _0x1178a8 = await _0x32baa9.download();
    let _0x136fec = /image\/(png|jpe?g|gif)|video\/mp4/.test(_0x2ccd56);
    let _0x531bb8 = await (_0x136fec ? _0xd57c0f : _0x37b859)(_0x1178a8);
    _0x4b5ded.fotos.push(_0x531bb8);
    saveProfiles(_0x481299);
    if (_0x4b5ded.fotos.length < 0x2) {
      await _0x11cbf0.reply(_0x13fbf5.chat, "𝑻𝒖 𝒇𝒐𝒕𝒐 𝒔𝒆 𝒉𝒂 𝒔𝒖𝒃𝒊𝒅𝒐 𝒄𝒐𝒏 𝒆𝒙𝒊𝒕𝒐. 𝑷𝒐𝒓 𝒇𝒂𝒗𝒐𝒓, 𝒔𝒖𝒃𝒆 𝒂𝒍 𝒎𝒆𝒏𝒐𝒔 𝒖𝒏𝒂 𝒇𝒐𝒕𝒐 𝒎𝒂𝒔 𝒑𝒂𝒓𝒂 𝒄𝒐𝒎𝒑𝒍𝒆𝒕𝒂𝒓 𝒕𝒖 𝒑𝒆𝒓𝒇𝒊𝒍.", _0x13fbf5, rcanal);
    } else {
      await _0x11cbf0.sendButton(_0x13fbf5.chat, "¡𝑮𝒆𝒏𝒊𝒂𝒍! 𝑯𝒂𝒔 𝒔𝒖𝒃𝒊𝒅𝒐 𝒂𝒍 𝒎𝒆𝒏𝒐𝒔 𝒅𝒐𝒔 𝒇𝒐𝒕𝒐𝒔. 𝑷𝒖𝒆𝒅𝒆𝒔 𝒔𝒖𝒃𝒊𝒓 𝒎𝒂𝒔 𝒔𝒊 𝒍𝒐 𝒅𝒆𝒔𝒆𝒂𝒔 𝒐 𝒇𝒊𝒏𝒂𝒍𝒊𝒛𝒂𝒓 𝒕𝒖 𝒑𝒆𝒓𝒇𝒊𝒍 𝒂𝒉𝒐𝒓𝒂.", wm, null, [["Continuar 💙", '/yoquiero'], ["Subir Otra Foto 📷", "/fotocita"]], _0x13fbf5);
    }
  } catch (_0x47f0df) {
    console.error("Error al procesar la imagen:", _0x47f0df);
    await _0x13fbf5.react('❌');
  }
};
handler.register = true;
handler["private"] = true;
handler.command = /^fotocita|foto|ftc$/i;
export default handler;