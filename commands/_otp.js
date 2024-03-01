/*CMD
  command: /otp
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
  if (request.data) {
    var message_id = request.message.message_id
    var chat_id = request.message.chat.id

    Api.deleteMessage({
      chat_id: chat_id,
      message_id: message_id
    })
  }
  /*if(!params){
Bot.sendInlineKeyboard([[{title:"🔔 Low Price Server",command:"/otp low"},{title:"🔔 High Price Server",command:"/otp hih"}]],"*Kindly select One Server To Buy OTP*")
return}
if(params == "low*/

  HTTP.get({
    url:
      "https://otpindia.pro/stubs/handler_api.php?api_key="+api+"&action=getServices",
    success: "/otp " + params
  })
} else {
  var par = params == "undefined" ? 0 : parseInt(params)
  var array = {}
  var count = 0
  var index = parseInt(0 + par)
  var ar = JSON.parse(content)
  var ind = 0
  var ke = []
  for (let key in ar) {
    ke.push(key)
  }
  var k = ke.slice(par, parseInt(30 + par))

  let msg = ""
  for (var i of k) {
    var name = k[ind]
    msg +=
      index + 1 + "<b>) ➤</b> <code>" + ar[name] + "</code> /sms_" + name + "\n"
    ind++
    index++
  }

  Api.sendMessage({
    chat_id: user.telegramid,
    text: msg,
    parse_mode: "html",
    reply_markup: {
      inline_keyboard: [
        [{ text: "⏭️ Next", callback_data: "/otp " + parseInt(par + 30) }]
      ]
    }
  })
}

