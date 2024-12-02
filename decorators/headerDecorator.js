const BasicReport = require('./report');

class HeaderDecorator {
    constructor(report) {
        this.report = report;
    }

    display() {
        console.log("Header");
        this.report.display();
    }
}

module.exports = HeaderDecorator;
