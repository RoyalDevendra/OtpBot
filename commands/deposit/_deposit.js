/*CMD
  command: /deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: deposit
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
User.setProperty("answer", true)
if (params == "paytm") {
  Api.sendPhoto({
    photo: qr,
    caption:
      "*🔎 Scan This QR And Send INR ( Rs ) Then Click On\n~ ✅ INR Sended\n\n⚠️ Note : Pay Only Throw Paytm And PhonePe*",
    parse_mode: "markdown",
    reply_markup: {
      inline_keyboard: [[{ text: "✅ INR Sended", callback_data: "/suc" }]]
    }
  })
}
if (params == "upi") {
  Bot.sendMessage(
    "*Kindly Pay to The upi mentioned below\nUpi : *`"+upi+"`\n\n*⚠️ After Paying Kindly send the screenshot of your payment*"
  )
  Bot.runCommand("/upi")
}
if (params == "phone_pe") {
  Api.sendPhoto({
    photo: pqr,
    caption:
      "*🔎 Scan This QR And Send INR ( Rs ) Then Send Screenshot\n\n⚠️ Note : Pay Only Throw PhonePe*",
    parse_mode: "markdown"
  })
Bot.runCommand("/phone_pe")
}

