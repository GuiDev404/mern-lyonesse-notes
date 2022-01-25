const CollectionModel = require('./model');
const NoteModel = require('../Notes/model');
const createHttpError = require('http-errors');

module.exports = {
  allCollections: async (req, res, next)=> {
    console.log('get collections:', req?.user)
    const collections = await CollectionModel.find({ userId: req.params.userId }).lean();

    if(!collections) return next(createHttpError(404,'La coleccion no existe'));

    res.status(200).json({
      status: 200, 
      body: collections
    })
  },
  addCollection: async (req, res)=> {
    const newCollection = new CollectionModel({ name: req.body.name, userId: req.body.userId });

    await newCollection.save();
    
    res.status(201).json({
      status: 201, 
      body: newCollection
    })
  },
  updateCollection: async (req, res)=> {
    const collectionUpdated = await CollectionModel.findOneAndUpdate(
      { _id: req.params.id, userId: req.params.userId },
      req.body,
      { new: true }
    );
    
    res.status(200).json({
      status: 200, 
      body: collectionUpdated
    })
  },
  deleteCollection: async (req, res, next)=> {
    const existCollection = await CollectionModel.countDocuments({ _id: req.params.id, userId: req.params.userId });

    if(!existCollection){
      return next(createHttpError(404, 'La coleccion no existe'))
    }
     
    await NoteModel.deleteMany({ collectionId: req.params.id });
    const collectionDeleted =  await CollectionModel.findOneAndDelete({ _id: req.params.id });
    
    res.status(200).json({
      _id: collectionDeleted._id
    })
  },
  getNotes: async (req, res)=> {
    console.log('get note in collection:', req?.user)

    const notesInCollection = await NoteModel.find({ 
      $and: [ 
        { collectionId: req.params.id },
        { userId: req.params.userId },
      ]
    })

    res.status(200).json({
      status: 200, 
      body: notesInCollection
    })
  },
}

