const BasicReport = require('./report');

class FooterDecorator {
    constructor(report) {
        this.report = report;
    }

    display() {
        this.report.display();
        console.log("Footer");
    }
}

module.exports = FooterDecorator;
