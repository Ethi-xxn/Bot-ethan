//Codígo creado por David Chian wa.me/5351524614

import _0x645923 from 'fs';
import 'path';
import _0x106456 from 'dotenv';
_0x106456.config();
const SECRET_KEY = process.env.SECRET_KEY;
const loadProfiles = () => {
  try {
    let _0x1487cf = _0x645923.readFileSync('./citaperfiles.json', "utf-8");
    return JSON.parse(_0x1487cf);
  } catch (_0x5a3b4d) {
    console.error("Error al cargar perfiles:", _0x5a3b4d);
    return [];
  }
};
const saveProfiles = _0x1220d9 => {
  try {
    _0x645923.writeFileSync('./citaperfiles.json', JSON.stringify(_0x1220d9, null, 0x2));
  } catch (_0x2cc7e3) {
    console.error("Error al guardar perfiles:", _0x2cc7e3);
  }
};
const verify = () => {
  try {
    const _0x502188 = JSON.parse(_0x645923.readFileSync('./package.json', "utf-8"));
    if (_0x502188.name !== "Megumin-Bot-MD") {
      return false;
    }
    if (_0x502188.repository.url !== "git+https://github.com/David-Chian/Megumin-Bot-MD.git") {
      return false;
    }
    if (SECRET_KEY !== "49rof384foerAlkkO4KF4Tdfoflw") {
      return false;
    }
    return true;
  } catch (_0xffe937) {
    console.error("Error al leer package.json:", _0xffe937);
    return false;
  }
};
const isUserBanned = (_0x314cb6, _0x1fa467) => {
  const _0x2811a8 = _0x1fa467.find(_0x58c369 => _0x58c369.id === _0x314cb6);
  return _0x2811a8 ? _0x2811a8.bannuser : false;
};
let handler = async (_0x161eb8, {
  conn: _0xffce83
}) => {
  if (!verify()) {
    await _0xffce83.reply(_0x161eb8.chat, "Este comando solo está disponible para Megumin Bot.\n 🔥 https://github.com/David-Chian/Megumin-Bot-MD", _0x161eb8, rcanal);
    return;
  }
  let _0x552e6e = loadProfiles();
  if (isUserBanned(_0x161eb8.sender, _0x552e6e)) {
    return await _0xffce83.reply(_0x161eb8.chat, "🚫 Lo sentimos, pero has sido baneado y no puedes usar más este comando.\nSi crees que esto es un error contacta con mi creador.", _0x161eb8, rcanal);
  }
  let _0x19f6dd = loadProfiles();
  let _0x207376 = _0x19f6dd.find(_0x34197a => _0x34197a.id === _0x161eb8.sender);
  if (!_0x207376) {
    _0x207376 = {
      'id': _0x161eb8.sender,
      'nombre': null,
      'edad': null,
      'genero': null,
      'fotos': [],
      'quiero': null
    };
    _0x19f6dd.push(_0x207376);
    saveProfiles(_0x19f6dd);
    await _0xffce83.sendButton(_0x161eb8.chat, "╭ׅׄ̇─ׅ̻ׄ╮۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹߭̇╭ׅׄ̇─ׅ̻ׄ╮\n├ׁ̟̇「 ᴃɪᴇɳᴃᴇɲɪᴅᴏ ᴀ 𝘾𝙄𝙏𝘼𝘽𝙊𝙊𝙈 」\n╰━┈━┈━┈≪≪✧≫≫┈━┈━┈━╯\n𝑬𝒔𝒕𝒆 𝒆𝒔 𝒖𝒏 𝒆𝒔𝒑𝒂𝒄𝒊𝒐 𝒑𝒂𝒓𝒂 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒓 𝒂 𝒕𝒖 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 𝒆𝒔𝒑𝒆𝒄𝒊𝒂𝒍.", "𝑷𝒂𝒓𝒂 𝒆𝒎𝒑𝒆𝒛𝒂𝒓, 𝒑𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒄𝒓𝒆𝒂 𝒕𝒖 𝒑𝒆𝒓𝒇𝒊𝒍.\n" + dev, 'https://telegra.ph/file/2828be47ab320e30e0a94.jpg', [["Nombre 💖", '/nombrecita']], null, [["⏤‌‌ू⃪ ፝‌⁞M‌ᴇɢ፝֟ᴜᴍ⃨ɪɴ⃜✰⃔࿐", '' + md]], _0x161eb8);
  } else {
    if (!_0x207376.nombre) {
      await _0xffce83.sendButton(_0x161eb8.chat, "𝑷𝒂𝒓𝒆𝒄𝒆 𝒒𝒖𝒆 𝒂𝒖𝒏 𝒏𝒐 𝒉𝒂𝒔 𝒄𝒐𝒏𝒇𝒊𝒈𝒖𝒓𝒂𝒅𝒐 𝒕𝒖 𝒏𝒐𝒎𝒃𝒓𝒆. 𝑷𝒂𝒓𝒂 𝒉𝒂𝒄𝒆𝒓𝒍𝒐, 𝒖𝒔𝒂 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 */nombre* 𝒔𝒆𝒈𝒖𝒊𝒅𝒐 𝒅𝒆 𝒕𝒖 𝒏𝒐𝒎𝒃𝒓𝒆.", wm, 'https://telegra.ph/file/2828be47ab320e30e0a94.jpg', [["Configurar Nombre 💖", "/nombrecita"]], _0x161eb8);
    } else {
      if (!_0x207376.edad) {
        await _0xffce83.sendButton(_0x161eb8.chat, "¡𝑯𝒐𝒍𝒂 " + _0x207376.nombre + "! 𝑨𝒉𝒐𝒓𝒂, 𝒄𝒐𝒏𝒇𝒊𝒈𝒖𝒓𝒂 𝒕𝒖 𝒆𝒅𝒂𝒅 𝒖𝒔𝒂𝒏𝒅𝒐 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 */edad* 𝒔𝒆𝒈𝒖𝒊𝒅𝒐 𝒅𝒆 𝒕𝒖 𝒆𝒅𝒂𝒅.", wm, 'https://telegra.ph/file/2828be47ab320e30e0a94.jpg', [["Configurar Edad 🎂", "/edadcita"]], _0x161eb8);
      } else {
        if (!_0x207376.genero) {
          await _0xffce83.sendButton(_0x161eb8.chat, "¡𝑯𝒐𝒍𝒂 " + _0x207376.nombre + "! 𝑺𝒆𝒍𝒆𝒄𝒄𝒊𝒐𝒏𝒂 𝒕𝒖 𝒈𝒆𝒏𝒆𝒓𝒐 𝒑𝒂𝒓𝒂 𝒄𝒐𝒏𝒕𝒊𝒏𝒖𝒂𝒓.", wm, 'https://telegra.ph/file/2828be47ab320e30e0a94.jpg', [["Masculino ♂️", "/generocita Masculino"], ["Femenino ♀️", "/generocita Femenino"]], _0x161eb8);
        } else {
          if (_0x207376.fotos.length < 0x2) {
            await _0xffce83.sendButton(_0x161eb8.chat, "¡𝒀𝒂 𝒄𝒂𝒔𝒊 𝒕𝒆𝒓𝒎𝒊𝒏𝒂𝒎𝒐𝒔 " + _0x207376.nombre + "! 𝑺𝒖𝒃𝒆 𝒂𝒍 𝒎𝒆𝒏𝒐𝒔 𝒅𝒐𝒔 𝒇𝒐𝒕𝒐𝒔 𝒑𝒂𝒓𝒂 𝒇𝒊𝒏𝒂𝒍𝒊𝒛𝒂𝒓 𝒕𝒖 𝒑𝒆𝒓𝒇𝒊𝒍. 𝑼𝒔𝒂 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 */foto* 𝒑𝒂𝒓𝒂 𝒔𝒖𝒃𝒊𝒓𝒍𝒂𝒔.", wm, 'https://telegra.ph/file/2828be47ab320e30e0a94.jpg', [["Subir Foto📷", '/fotocita']], _0x161eb8);
          } else {
            if (!_0x207376.quiero) {
              await _0xffce83.sendButton(_0x161eb8.chat, "𝑷𝒐𝒓 𝒖𝒍𝒕𝒊𝒎𝒐, ¿𝒆𝒏 𝒒𝒖𝒆 𝒑𝒊𝒆𝒏𝒔𝒂𝒔? 𝑫𝒊𝒍𝒆 𝒂 𝒍𝒐𝒔 𝒐𝒕𝒓𝒐𝒔 𝒄𝒐𝒎𝒑𝒂ñ𝒆𝒓𝒐𝒔 𝒒𝒖𝒆 𝒒𝒖𝒊𝒆𝒓𝒆𝒔 𝒉𝒂𝒄𝒆𝒓 𝒄𝒖𝒂𝒏𝒅𝒐 𝒍𝒐𝒔 𝒄𝒐𝒏𝒐𝒛𝒄𝒂𝒔:\n 𝑼𝒕𝒊𝒍𝒊𝒛𝒂 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 `/𝒚𝒐𝒒𝒖𝒊𝒆𝒓𝒐 (𝒍𝒐 𝒒𝒖𝒆 𝒒𝒖𝒊𝒆𝒓𝒂𝒔)`.", "Elige entre algunos ejemplos:", 'https://telegra.ph/file/2828be47ab320e30e0a94.jpg', [["Conocer nuevos amigos 🌸", "/yoquiero Quiero conocer nuevos amigos 🌸"], ["Encontrar el amor verdadero 💘", "/yoquiero Quiero encontrar el amor verdadero 💘"], ["Solo charlar ☕", "/yoquiero Quiero solo charlar ☕"], ["Salir a divertirme 🎉", "/yoquiero Quiero salir a divertirme 🎉"], ["Hacer nuevos contactos profesionales 💼", "/yoquiero Quiero hacer nuevos contactos profesionales 💼"]], _0x161eb8);
              return;
            } else {
              await _0xffce83.sendButton(_0x161eb8.chat, "𝑻𝒖 𝒑𝒆𝒓𝒇𝒊𝒍 𝒆𝒔𝒕𝒂 𝒍𝒊𝒔𝒕𝒐, " + _0x207376.nombre + ". 𝑷𝒖𝒆𝒅𝒆𝒔 𝒗𝒊𝒔𝒖𝒂𝒍𝒊𝒛𝒂𝒓 𝒕𝒖 𝒄𝒐𝒏𝒇𝒊𝒈𝒖𝒓𝒂𝒄𝒊𝒐𝒏 𝒐 𝒄𝒂𝒏𝒄𝒆𝒍𝒂𝒓𝒍𝒂.", wm, 'https://telegra.ph/file/2828be47ab320e30e0a94.jpg', [["Buscar Perfiles ❤️‍🔥", "/buscarpareja"], ["Ver Perfil ✅", "/finalizarperfil"], ["Cancelar Perfil ❌", "/cancelarperfil"]], _0x161eb8);
            }
          }
        }
      }
    }
  }
};
handler.register = true;
handler["private"] = true;
handler.tags = ["citaboom"];
handler.help = ["citaboom"];
handler.command = /^citaboom$/i;
export default handler;