// decorators/index.js
class ReportDecorator {
    constructor(report) {
      this.report = report;
    }
  
    display() {
      this.report.display();
    }
}

module.exports = ReportDecorator;
  