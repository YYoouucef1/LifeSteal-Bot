const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'LifeSteal-9n9f.aternos.me',
        port: 33831,
        username: 'LiveBot_247',
        version: false
    });

    bot.on('spawn', () => {
        console.log('Bot is Online!');
        // حركة عشوائية كل دقيقتين لمنع طرد الـ AFK
        setInterval(() => {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 1000);
        }, 120000);
    });

    bot.on('end', () => {
        console.log('Disconnected. Restarting...');
        setTimeout(createBot, 5000);
    });

    bot.on('error', (err) => console.log('Error:', err));
}

createBot();
