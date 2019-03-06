const WSJFAvoid = require("../model/WSJFItemAvoidCost");
//const { body,validationResult } = require('express-validator/check');
//const { sanitizeBody } = require('express-validator/filter');


exports.createWSJFAvoidItem = (req, res) => {

        let newAvoidTask = new WSJFAvoid (
            {
                avoidItemName: req.body.avoidItemName,
                costavoidedtotal: req.body.costavoidedtotal,
                timecostoccur: req.body.timecostoccur,
                risk: req.body.risk,
                estimationAvoidValue: req.body.estimationValue,
                WSJFAvoidValue: req.body.WSJFAvoidValue
            });

        newAvoidTask.save((err, task) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(task);
        });
    };

//list Avoid Cost Item
//display a list of all WSJF Items

exports.listAllWSJFAvoidItems = (req, res) => {
    WSJFAvoid.find({}, (err, task) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).send(task);
        //res.render('calculatorDisplayAllItems.pug', {WSJFAvoidList: task});
    });
};