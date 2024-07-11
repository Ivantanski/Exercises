const Item = require('../item');
const express = require('express');
const router = express.Router();

/** GET / => [item, ...] */
router.get('/', (req, res, next) => {
  try {
    const items = Item.findAll();
    res.json({ items });
  } catch (err) {
    next(err);
  }
});

/** POST / {name, price} => new-item */
router.post('/', (req, res, next) => {
  try {
    const { name, price } = req.body;
    const newItem = new Item(name, price);
    res.json({ item: newItem });
  } catch (err) {
    next(err);
  }
});

/** GET /[name] => item */
router.get('/:name', (req, res, next) => {
  try {
    const foundItem = Item.find(req.params.name);
    res.json({ item: foundItem });
  } catch (err) {
    next(err);
  }
});

/** PATCH /[name] => item */
router.patch('/:name', (req, res, next) => {
  try {
    const updatedItem = Item.update(req.params.name, req.body);
    res.json({ item: updatedItem });
  } catch (err) {
    next(err);
  }
});

/** DELETE /[name] => "Removed" */
router.delete('/:name', (req, res, next) => {
  try {
    Item.remove(req.params.name);
    res.json({ message: 'Deleted' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
