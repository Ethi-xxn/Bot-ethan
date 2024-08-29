import C from 'node-fetch';
import x from 'fs';
let nicknameCharIdDict = {};
if (x.existsSync("cai_nicknames.json")) {
  try {
    const fileData = x.readFileSync("cai_nicknames.json", 'utf-8');
    nicknameCharIdDict = JSON.parse(fileData);
  } catch (q) {
    console.error("Error loading JSON file:", q);
  }
}
const nicknames = Object.keys(nicknameCharIdDict);
export async function before(A, {
  conn: i,
  isOwner: G,
  isAdmin: k,
  isROwner: r
}) {
  if (A.text && A.text.startsWith('.')) {
    const M = A.text.split(" ");
    const Q = M[0x0].slice(0x1);
    if (nicknames.includes(Q)) {
      i.sendPresenceUpdate("composing", A.chat);
      const d = nicknameCharIdDict[Q];
      const u = M.slice(0x1).join(" ");
      try {
        const V = await C('https://animecafe-characterai-indratensei.cloud.okteto.net/cai?char=' + d + "&message=" + encodeURIComponent(u));
        const L = await V.json();
        const U = L.text;
        A.reply(U);
      } catch (H) {
        console.error("Error sending request:", H);
      }
    }
  }
}