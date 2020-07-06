const messageModule = require("../../Unit_0/Lesson_2/messages");
const addNumModule = require("./exportFunction");
const addNum = addNumModule.addNum;
messageModule.messages.forEach((message) => console.log(message));
console.log(addNum(1, 3));
