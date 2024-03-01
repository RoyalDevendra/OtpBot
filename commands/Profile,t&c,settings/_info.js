/*CMD
  command: /info
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Profile,t&c,settings
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if(request.data){
  var message_id = request.message.message_id;
  var chat_id = request.message.chat.id;

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  });
}
if(params == "pay"){
Bot.sendInlineKeyboard([[{title:"💰 Deposit",command:"/deposit"}]],`*🔔 Payment Information

💠 All Deposit Amount Transfer To Bot It Will Be No Take Any Time Its Instant
💠 We Will Not Cut  Any Type Of Taxes And Charges On Every Upi Transaction
💠 If You Deposit Successfully In Bot You Will Not Able to Withdraw
💠 Use TRX Payment Method For Get Extra Bonus*`)
}
if(params == "links"){
Bot.sendInlineKeyboard([[{title:"🔎 Payments",url:"https://t.me/yout"}],[{title:"☁️ Community",url:"https://t.me/your"}],[{title:"📞 Helpline",url:"https://telegram.me/your"}]],"*Kindly Select one option from below*")
}
