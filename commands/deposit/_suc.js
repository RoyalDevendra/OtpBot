/*CMD
  command: /suc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: deposit
  answer: *💥 Kindly Send UTR ID Now*
  keyboard: 
  aliases: 
  group: 
CMD*/


HTTP.get({
        url: "https://projectoid.site/api/paytm?MERCHANT_KEY="+mkey+"&TRANSACTION="+message,
        success: "/suc2",
folow_redirects: true
      } )
