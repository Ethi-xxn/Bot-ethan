//Codígo creado por David Chian wa.me/5351524614

import _0x5340c6 from 'fs';
import _0x106589 from 'path';
let handler = async (_0x3d6e8e, {
  conn: _0x30190d,
  text: _0x4b2593,
  command: _0x2ad284
}) => {
  if (!_0x4b2593) {
    return _0x3d6e8e.reply("Por favor, proporciona un número del usuario que deseas desbanear con el comando. Ejemplo: ." + _0x2ad284 + " 5492634364011");
  }
  let _0xeade8d = _0x4b2593.trim();
  const _0x455acc = _0xeade8d + "@s.whatsapp.net";
  const _0x1ec53d = _0x106589.resolve('citaperfiles.json');
  if (!_0x5340c6.existsSync(_0x1ec53d)) {
    return _0x3d6e8e.reply("No se encontró la base de datos de perfiles.");
  }
  let _0x5ce67f = JSON.parse(_0x5340c6.readFileSync(_0x1ec53d, "utf-8"));
  let _0x404c96 = _0x5ce67f.findIndex(_0x121ba8 => _0x121ba8.id === _0x455acc);
  if (_0x404c96 === -0x1) {
    return _0x3d6e8e.reply("El usuario no está registrado en el sistema.");
  }
  _0x5ce67f.splice(_0x404c96, 0x1);
  _0x5340c6.writeFileSync(_0x1ec53d, JSON.stringify(_0x5ce67f, null, 0x2));
  _0x3d6e8e.reply("El perfil del usuario con el número " + _0xeade8d + " ha sido eliminado y el ban ha sido removido.");
};
handler.tags = ['citaboom'];
handler.help = ["unbancita"];
handler.command = /^(unbancita)$/i;
handler.rowner = true;
export default handler;