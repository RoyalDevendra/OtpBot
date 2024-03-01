/*CMD
  command: /join
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

  
  let id = user.telegramid
  Api.getChatMember({ 
    chat_id : channel,
    user_id : id,
    on_result :"/check"
  })
