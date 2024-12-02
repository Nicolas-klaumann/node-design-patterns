const express = require('express');
const router = express.Router();
const userRegistration = require('../singletons/userRegistration');
const BasicReport = require('../decorators/report');
const HeaderDecorator = require('../decorators/headerDecorator');
const FooterDecorator = require('../decorators/footerDecorator');

router.get('/', (req, res) => {
    const basicReport = new BasicReport();
    let report = basicReport;

    if (req.query.header === 'true') {
        report = new HeaderDecorator(report);
    }

    if (req.query.footer === 'true') {
        report = new FooterDecorator(report);
    }

    // Generate report content
    const reportContent = [];
    if (req.query.header === 'true') {
        reportContent.push("Header");
    }
    report.display = () => {
        reportContent.push("Displaying basic report content");
    }
    report.display();
    reportContent.push("Registered Users:");
    const users = userRegistration.getUsers();
    users.forEach(user => {
        reportContent.push(`- ${user.username}`);
    });
    if (req.query.footer === 'true') {
        reportContent.push("Footer");
    }

    res.json({ report: reportContent });
});

module.exports = router;
