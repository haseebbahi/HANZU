const fs = require("fs");
module.exports.config = {
	name: "react",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "Shaan Khan", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
     react.includes("Owner ") || react.includes("HANZALA") || react.includes("hanzala") ||
react.includes("HANZU") ||
react.includes("admin")) {
		var msg = {
				body: `★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★
               ✦𝐇𝐀𝐍𝐙𝐔✦

☞𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞:
https://https://www.facebook.com/7H3.SH1T4N?mibextid=ZbWKwL👉✨100080862788542✨



★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 :  ✦𝐇𝐀𝐍𝐙𝐀𝐋𝐀.𝐊𝐈𝐍𝐆✦`,attachment: fs.createReadStream(__dirname + `https://i.imgur.com/9g9TW9S.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
