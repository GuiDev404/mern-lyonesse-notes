const { Router } = require('express');
const router = Router();
const controller = require("./controller");

const { validate, avoid_try_catch, handle_id_validation } = require('../../middlewares');
const { noteSchema } = require('../../util/schema');
// const noteModel = require('./model');

router.param('id', handle_id_validation)
router.param('collectionId', handle_id_validation)
router.param('userId', handle_id_validation)

// router.param('id', handle_id_validation(noteModel, '_id'))
// router.param('collectionId', handle_id_validation(noteModel, 'collectionId'))
// router.param('userId', handle_id_validation(noteModel, 'userId'))

router.route('/user/:userId/collections/:collectionId')
  .post(validate(noteSchema), avoid_try_catch(controller.addNote))

router.route('/fav/:id')
  .put(avoid_try_catch(controller.toggleFav))

router.route('/:id')
  .get(avoid_try_catch(controller.getNote))
  .put(avoid_try_catch(controller.updateNote))
  .delete(avoid_try_catch(controller.deleteNote))

module.exports = router;