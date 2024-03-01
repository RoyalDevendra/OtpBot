/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/


if(message.includes('/sms_')){
var ser = message.split('_')
var service = ser[1]
HTTP.get({url:`https://otpindia.pro/stubs/handler_api.php?api_key=${api}&action=getPrices&country=22`,
success:"/sms "+service})
}else{
if(User.getProperty("answer")){
User.setProperty("answer",null)
return}
HTTP.get({
    url:
      "https://otpindia.pro/stubs/handler_api.php?api_key="+api+"&action=getServices",
    success: "/find "+message
  })
 } 

