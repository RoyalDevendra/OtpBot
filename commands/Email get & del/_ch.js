/*CMD
  command: /ch
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Email get & del
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if(!content){
var at = params
  if ( at == undefined){
    Bot.sendMessage("*❌ Please create an email first*")
  }else{
  HTTP.get({
    url:
"https://api.internal.temp-mail.io/api/v3/email/"+at+"/messages",
    success: "/ch"
  })
  }
}else{
if (content.length < 8) {
  Bot.sendMessage("*❌ No messages were received...*")
  return
}

var result = JSON.parse(content)
var btcc = result
for (var ii in btcc) {
  var fr = btcc[ii].from
  var id = btcc[ii].id
  var sub = btcc[ii].subject
  var dt = btcc[ii].body_text
  var to = btcc[ii].to
//  var fl = btcc[ii].attachments
var eg = parseFloat(ii) + parseInt(1)
 

var btn = [{ title: "🌐 View Message In Browser ( temp-mail.io )", url: "https://temp-mail.io/en/message/"+id+"" }]
  Bot.sendInlineKeyboard(btn,
    "*📬 Inbox #"+eg +"*\n*🆔️ Id : "+id+"*\n*✈ To : "+to+"*\n*🔰 Subject : " + sub + "*\n*📌 From : " + fr + "*\n*💬 Message : " + dt +"*"
  )}
}
