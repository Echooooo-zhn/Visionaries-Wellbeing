class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
        this.pastMessage = ''
    }
    //takes in a mesaage and logs it in the screen
    parse(message) {
        const lowercase = message.toLowerCase();
        if (lowercase.includes("hello") || lowercase.includes("hi")) {
            this.actionProvider.messageHandler();
        } else if (lowercase.includes("meeting")) {
            this.actionProvider.handleMeeting();
        } else if (lowercase.includes("what") || lowercase.includes("know") || lowercase.includes("how") || lowercase.includes("why") || lowercase.includes("when")) {
            this.actionProvider.handleQuestion(lowercase);
        } else if (lowercase.includes("sql")) {
            this.actionProvider.handleSqlQuiz();
        } else if (lowercase.includes("thank")) {
            this.actionProvider.handleGreeting();
        } else if (lowercase.includes("score")) {
            this.actionProvider.handleScoreBoard();
        } else {
            this.actionProvider.handleUnknown();
        }
    }
}
export default MessageParser;