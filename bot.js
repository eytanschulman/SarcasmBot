var TelegramBot = require('node-telegram-bot-api');

var token = '<Insert Token>';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});
bot.on('text', function (msg) {
  var chatText = msg.text;
  var originMessageID = msg["message_id"];
  var chatID = msg.chat.id;
  var textToSend = "^^ Sarcasm";

  var send = false;

  var s1 = "/s";
  var s2 = "</s>";

  if (chatText.indexOf(s1) > 0 || chatText.indexOf(s2) > 0) {
    send = true;
  }

  if (send) {
    bot.sendMessage(chatID, textToSend, {reply_to_message_id: originMessageID});
  }

  console.log(originMessageID);
  console.log(chatText);
});
