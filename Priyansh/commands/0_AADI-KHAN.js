const fs = require("fs");
module.exports.config = {
        name: "RuhaNi",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "RuhaNi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("RUHANI")==0 || event.body.indexOf("ruhani")==0 || event.body.indexOf("Ruhani")==0 || event.body.indexOf("@Ruhani Khan")==0) {
                var msg = {
                                body: "=𒁍 ⃝𝐎𝐖𝐍𝐄𝐑 ⸙𓆩𝐇𝐀𝐍𝐙𝐔𓆪 𓆣 »❯  \n__________________________________\n\nOWNER HANZU\n__________________________________ ",
                                attachment: fs.createReadStream(__dirname + `/noprefix/FB_IMG_1731385004342.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😳", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
