const { Router } = require('express');
const router = Router();
const controller = require("./controller");

const { validate, avoid_try_catch, handle_id_validation } = require('../../middlewares');
const { collectionSchema } = require('../../util/schema');

// const collectionModel = require('./model');
// const noteModel = require('../Notes/model');

router.param('id', handle_id_validation)
router.param('userId', handle_id_validation)

// router.param('id', handle_id_validation(collectionModel, '_id'))
// router.param('userId', handle_id_validation(collectionModel, 'userId'))
// router.param('id', handle_id_validation(noteModel, 'collectionId'))

router.route('/user/:userId/:id')
  .put(avoid_try_catch(controller.updateCollection))
  .delete(avoid_try_catch(controller.deleteCollection))

router.route('/user/:userId')
  .get(avoid_try_catch(controller.allCollections))

router.route('/')
  .post(validate(collectionSchema), controller.addCollection)

router.route('/user/:userId/notes/:id')
  .get(avoid_try_catch(controller.getNotes))

module.exports = router;