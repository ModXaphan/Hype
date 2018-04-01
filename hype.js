var bot = new (require("discord.io")).Client({
    token: "BotToken123",
    autorun: true
});
bot.on("message", function(user, userID, channelID, message, event) {
    if (bot.users[userID].bot) return;
    console.log(event)
    if (message === "Hey!") {
        bot.sendMessage({
            to: channelID,
            message: `Hello <@${userID}>! Have great day, evening or morning!😄👌`

        });
    }
});
