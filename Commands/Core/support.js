module.exports = {
    name: "support",
    alias: ["supportgc"],
    desc: "Sends support group link.",
    cool:3,
    react: "🍁",
    category: "Core",
    start: async(Miku, m,{pushName}) => {
        m.reply(`Check your DM *${pushName}* !\n\nI have sent you support link personally.`)
        let botpic = botImage1
        let txt = `      🧣 *Support* 🧣\n\n*${botName}* is here for you.\n\n*Link:* wa.me/393298488837\n\n*Note:* Please don't spam!`
        await Miku.sendMessage(m.sender,{image:{url:botpic}, caption:txt},{quoted:m})
    }
}
