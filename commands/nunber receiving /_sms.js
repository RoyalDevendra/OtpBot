/*CMD
  command: /sms
  help: 
  need_reply: false
  auto_retry_time: 
  folder: nunber receiving 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

  var ser = JSON.parse(content)
  var service = ser["22"][params]
  for (var key in service) {
    var price = key
  }
  var pr = (parseInt(price) * profit) / 100
  var final =  (parseInt(price)+pr).toFixed(2)
  Bot.sendInlineKeyboard(
    [
      [
        {
          title: final + " Points 💎",
          command: "/sms2 " + params + " " + final
        }
      ]
    ],
    "*Click Below Button to Get Number.*"
  )

