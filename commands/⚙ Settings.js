/*CMD
  command: ⚙ Settings
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var button = [
  [
    { title: "💳 Pay Info", command: "/info pay" },
    { title: "📊 Statistics", command: "/stats" }
  ],[{ title: "🖇️ Info Links", command: "/info links" }]
]
Bot.sendInlineKeyboard(button, "*Kindly Select An Option You Want To Manage*")

