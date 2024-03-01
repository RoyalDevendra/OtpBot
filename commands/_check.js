/*CMD
  command: /check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var user = options.result.status
if ((user == "member") | (user == "administrator") | (user == "creator")) {
  Bot.runCommand("/menu")
}

if (user == "left") {
  Bot.sendMessage("*⚠️ You Must Join Our All Channels*")
}
