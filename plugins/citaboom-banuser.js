//Codígo creado por David Chian wa.me/5351524614

import _0x242253 from 'fs';
import _0x5b087f from 'path';
let handler = async (_0x2f0ec9, {
  conn: _0x32807f,
  text: _0xbcb58f,
  command: _0xeec090
}) => {
  if (!_0xbcb58f) {
    return _0x2f0ec9.reply("Por favor, proporciona un número del usuario que deseas banear con el comando. Ejemplo: ." + _0xeec090 + " 5492634364011");
  }
  let _0x1c95c8 = _0xbcb58f.trim();
  const _0x4b4d00 = _0x1c95c8 + "@s.whatsapp.net";
  const _0x5a3996 = _0x5b087f.resolve("citaperfiles.json");
  if (!_0x242253.existsSync(_0x5a3996)) {
    return _0x2f0ec9.reply("No se encontró la base de datos de perfiles.");
  }
  let _0xd5d70d = JSON.parse(_0x242253.readFileSync(_0x5a3996, 'utf-8'));
  let _0x330d1b = _0xd5d70d.findIndex(_0x24bcdf => _0x24bcdf.id === _0x4b4d00);
  if (_0x330d1b === -0x1) {
    return _0x2f0ec9.reply("El usuario no está registrado en el sistema.");
  }
  _0xd5d70d[_0x330d1b] = {
    'id': _0x4b4d00,
    'bannuser': true
  };
  _0x242253.writeFileSync(_0x5a3996, JSON.stringify(_0xd5d70d, null, 0x2));
  _0x2f0ec9.reply("El usuario con el número " + _0x1c95c8 + " ha sido baneado y su perfil ha sido eliminado.");
};
handler.tags = ["citaboom"];
handler.help = ["bancita"];
handler.command = /^(bancita)$/i;
handler.rowner = true;
export default handler;