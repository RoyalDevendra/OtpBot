/*CMD
  command: 💰 Deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: deposit
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (Bot.getProperty("warn" + user.telegramid) > 2) {
  Bot.sendMessage("_❌ You are Banned ❌_")
  return
}
Bot.sendInlineKeyboard(
  [
    [
      { title: "💎 Paytm", command: "/deposit paytm" },
      { title: "💎 Upi", command: "/deposit upi" }
    ],
    [{ title: "💎 Phone Pe", command: "/deposit phone_pe" }]
  ],
  `*Hey *[${user.first_name}](tg://user?id=${user.telegramid}) 

*10 rs Paytm = ₹10.00 (No Tax)
10 rs Upi = ₹10.00 (No Tax)

⚠️ NOTE : If You Are Deposit Successfully Then Your Fund Can't Be Able To Withdraw*`
)

