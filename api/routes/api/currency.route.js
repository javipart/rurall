const express = require('express');

const router = express.Router();
const routerBase = express.Router();


const controller = require('../../controllers/locate.controller');

routerBase.route('/:currency')
  .get(controller.get);

router.use('/currency', routerBase);


module.exports = router;