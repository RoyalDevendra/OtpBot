/*CMD
  command: /ge
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Email get & del
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var result = JSON.parse(content)
var c1 = result.email
var c2 = result.token
var url =
  "https://temp-mail.io/en/email/" +
  c1 +
  "/token/" +
  c2 +
  "?utm_campaign=TempMailBot&utm_content=email_info&utm_medium=organic&utm_source=telegram-bot"
var btn = [
  [{ title: "🌐 View Inbox In Browser ( temp-mail.io )", url: url }],
  [
    { title: "📫 Check Inbox", command: "/ch " + c1 },
    { title: "🗑 Delete", command: "/del " + c1 + " " + c2 + " " }
  ]
]
Bot.sendInlineKeyboard(btn, "*📧 Your temporary email address: *\n" + c1 + "")

