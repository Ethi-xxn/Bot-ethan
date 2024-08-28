//Codígo creado por David Chian wa.me/5351524614

import _0x1d33a0 from 'fs';
import _0xde944f from 'dotenv';
_0xde944f.config();
const SECRET_KEY = process.env.SECRET_KEY;
const loadProfiles = () => {
  try {
    let _0x378284 = _0x1d33a0.readFileSync("./citaperfiles.json", "utf-8");
    return JSON.parse(_0x378284);
  } catch (_0x43a02e) {
    console.error("Error al cargar perfiles:", _0x43a02e);
    return [];
  }
};
const saveProfiles = _0x5041c3 => {
  try {
    _0x1d33a0.writeFileSync("./citaperfiles.json", JSON.stringify(_0x5041c3, null, 0x2));
  } catch (_0x508beb) {
    console.error("Error al guardar perfiles:", _0x508beb);
  }
};
const verifi = () => {
  try {
    const _0x5dd11d = JSON.parse(_0x1d33a0.readFileSync('./package.json', "utf-8"));
    if (_0x5dd11d.name !== 'Megumin-Bot-MD') {
      return false;
    }
    if (_0x5dd11d.repository.url !== "git+https://github.com/David-Chian/Megumin-Bot-MD.git") {
      return false;
    }
    if (SECRET_KEY !== "49rof384foerAlkkO4KF4Tdfoflw") {
      return false;
    }
    return true;
  } catch (_0xa13f68) {
    console.error("Error al leer package.json:", _0xa13f68);
    return false;
  }
};
let handler = async (_0x14b78d, {
  conn: _0xdbf6cf
}) => {
  if (!verifi()) {
    await _0xdbf6cf.reply(_0x14b78d.chat, "Este comando solo está disponible para Megumin Bot.\n 🔥 https://github.com/David-Chian/Megumin-Bot-MD", _0x14b78d, rcanal);
    return;
  }
  let _0x1ea182 = loadProfiles();
  let _0x31b5c2 = _0x1ea182.findIndex(_0x4e5b5a => _0x4e5b5a.id === _0x14b78d.sender);
  if (_0x31b5c2 === -0x1) {
    await _0xdbf6cf.reply(_0x14b78d.chat, "𝑵𝒐 𝒕𝒊𝒆𝒏𝒆𝒔 𝒖𝒏 𝒑𝒆𝒓𝒇𝒊𝒍 𝒆𝒏 𝒄𝒐𝒏𝒇𝒊𝒈𝒖𝒓𝒂𝒄𝒊ó𝒏.", _0x14b78d, rcanal);
    return;
  }
  _0x1ea182.splice(_0x31b5c2, 0x1);
  saveProfiles(_0x1ea182);
  await _0xdbf6cf.reply(_0x14b78d.chat, "𝑻𝒖 𝒑𝒆𝒓𝒇𝒊𝒍 𝒉𝒂 𝒔𝒊𝒅𝒐 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒅𝒐.", _0x14b78d, rcanal);
};
handler.register = true;
handler["private"] = true;
handler.tags = ['citaboom'];
handler.help = ["cancelarperfil"];
handler.command = /^cancelarperfil$/i;
export default handler;