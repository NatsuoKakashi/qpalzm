module.exports = {
  name: "charlist",
  alias: ["characterlist", "botcharacterlist"],
  desc: "Ban a member",
  category: "Mods",
  usage: "setchar 0/1/2/3/4/5/6/7",
  react: "🎀",
  start: async (Miku, m, { text, prefix ,modStatus}) => {

    let txt = `                  『  *Bot Charactes*  』\n\n\n_0 - Atlas MD_\n\n_1 - Power MD_\n\n_2 - Makima MD_\n\n_3 - Denji MD_\n\n_4 - Zero Two_\n\n_5 - Chika MD_\n\n_6 - Miku MD_\n\n_7 - Marin MD_\n\n_8 - Ayanokoji MD_\n\n_9 - Ruka MD_\n\n_10 - Mizuhara MD_\n\n_11 - Rem MD_\n\n_12 - Sumi MD_\n\n_13 - Kaguya MD_\n\n_14 - Yumeko MD_\n\n_15 - Kurumi MD_\n\n_16 - Mai MD_\n\n_17 - Yor MD_\n\n_18 - Shinbou MD_\n\n_19 - Eiko MD_\n\n\nUsage Example: *${prefix}setchar 11* \n`;

    let botLogos = [
        'https://i.imgur.com/VRwuTyl.jpg'
    ];

    let randomimage = botLogos[Math.floor(Math.random() * botLogos.length)];
   
    /*  -- Disabled Buttons --

    let sections = [] 
    let chars = ['Atlas MD', 'Power MD', 'Makima MD', 'Denji MD', 'Zero Two', 'Chika MD' , 'Miku MD', 'Marin MD','Ayanokoji MD','Ruka MD','Mizuhara MD','Rem MD','Sumi MD','Kaguya MD','Yumeko MD','Kurumi MD','Mai MD','Yor MD','Shinbou MD','Eiko MD']
    let buttonDesc =[`Set bot character to Atlas MD`, `Set bot character to Power MD`, `Set bot character to Makima MD`, `Set bot character to Denji MD`, `Set bot character to Zero Two`, `Set bot character to Chika MD`, `Set bot character to Miku MD`, `Set bot character to Marin MD`, `Set bot character to Ayanokoji MD`, `Set bot character to Ruka MD`, `Set bot character to Mizuhara MD`, `Set bot character to Rem MD`, `Set bot character to Sumi MD`, `Set bot character to Kaguya MD`, `Set bot character to Yumeko MD`, `Set bot character to Kurumi MD`, `Set bot character to Mai MD`, `Set bot character to Yor MD`, `Set bot character to Shinbou MD`, `Set bot character to Eiko MD`]
    let buttonTexts = [`${prefix}setchar 0`, `${prefix}setchar 1`, `${prefix}setchar 2`, `${prefix}setchar 3`, `${prefix}setchar 4`, `${prefix}setchar 5`, `${prefix}setchar 6`, `${prefix}setchar 7`, `${prefix}setchar 8`, `${prefix}setchar 9`, `${prefix}setchar 10`, `${prefix}setchar 11`, `${prefix}setchar 12`, `${prefix}setchar 13`, `${prefix}setchar 14`, `${prefix}setchar 15`, `${prefix}setchar 16`, `${prefix}setchar 17`, `${prefix}setchar 18`, `${prefix}setchar 19`]
    
    for (let i = 0; i < chars.length; i++) {
        const list = {title: `${prefix}setchar ${i}`,
        rows: [
        
                {
                 title: `${chars[i]}`, 
                 rowId: `${buttonTexts[i]}`,
                 description: `${buttonDesc[i]}`
                }
                ]
             }
                sections.push(list)
            }

      
    let buttonMessage = {
      image: { url: randomimage },
      caption: txt,
      footer: `*${botName}*`,
      buttonText: "Choose Character",
      sections,
    }; */

    Miku.sendMessage(m.from, {image: { url: randomimage },caption: txt,}, { quoted: m });
  },
};
