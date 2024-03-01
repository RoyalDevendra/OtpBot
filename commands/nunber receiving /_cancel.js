/*CMD
  command: /cancel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: nunber receiving 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!content) {
  if (request.data) {
    var message_id = request.message.message_id
    var chat_id = request.message.chat.id

    Api.deleteMessage({
      chat_id: chat_id,
      message_id: message_id
    })
  }
  var param = params.split(" ")
  HTTP.get({
    url:
      "https://otpindia.pro/stubs/handler_api.php?api_key="+api+"&action=setStatus&id=" +
      param[0] +
      "&status=8",
    success: "/cancel " + param[1]
  })
} else {
  if (content == "ACCESS_CANCEL") {
    var balance = Libs.ResourcesLib.userRes("balance")
    Bot.sendMessage("❌ Number Cancelled Successfully")
    let free = new Date().toLocaleString("en-US", {
      timeZone: "Asia/kolkata"
    })
    var dt = Libs.DateTimeFormat.format(free, "dd/mm/yyyy")
    var tm = Libs.DateTimeFormat.format(free, "h:MM:ss")
    var data = User.getProperty("otp" + params)
    User.setProperty({
      name: "otp" + params,
      value: {
        number: data.number,
        price: data.price,
        service: data.service,
        Status: "Number Cancelled",
        time: data.time,
        ctime: tm + " " + dt
      }
    })
    balance.add(+parseFloat(data["price"]))
  }
}

