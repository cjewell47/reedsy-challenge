const router = express.Router();

const docs   = require('../controllers/docs');

router.route('/')
.get(docs.index)
.post(docs.create);

module.exports = router;
