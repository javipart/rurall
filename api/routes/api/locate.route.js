const express = require('express');

const router = express.Router();
const routerBase = express.Router();


const controller = require('../../controllers/locate.controller');

routerBase.route('/:ip')
  .get(controller.get);

router.use('/locate', routerBase);


module.exports = router;