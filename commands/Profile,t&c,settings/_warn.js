/*CMD
  command: /warn
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Profile,t&c,settings
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
var param = params.split(" ")
var warn =
  Bot.getProperty("warn" + param[0]) == undefined
    ? parseFloat(0)
    : Bot.getProperty("warn" + param[0])
var msg =
  warn == "2"
    ? "*🅱️ User Banned Successfully\n\n🔎 User Warnings Left* : `0`"
    : "*✅ User Warned Successfully\n\n🔎 User Warnings Left* : `" +
      (parseFloat(2) - parseFloat(warn)) +
      "`"
Bot.sendMessage(msg)
Bot.setProperty("warn" + param[0], warn + parseFloat(1), "integer")
var ph = Bot.getProperty(param[0]+""+param[1]);
Api.sendPhoto({
  chat_id: param[0],
  photo: ph,
  caption:
    "*😓 You Got a warn By admin For above screenshot that you uploaded for Deposit*\n\n_⚠️Note : You have now  " +
    (parseFloat(2) - parseFloat(warn)) +
    " Warns Left_\n\n*If Your warns Reached To 0 you will be banned from Bot*",
  parse_mode: "markdown"
})
Bot.setProperty(param[0]+""+param[1],null);

