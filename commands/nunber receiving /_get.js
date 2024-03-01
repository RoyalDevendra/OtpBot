/*CMD
  command: /get
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
  var param = params.split(" ")
  HTTP.get({
    url:
      "https://https://otpindia.pro/stubs/handler_api.php?api_key="+api+"&action=getStatus&id=" +
      param[0],
    success: "/get " + params/*+" "+request.message.message_id+" "+request.message.chat.id*/
  })
} else {
  var param = params.split(" ")
  if (content.includes("STATUS_OK")) {
    var otp = content.split(":")
    var tt = request.message.text.split("+91 ")
    var txt = tt[1].split("\n")
/*if(request.data){
var d = User.getProperty(param[2])
  var message_id = param[2]
  var chat_id = request.message.chat.id;

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  });
}*/
    Api.sendMessage({
      chat_id: user.telegramid,
      text: `<b>✅ Your Number : +91</b> <code>${txt[0]}</code>

<b>☎️ Your Otp :</b> <code>${otp[1]}</code>

<b>⚠️ Note: <i>For Next Otp Click Get OTP</i></b>`,
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "📞 Next Otp",
              callback_data: "/next " + param[0]
            }
          ]
        ]
      },
      parse_mode: "html"
    })
    let free = new Date().toLocaleString("en-US", {
      timeZone: "Asia/kolkata"
    })
    var dt = Libs.DateTimeFormat.format(free, "dd/mm/yyyy")
    var tm = Libs.DateTimeFormat.format(free, "h:MM:ss")
    var data = User.getProperty("otp" + param[1])
    User.setProperty({
      name: "otp" + param[1],
      value: {
        number: data.number,
        price: data.price,
        otp: otp[1],
        service: data.service,
        Status: "Number Used",
        time: data.time,
        ctime: data.ctime,
        otime: tm + " " + dt
      }
    })
  } else {
   
    Bot.sendMessage(`*No OTP Received 
First send The OTP or wait for some minutes then run command again*`)
  }
}

