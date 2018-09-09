const express = require('express');
const router = express.Router();

const Customer = require('../../models/Customer');

// @route GET api/items
// @desc Get All Items
// @access Public

router.get('/', (req, res) => {
    Customer.find()
        .sort({ date:-1 })
        .then(items => res.json(items))
});

// @route POST api/items
// @desc  Create an item
// @access Public

router.post('/', (req, res) => {
    const newItem = new Customer({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc  Delete an item
// @access Public

router.delete('/:id', (req, res) => {
    Customer.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success:true})))
        .catch(err => res.status(404).json({success:false}));
});

module.exports = router;