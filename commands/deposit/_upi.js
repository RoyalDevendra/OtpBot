/*CMD
  command: /upi
  help: 
  need_reply: true
  auto_retry_time: 
  folder: deposit
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

Bot.sendMessage("*🔎 Your Request is Submited*")
var rnd = Libs.Random.randomInt(12345, 67890)
Bot.setProperty(user.telegramid + "" + rnd, request.photo[0].file_id, "string")
let free = new Date().toLocaleString("en-US", {
    timeZone: "Asia/kolkata"
  })
  var at = Libs.DateTimeFormat.format(free, "dd/mm/yyyy")
  var tm = Libs.DateTimeFormat.format(free, "h:MM:ss")
  var dt =
    User.getProperty("deposit") == undefined ? 1 : User.getProperty("deposit")
  User.setProperty({
    name: "depo" + dt,
    value: {
      type: "UPI",
      amount: "-",
      id: request.photo[0].file_id,
      status: "Confirmed",
      time: tm + " " + at
    }
  })
User.setProperty("deposit", dt + parseFloat(1), "integer")
Api.sendPhoto({
  chat_id: admin,
  photo: request.photo[0].file_id,
  caption:
    "➕ [@" +
    user.username +
    "](tg://user?id=" +
    user.telegramid +
    ") *Deposited\n\n🏦 Add Balance By :-* `/bal " +
    user.telegramid +
    " amount`",
  parse_mode: "markdown",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "⚠️ Warn",
          callback_data: "/warn " + user.telegramid + " " + rnd
        }
      ]
    ]
  }
})
Api.sendPhoto({
  chat_id: paych,
  photo: request.photo[0].file_id,
  caption:
    "*🏦 New Deposit Request 🏦\n\n🧒 User :* [@" +
    user.username +
    "](tg://user?id=" +
    user.telegramid +
    ")*\n🔥 Method :* `UPI`",
  parse_mode: "markdown"
})

