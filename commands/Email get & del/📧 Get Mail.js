/*CMD
  command: 📧 Get Mail
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Email get & del
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

HTTP.post({
  url: "https://api.internal.temp-mail.io/api/v3/email/new",
  body: { min_name_length: 10, max_name_length: 10 },
  success: "/ge"
})

