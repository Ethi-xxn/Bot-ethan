//Codígo creado por David Chian wa.me/5351524614

import _0x1881e6 from 'fs';
const handler = async (_0x54a6d0, {
  conn: _0x4ea85c,
  command: _0x2eb7a5
}) => {
  if (!_0x1881e6.existsSync('./citaperfiles.json')) {
    return _0x4ea85c.reply(_0x54a6d0.chat, "No hay usuarios registrados todavía.", _0x54a6d0);
  }
  let _0x2f118d = JSON.parse(_0x1881e6.readFileSync('./citaperfiles.json'));
  let _0x41be94 = Object.keys(_0x2f118d).length;
  let _0x2db6bb = 0x0;
  let _0x4d5712 = 0x0;
  let _0x5870ab = 0x0;
  let _0x13928c = 0x0;
  for (let _0x4a9c1c in _0x2f118d) {
    let _0x4e4a3c = _0x2f118d[_0x4a9c1c];
    if (_0x4e4a3c.bannuser) {
      _0x5870ab++;
    } else {
      if (_0x4e4a3c.genero === "Masculino") {
        _0x2db6bb++;
      } else if (_0x4e4a3c.genero === "Femenino") {
        _0x4d5712++;
      }
      if (_0x4e4a3c.matched) {
        _0x13928c += _0x4e4a3c.matched.length;
      }
    }
  }
  let _0x1ca6a6 = Math.floor(_0x13928c / 0x2);
  let _0x5d23cb = "📊 *Dashboard CitaBoom* 📊\n\n" + ("👥 Total de usuarios registrados: " + _0x41be94 + "\n") + ("♂️ Masculino: " + _0x2db6bb + "\n") + ("♀️ Femenino: " + _0x4d5712 + "\n") + ("💘 Matches realizados: " + _0x1ca6a6 + "\n") + ("🚫 Usuarios baneados: " + _0x5870ab);
  _0x4ea85c.reply(_0x54a6d0.chat, _0x5d23cb, _0x54a6d0);
};
handler.command = /^dashcita$/i;
export default handler;