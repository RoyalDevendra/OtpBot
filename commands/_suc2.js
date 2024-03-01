/*CMD
  command: /suc2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var json = JSON.parse(content)
var amo = json.TXNAMOUNT
var status = json.STATUS
var ORDERID = json.ORDERID
if (status != "TXN_SUCCESS") {
  Bot.sendMessage(
    "Request Failed.\n\nEither The Transaction Id is wrong or Merchant Key is not setupped correctly"
  )
  return
}
var TRANSACTION = Bot.getProperty("TRANSACTION")
if (TRANSACTION == undefined) {
  Bot.setProperty("TRANSACTION", ORDERID, "string")
  Bot.sendMessage("Done You Paid Ammount " + amo)
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
      type: "Paytm",
      amount: amo,
      id: ORDERID,
      status: "Confirmed",
      time: tm + " " + at
    }
  })
User.setProperty("deposit",dt+1,"integer")
  var balance = Libs.ResourcesLib.userRes("balance")
  balance.add(+parseFloat(amo))
  Api.sendMessage({
    chat_id: paych,
    text: `*🔔 New Deposit Request 🔔

🧒 User : * [@${user.username}](tg://user?id=${user.telegramid})
*🔥 Transaction Id :* ${ORDERID}
*🪙 Amount :* ${amo}`,
    parse_mode: "markdown"
  })
} else {
  if (TRANSACTION.includes(ORDERID)) {
    Bot.sendMessage(
      "You cant Use This Transaction Id.\n\nReason:- Either You Already Used it Or Another Person Used it"
    )
    return
  }
  Bot.setProperty("TRANSACTION", TRANSACTION + "," + ORDERID, "string")
  Bot.sendMessage("Done You Paid Ammount " + amo)
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
      type: "Paytm",
      amount: amo,
      id: ORDERID,
      status: "Confirmed",
      time: tm + " " + at
    }
  })
  var balance = Libs.ResourcesLib.userRes("balance")
  balance.add(+parseFloat(amo))
  Api.sendMessage({
    chat_id: paych,
    text: `*🔔 New Deposit Request 🔔

🧒 User : * [@${user.username}](tg://user?id=${user.telegramid})
*🔥 Transaction Id :* ${ORDERID}
*🪙 Amount :* ${amo}`,
    parse_mode: "markdown"
  })
}

