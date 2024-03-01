/*CMD
  command: /del
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if(!content){
if(request.data){
  var message_id = request.message.message_id;
  var chat_id = request.message.chat.id;

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  });
}
if (!params) {
  return
}
var p = params.split(" ")

HTTP.delete({
  url: "https://api.internal.temp-mail.io/api/v3/email/"+p[0]+"",
  body: {"token":""+p[1]+""},
  success: "/del"
})
}else{
Bot.sendMessage("Deleted Successfully")}
