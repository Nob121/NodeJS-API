const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    })
});

router.post('/', (req, res, next) => {
    const product = {
        "name": req.body.name,
        "price": req.body.price
    };
    res.status(201).json({
        message: 'Handling POST requests to /products',
        createdProduct: product
    })
});


router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    if (id === 'special') {
        res.status(200).json({
            message: 'Special ID is functional now',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'Wrong ID',
        })
    }
})

router.patch('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Updated Product',
    });
})

router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted Product',
    });
})

module.exports = router;

