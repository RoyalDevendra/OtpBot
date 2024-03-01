/*CMD
  command: /sms2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!content) {
  var param = params.split(" ")
  var balance = Libs.ResourcesLib.userRes("balance")
  if (balance.value() < param[1]) {
    Bot.sendMessage(
      "*😭 Sorry you don't have enough balance to buy this service. Please recharge your account.*"
    )
    return
  }
  HTTP.get({
    url:
      "https://otpindia.pro/stubs/handler_api.php?api_key="+api+"&action=getNumber&country=22&service=" +
      param[0],
    success: "/sms2 " + params
  })
} else {
  var balance = Libs.ResourcesLib.userRes("balance")
  if (content == "NO_NUMBERS" || content == "NO_BALANCE") {
    Bot.sendMessage("*⚠️ No Numbers Found*")
    return
  }
  let free = new Date().toLocaleString("en-US", {
    timeZone: "Asia/kolkata"
  })
  var dt = Libs.DateTimeFormat.format(free, "dd/mm/yyyy")
  var tm = Libs.DateTimeFormat.format(free, "h:MM:ss")
  var data = content.split(":")
  var num = data[2].slice(2)
  var param = params.split(" ")
  var nt = User.getProperty("nt") == undefined ? 1 : User.getProperty("nt")
  User.setProperty({
    name: "otp" + nt,
    value: {
      number: num,
      price: param[1],
      service: param[0],
      Status: "Number Taken",
      time: tm + " " + dt
    }
  })
  balance.add(-parseFloat(param[1]))
  User.setProperty("nt", parseFloat(nt) + parseFloat(1), "integer")
  Api.sendMessage({
    chat_id: user.telehramid,
    text: `<b>🥳 Success

✅ Your Number : +91</b> <code>${num}</code><b>

⚠️ After Requesting OTP Click Get OTP

⚠️ Note: If You are unable to get OTP Then Cancel the Number</b>`,
    parse_mode: "html",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "☎️ Get Otp", callback_data: "/get " + data[1]+" "+nt },
          { text: "❌ Cancel", callback_data: "/cancel " + data[1] + " " + nt }
        ]
      ]
    }
  })


//Bot.runCommand("/get "+data[1]+" "+nt)
}

