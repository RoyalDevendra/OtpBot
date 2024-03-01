/*CMD
  command: /menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
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

Bot.sendKeyboard("⭐️ Get OTP,💰 Deposit\n,👨‍💻 Profile,📧 Get Mail,📈 Status\n,👥 Support,⚙ Settings","*👋 Welcome to the Biggest Otp Seller Bot which has Amazing Collection of All Application Otp and Ready Made Account with Automated/Instant System Got Deposit and Trusted Shop ✅*")
