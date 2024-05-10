const express = require('express');
const router = express.Router();

//import database
const connection = require('../config/database');

/**
 * INDEX UNDIAN
 */
router.get('/', function (req, res) {
    //query
    connection.query('SELECT No, ORDER_CODE, CUST_NAME, CUST_PHONE FROM data_undian', function (err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        } else {
            return res.status(200).json({
                status: true,
                message: 'List Data Undian',
                data: rows
            })
        }
    });
});

/**
 * STORE UNDIAN
 */
router.post('/store', [

], (req, res) => {

    //define formData
    let formData = {
        ORDER_CODE: req.body.ORDER_CODE,
        PRODUCT_NAME: req.body.PRODUCT_NAME,
        CUST_NAME: req.body.CUST_NAME,
        CUST_PHONE: req.body.CUST_PHONE
    }

    // insert query
    connection.query('INSERT INTO history_undian SET ?', formData, function (err, rows) {
        //if(err) throw err
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        } else {
            return res.status(201).json({
                status: true,
                message: 'Insert Data Successfully',
                data: rows[0]
            })
        }
    })

});

module.exports = router;