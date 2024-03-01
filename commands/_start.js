/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if(Bot.getProperty("warn"+user.telegramid) > 2){
Bot.sendMessage("_❌ You are Banned ❌_")
return}
var button = [[{title:"✅ Joined", command:"/join"}]]
Bot.sendInlineKeyboard(
  button,
  "*👨‍💼 𝖧𝖾𝗅𝗅𝗈 *[" +
    user.first_name +
    "](tg://user?id=" +
    user.telegramid +
    ") *𝖯𝗅𝖾𝖺𝗌𝖾 𝖩𝗈𝗂𝗇 𝖮𝗎𝗋 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 𝖳𝗈 𝖠𝖼𝖼𝖾𝗌𝗌 𝖳𝗁𝖾 𝖡𝗈𝗍 :\n\nJoin Here : "+channel+"*"
)
/* broadcast will not work as api is on hold */
/*var sdone = User.getProperty("sdone")
 if (!sdone) {
  HTTP.post({
    url: "https://projectoid.site/api/Telegram/broadcast/data.php",
    body: {
      user_id: user.telegramid,
      bot: bot.name
    },
folow_redirects: true //dont change
  })
  User.setProperty("sdone", "true", "string")
}
*/
