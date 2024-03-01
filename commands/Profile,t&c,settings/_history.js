/*CMD
  command: /history
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Profile,t&c,settings
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (params == "otp") {
  var nt = User.getProperty("nt")
  var n = Math.max(nt - 19, 1)
  var msg = "<b>🧿 <u>Your Last 20 Otp History</u> :</b>\n\n"
  for (var i = n; i < nt; i++) {
    var data = User.getProperty("otp" + i)
    var ct =
      (data["ctime"] == undefined)||(data["ctime"] == "undefined")
        ? ""
        : "\n<b>Cancel Date =</b> <code>" + data["ctime"] + "</code>"
var otp =
      (data["otp"] == undefined)||(data["otp"] == "undefined")
        ? ""
        : "\n<b>OTP =</b> <code>" + data["otp"] + "</code>"
var ot = (data["otime"] == undefined)||(data["otime"] == "undefined")
        ? ""
        : "\n<b>Otp Taken Date =</b> <code>" + data["otime"] + "</code>"
    msg +=
      i +
      "<b>) Number = +91</b> <code>" +
      data["number"] +
      "</code>"+otp+"\n<b>Price = </b><code>" +
      data["price"] +
      "</code>\n<b>Service = </b>/sms_" +
      data["service"] +
      "\n<b>Status = </b><code>" +
      data["Status"] +
      "</code>\n<b>Buy Date = </b> <code >" +
      data["time"] +
      "</code>" +
      ct +""+ot+"\n_______________________________\n\n"
  }
  Api.sendMessage({ chat_id: user.telegramid, text: msg, parse_mode: "html" })
}
if (params == "deposit") {
  var dt = User.getProperty("deposit")
  var d = Math.max(dt - 19, 1)
  var msg = "<b>🧿 <u>Your Last 20 Deposit History</u> :</b>\n\n"
  for (var i = d; i < dt; i++) {
    var data = User.getProperty("depo" + i)

    msg +=
      i +
      "<b>) Type = </b> <code>" +
      data["type"] +
      "</code>\n<b>Amount = </b><code>" +
      data["amount"] +
      "</code>\n<b>Id = </b><code>" +
      data["id"] +
      "\n</code><b>Status = </b><code>" +
      data["status"] +
      "</code>\n<b>Date = </b> <code >" +
      data["time"] +
      "</code>\n_______________________________\n\n"
  }
  Api.sendMessage({ chat_id: user.telegramid, text: msg, parse_mode: "html" })
}

