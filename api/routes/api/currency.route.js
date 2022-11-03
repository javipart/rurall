const express = require('express');

const router = express.Router();
const routerBase = express.Router();


const controller = require('../../controllers/currency.controller');

routerBase.route('/:from/:to')
  .get(controller.get);

router.use('/currency', routerBase);


module.exports = router;