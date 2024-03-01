/*CMD
  command: /get2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: nunber receiving 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

Bot.inspect(params)
 var param = params.split(" ")
 HTTP.get({
    url:
      "https://smstore.su/stubs/handler_api.php?api_key=63aa0ed345e2b484cf0e5bef4f602ef7&action=getStatus&id=" +
      param[0],
    success: "/get " + params
  })
