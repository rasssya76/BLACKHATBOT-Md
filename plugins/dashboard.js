const { showhit } = require('./lib/hit')

shp = '♡ۣۜۜ፝͜͜͡͡✿➤'

let handler = async (m, { conn, usedPrefix }) => {
  const data = await showhit()
  if (data == '') return m.reply('Masih Kosong :v')

  let thit = data.map((total) => total.count)

  let totalhit = 0

  for (let i of thit) {
    totalhit += Number(i)
  }

  console.log(totalhit)

  let hglobal = data.sort(function (a, b) {
    return b.count - a.count
  })

  tg = ''

  if (data.length <= 5) {
    for (let i = 0; i < data.length; i++) {
      tg += `${shp} ${usedPrefix}${data[i].cmd} : ${data[i].count}\n`
    }
  } else {
    for (let i = 0; i < 6; i++) {
      tg += `${shp} ${usedPrefix}${data[i].cmd} : ${data[i].count}\n`
    }
  }

  dash = `*╔┅═┅══ ᐃᐁᐃ ══┅═┅═᳀*
║   ⬕•𝑫𝑨𝑺𝑯𝑩𝑶𝑨𝑹𝑫•⬕
╚┅═┅══ ᐃᐁᐃ ══┅═┅═᳀          
         
╔┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
║      ⬕•*HIT*•⬕
╚┅═┅══ ᐃᐁᐃ ══┅═┅═᳀

${shp} _Global :_ ${totalhit}

╔┅═┅══ ᐃᐁᐃ ══┅═┅═᳀
║ ⬕•*MOST COMMAND*•⬕
╚┅═┅══ ᐃᐁᐃ ══┅═┅═᳀

 ♡ۣۜۜ፝͜͜͡͡✿➤ ${tg}

`

  m.reply(dash)
}

handler.help = ['dashboard'].map((v) => v + '')

handler.tags = ['other']

handler.command = /^(dashboard)$/i

module.exports = handler