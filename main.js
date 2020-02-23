var Telegram = require('telegram-bot-api');
const api = require('./api');

if (!api.token) {
    console.error("Error: Telegram token is missing");
    process.exit(1);
}
if (!api.userId) {
    console.error("Error: Telegram User ID is missing");
    process.exit(1);
}
if (!api.servername) {
    console.error("Error: Telegram username is missing");
    process.exit(1);
}

const telegram = new Telegram({
    token: api.token
});

telegram.sendMessage({
    chat_id: api.userId,
    text: `! WARNING ! The ${api.servername} was restarted`,
}).then(() => {
    process.exit(-1);
});
