const handler = async (m, {conn, text}) => {
  const id = m.chat;
  conn.math = conn.math ? conn.math : {};
  if (id in conn.math) {
    clearTimeout(conn.math[id][3]);
    delete conn.math[id];
    m.reply('مهلا !! انت تغش');
  }
  const val = text
      .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/π|pi/gi, 'Math.PI')
      .replace(/e/gi, 'Math.E')
      .replace(/\/+/g, '/')
      .replace(/\++/g, '+')
      .replace(/-+/g, '-');
  const format = val
      .replace(/Math\.PI/g, 'π')
      .replace(/Math\.E/g, 'e')
      .replace(/\//g, '÷')
      .replace(/\*×/g, '×');
  try {
    console.log(val);
    const result = (new Function('return ' + val))();
    if (!result) throw result;
    m.reply(`*${format}* = _${result}_`);
  } catch (e) {
    if (e == undefined) throw '*[❗] حط المعادله ال انت عاوز تحسبها*';
    throw '*[❗] التنسيق لا يسمح للأرقام والرموز -, +, *, /, ×, ÷, π, e, (, )*';
  }
};
handler.help = ['calc <expression>'];
handler.tags = ['tools'];
handler.command = /^(calc(ulat(e|or))?|اجابة|اجابه|اجابة?)$/i;
handler.exp = 5;
export default handler;
