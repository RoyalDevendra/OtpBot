/*CMD
  command: 👥 Support
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *🔆 Write Something to Support, Your All Problem is Solved as Soon as Possible*
  keyboard: 
  aliases: 
  group: 
CMD*/

Api.sendMessage({
  chat_id: admin,
  text:
    "*➕ New *[User](tg://user?id=" +
    user.telegramid +
    ")* Support Message\n\n☁️ Message : *`" +
    message +
    "`",
  parse_mode: "markdown"
})
Bot.sendMessage("*Message sended*,\n`Our support team will right there`")

