/*CMD
  command: /stats
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Profile,t&c,settings
  answer: 
  keyboard: 
  aliases: 📈 status
  group: 
CMD*/

/* api on hold so it will not work"/
/*if (!content) {
if(request.data){
  var message_id = request.message.message_id;
  var chat_id = request.message.chat.id;

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  });
}
  HTTP.post({
    url: "https://projectoid.site/api/Telegram/statistics.php",
    body: { bot: bot.name },
    success: "/stats"
  })
} else {
  var status = content
  var stats =
    "<b>📊 Bot Live Stats 📊\n\n💡 Total Users: " +
    status +
    " User(s)\n\n🤟 Codes Maker: @abhishek71599</b>"

  Api.sendMessage({
    text: stats,
    parse_mode: "html",
    disable_web_page_preview: true
  })
}*/

