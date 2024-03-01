/*CMD
  command: 👨‍💻 Profile
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let free = new Date().toLocaleString("en-US", {
  timeZone: "Asia/kolkata"
})
var balance = Libs.ResourcesLib.userRes("balance")
var deposit = User.getProperty("deposit") == undefined ? 1 : User.getProperty("deposit")
var nt = User.getProperty("nt") == undefined ? 1 : User.getProperty("nt")
var dt = Libs.DateTimeFormat.format(free, "dd/mm/yyyy")
var tm = Libs.DateTimeFormat.format(free, "h:MM:ss T")
var warns =
  Bot.getProperty("warn" + user.telegramid) == undefined
    ? parseFloat(0)
    : parseFloat(Bot.getProperty("warn" + user.telegramid))
var warn = parseFloat(3) - warns
Bot.sendInlineKeyboard(
  [
    [
      { title: "📋 OTP History", command: "/history otp" },
      { title: "💰 Deposit History", command: "/history deposit" }
    ],
    [{ title: "📰 Terms & Conditions", command: "/terms" }]
  ],
  "*👤 Name :* `" +
    user.first_name +
    "`\n*🆔 User ID :* `" +
    user.telegramid +
    "`\n\n*💵 Balance : *`₹" +
    balance.value().toFixed(2) +
    "`\n*💰 Total Deposit :* `" +
   parseFloat(deposit - 1 )+
    " Times`\n⚠️ *Total Warns Left:* `" +
    warn +
    "`\n\n*⌚️ Last Updated :* `" +
    tm +
    "M`\n*📆 Date :* `" +
    dt +
    "`*\n\n💠 Total Number Buyed :* `" +
    parseInt(nt-1) +
    "`"
)

