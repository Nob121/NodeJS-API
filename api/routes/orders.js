const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Fetching Orders'
    })
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Posting Orders'
    })
});

router.get('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'Order Details',
        orderID: req.params.orderID
    })
});

router.delete('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'Order Deleted',
        orderID: req.params.orderID
    })
});

module.exports = router;

