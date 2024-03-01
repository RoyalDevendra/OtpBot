/*CMD
  command: /find
  help: 
  need_reply: 
  auto_retry_time: 
  folder: nunber receiving 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var array = {}
var index = 0
var ar = JSON.parse(content)
var ind = 0
var ke = []
for (let key in ar) {
  if (ar[key].includes(params)) {
    ke.push(key)
  }

}

 let msg = `<b>Here are the Search Results:

Please select one of the services below 👇</b>\n\n`
  for (var i of ke) {
    var name = ke[ind]
    msg +=
      index + 1 + "<b>) ➤</b> <code>" + ar[name] + "</code> /sms_" + name + "\n"
    ind++
    index++
  }

  Api.sendMessage({
    chat_id: user.telegramid,
    text: msg,
    parse_mode: "html"
  })

