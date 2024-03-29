import { performance } from 'perf_hooks';

const handler = async (m, { conn, text }) => {
  const start = performance.now();
  const end = performance.now();
  const executionTime = (end - start);

  const ipParts = [];
  for (let i = 0; i < 4; i++) {
    ipParts.push(Math.floor(Math.random() * 256));
  }
  const ipAddress = ipParts.join('.');
  const fakeData = {
    name_tag: '',
    ip: `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`,
    fakeCameraLink: `http://${ipAddress}.com/camera-feed`,
    n: Math.floor(Math.random() * 100000),
    w: (Math.random() * (20 - 10) + 10).toFixed(4),
    ssNumber: Math.floor(Math.random() * 10000000000000000),
    ipv6: `fe80:${(Math.random() * 65535).toString(16)}:${(Math.random() * 65535).toString(16)}:${(Math.random() * 65535).toString(16)}:${(Math.random() * 65535).toString(16)}%${Math.floor(Math.random() * 100)}`,
    upnp: getRandomValue(['Enabled', 'Disabled']),
    dmz: `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`,
    mac: `${Math.floor(Math.random() * 256).toString(16).toUpperCase()}:${Math.floor(Math.random() * 256).toString(16).toUpperCase()}:${Math.floor(Math.random() * 256).toString(16).toUpperCase()}:${Math.floor(Math.random() * 256).toString(16).toUpperCase()}:${Math.floor(Math.random() * 256).toString(16).toUpperCase()}:${Math.floor(Math.random() * 256).toString(16).toUpperCase()}`,
    isp: getRandomValue(['Ucom universal', 'ISP Co', 'Internet Solutions Inc']),
    dns: `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`,
    altDns: `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`,
    dnsSuffix: getRandomValue(['Dlink', 'DNS', 'ISPsuffix']),
    wan: `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`,
    wanType: getRandomValue(['private nat', 'public nat', 'Dynamic IP']),
    gateway: `192.${Math.floor(Math.random() * 256)}.0.1`,
    subnetMask: `255.255.${Math.floor(Math.random() * 256)}.0`,
    udpOpenPorts: `${Math.floor(Math.random() * 10000)}.${Math.floor(Math.random() * 10000)}`,
    tcpOpenPorts: `${Math.floor(Math.random() * 10000)}`,
    routerVendor: getRandomValue(['ERICCSON', 'TPLINK', 'Cisco']),
    deviceVendor: getRandomValue(['WIN32-X', 'Device Co', 'SecureTech']),
    connectionType: getRandomValue(['TPLINK COMPANY', 'ISP Connect', 'Home Network']),
    icmphops: `192.${Math.floor(Math.random() * 256)}.0.1 192.${Math.floor(Math.random() * 256)}.1.1 100.${Math.floor(Math.random() * 256)}.43.4`,
    http: `192.168.${Math.floor(Math.random() * 256)}.1:433-->92.28.211.234:80`,
    http2: `192.168.${Math.floor(Math.random() * 256)}.625-->92.28.211.455:80`,
    http3: `192.168.${Math.floor(Math.random() * 256)}.817-->92.28.211.8:971`,
    udp: `192.168.${Math.floor(Math.random() * 256)}.452-->92.28.211.7265288`,
    tcp1: `192.168.${Math.floor(Math.random() * 256)}.682-->92.28.211.62227.7`,
    tcp2: `192.168.${Math.floor(Math.random() * 256)}.725-->92.28.211.67wu2`,
    tcp3: `192.168.${Math.floor(Math.random() * 256)}.629-->92.28.211.167:8615`,
    externalMac: `${Math.floor(Math.random() * 256).toString(16).toUpperCase()}:${Math.floor(Math.random() * 256).toString(16).toUpperCase()}:${Math.floor(Math.random() * 256).toString(16).toUpperCase()}:${Math.floor(Math.random() * 256).toString(16).toUpperCase()}:${Math.floor(Math.random() * 256).toString(16).toUpperCase()}:${Math.floor(Math.random() * 256).toString(16).toUpperCase()}`,
    modemJumps: Math.floor(Math.random() * 100),
  };

  if (m.mentionedJid[0]) {
    fakeData.name_tag = text;
  } else {
    fakeData.name_tag = text;
  }

  const doxeo = `*[ ✔ ] تم كشف معلومات الشخص بنجاح.*\n\n*—◉ معلومات الكشف:*\n*◉ ${executionTime} ثانية.*\n*—◉ النتائج:*\n\n*الاسم:* ${fakeData.name_tag}\n*IP:* ${fakeData.ip}\n*N:* ${fakeData.n}\n*W:* ${fakeData.w}\n*رقم SS:* ${fakeData.ssNumber}\n*رابط الكاميرا:* ${fakeData.fakeCameraLink}\n*IPv6:* ${fakeData.ipv6}\n*UPNP:* ${fakeData.upnp}\n*DMZ:* ${fakeData.dmz}\n*MAC:* ${fakeData.mac}\n*ISP:* ${fakeData.isp}\n*DNS:* ${fakeData.dns}\n*ALT DNS:* ${fakeData.altDns}\n*DNS SUFFIX:* ${fakeData.dnsSuffix}\n*WAN:* ${fakeData.wan}\n*نوع الاتصال:* ${fakeData.wanType}\n*البوابة:* ${fakeData.gateway}\n*قناع الشبكة:* ${fakeData.subnetMask}\n*منافذ UDP المفتوحة:* ${fakeData.udpOpenPorts}\n*منافذ TCP المفتوحة:* ${fakeData.tcpOpenPorts}\n*مورد الجهاز:* ${fakeData.routerVendor}\n*مورد الجهاز:* ${fakeData.deviceVendor}\n*نوع الاتصال:* ${fakeData.connectionType}\n*عدد القفزات ICMP:* ${fakeData.icmphops}\n*HTTP:* ${fakeData.http}\n*HTTP:* ${fakeData.http2}\n*HTTP:* ${fakeData.http3}\n*UDP:* ${fakeData.udp}\n*TCP:* ${fakeData.tcp1}\n*TCP:* ${fakeData.tcp2}\n*TCP:* ${fakeData.tcp3}\n*MAC الخارجي:* ${fakeData.externalMac}\n*عدد قفزات الجهاز:* ${fakeData.modemJumps}`;

  async function loading() {
    var hawemod = [
      "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
      "《 ████▒▒▒▒▒▒▒▒》30%",
      "《 ███████▒▒▒▒▒》50%",
      "《 ██████████▒▒》80%",
      "《 ████████████》100%"
    ];
    let { key } = await conn.sendMessage(m.chat, { text: `*☠ بدأت عملية الكشف عن المعلومات! ☠*` }, { quoted: m });
    for (let i = 0; i < hawemod.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await conn.sendMessage(m.chat, { text: hawemod[i], edit: key }, { quoted: m });
    }
    await conn.sendMessage(m.chat, { text: doxeo, edit: key, mentions: conn.parseMention(doxeo) }, { quoted: m });
  }
  loading();
};

handler.help = ['doxear <nombre> | <@tag>'];
handler.tags = ['fun'];
handler.command = /^اختراق|doxxeo|doxxear|Doxxear|doxeo|doxear|doxxeame|doxeame/i;
export default handler;

function getRandomValue(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
