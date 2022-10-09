const router = require('express').Router()
const authenticate = require('../middleware/authenticate')
const produceController = require('../controllers/produce')
const consumerController = require('../controllers/consumer')

router.post('/produce', produceController.produce) // server b

router.use(authenticate)
router.get('/consume', consumerController.consume) // server a

module.exports = router