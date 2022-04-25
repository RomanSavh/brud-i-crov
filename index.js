const TelegramBot = require('node-telegram-bot-api');

const token = '5106780207:AAF2dUJLkSF-FQsoviBieavFfui3NS0CIh8';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if (chatId == "-1001538622536") {
      return;
  }

  bot.forwardMessage("-1001538622536", chatId, msg.message_id);
  bot.sendMessage(chatId, 'Отримали, дякуємо вам. Все буде Україна! 🤍✊🏻');
});