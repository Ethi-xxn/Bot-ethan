//Codígo creado por David Chian wa.me/5351524614

import _0x40d6c3 from 'fs';
import _0x5e0357 from 'dotenv';
_0x5e0357.config();
const SECRET_KEY = process.env.SECRET_KEY;
const loadProfiles = () => {
  try {
    let _0x57f1b5 = _0x40d6c3.readFileSync('./citaperfiles.json', "utf-8");
    return JSON.parse(_0x57f1b5);
  } catch (_0x58fa56) {
    console.error("Error al cargar perfiles:", _0x58fa56);
    return [];
  }
};
const saveProfiles = _0x5b0570 => {
  try {
    _0x40d6c3.writeFileSync('./citaperfiles.json', JSON.stringify(_0x5b0570, null, 0x2));
  } catch (_0xead3e) {
    console.error("Error al guardar perfiles:", _0xead3e);
  }
};
const verifi = () => {
  try {
    const _0x42e9a2 = JSON.parse(_0x40d6c3.readFileSync("./package.json", 'utf-8'));
    if (_0x42e9a2.name !== 'Megumin-Bot-MD') {
      return false;
    }
    if (_0x42e9a2.repository.url !== 'git+https://github.com/David-Chian/Megumin-Bot-MD.git') {
      return false;
    }
    if (SECRET_KEY !== '49rof384foerAlkkO4KF4Tdfoflw') {
      return false;
    }
    return true;
  } catch (_0x3c437d) {
    console.error("Error al leer package.json:", _0x3c437d);
    return false;
  }
};
const checkForMatch = async (_0x281ec5, _0xa632af, _0x27a24c, _0x19c2fa, _0x1d7397) => {
  _0x27a24c.likes = _0x27a24c.likes || [];
  _0x27a24c.matched = _0x27a24c.matched || [];
  _0x19c2fa.likes = _0x19c2fa.likes || [];
  _0x19c2fa.matched = _0x19c2fa.matched || [];
  const _0x110b7c = _0x19c2fa.likes.includes(_0x27a24c.id);
  if (!_0x27a24c.likes.includes(_0x19c2fa.id)) {
    _0x27a24c.likes.push(_0x19c2fa.id);
  }
  if (_0x110b7c) {
    if (!_0x27a24c.matched.includes(_0x19c2fa.id)) {
      _0x27a24c.matched.push(_0x19c2fa.id);
      _0x27a24c.matchesCount = (_0x27a24c.matchesCount || 0x0) + 0x1;
    }
    if (!_0x19c2fa.matched.includes(_0x27a24c.id)) {
      _0x19c2fa.matched.push(_0x27a24c.id);
      _0x19c2fa.matchesCount = (_0x19c2fa.matchesCount || 0x0) + 0x1;
    }
    saveProfiles(_0xa632af);
    await _0x281ec5.sendMessage(_0x27a24c.id, {
      'text': "¡𝑭𝒆𝒍𝒊𝒄𝒊𝒅𝒂𝒅𝒆𝒔! 𝑯𝒂𝒔 𝒉𝒆𝒄𝒉𝒐 𝒖𝒏 𝒎𝒂𝒕𝒄𝒉 𝒄𝒐𝒏 " + _0x19c2fa.nombre + ". 𝑺𝒖 𝒏𝒖𝒎𝒆𝒓𝒐 𝒅𝒆 𝒄𝒐𝒏𝒕𝒂𝒄𝒕𝒐 𝒆𝒔: https://wa.me/" + _0x19c2fa.id.split('@')[0x0] + '.'
    });
    await _0x281ec5.sendMessage(_0x19c2fa.id, {
      'text': "¡𝑭𝒆𝒍𝒊𝒄𝒊𝒅𝒂𝒅𝒆𝒔! 𝑯𝒂𝒔 𝒉𝒆𝒄𝒉𝒐 𝒖𝒏 𝒎𝒂𝒕𝒄𝒉 𝒄𝒐𝒏 " + _0x27a24c.nombre + ". 𝑺𝒖 𝒏𝒖𝒎𝒆𝒓𝒐 𝒅𝒆 𝒄𝒐𝒏𝒕𝒂𝒄𝒕𝒐 𝒆𝒔: https://wa.me/" + _0x27a24c.id.split('@')[0x0] + '.'
    });
  } else {
    await _0x281ec5.reply(_0x1d7397.chat, "𝑯𝒂𝒔 𝒎𝒐𝒔𝒕𝒓𝒂𝒅𝒐 𝒊𝒏𝒕𝒆𝒓𝒆𝒔 𝒆𝒏 " + _0x19c2fa.nombre + ". 𝑺𝒊 𝒕𝒂𝒎𝒃𝒊𝒆𝒏 𝒆𝒔𝒕𝒂 𝒊𝒏𝒕𝒆𝒓𝒆𝒔𝒂𝒅𝒐(𝒂), 𝒕𝒆 𝒏𝒐𝒕𝒊𝒇𝒊𝒄𝒂𝒓𝒆𝒎𝒐𝒔 𝒅𝒆𝒍 𝒎𝒂𝒕𝒄𝒉.", _0x1d7397);
  }
};
let handler = async (_0x32b56f, {
  conn: _0x13cab2,
  args: _0xedbbd
}) => {
  if (!verifi()) {
    await _0x13cab2.reply(_0x32b56f.chat, "Este comando solo está disponible para Megumin Bot.\n 🔥 https://github.com/David-Chian/Megumin-Bot-MD", _0x32b56f, rcanal);
    return;
  }
  let _0x4d9d6b = loadProfiles();
  let _0x19f388 = _0x4d9d6b.find(_0x48948c => _0x48948c.id === _0x32b56f.sender);
  let _0x82c971 = _0x4d9d6b.find(_0x4df39a => _0x4df39a.id === _0xedbbd[0x0]);
  if (!_0x19f388 || !_0x82c971) {
    await _0x13cab2.reply(_0x32b56f.chat, "Ha ocurrido un error al procesar tu solicitud.", _0x32b56f);
    return;
  }
  await checkForMatch(_0x13cab2, _0x4d9d6b, _0x19f388, _0x82c971, _0x32b56f);
};
handler.register = true;
handler["private"] = true;
handler.command = /^matchcita$/i;
export default handler;