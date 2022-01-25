const NoteModel = require('./model');
const createHttpError = require('http-errors');

module.exports = {
  getNote: async (req, res, next)=> {
    const note = await NoteModel.findOne({ userId: req.params.userId , _id: req.params.id }).lean();

    if(!note) return next(createHttpError(404, 'La nota no existe'));

    res.status(200).json({
      status: 200,
      body: note
    })
  },
  addNote: async (req, res)=> {
    const { name, description } = req.body;
  
    console.log(req.body)
    console.log({ collectionId: req.params.collectionId, userId: req.params.userId })

    const newNote = new NoteModel({
      name, 
      description,
      collectionId: req.params.collectionId,
      userId: req.params.userId
    });

    await newNote.save();

    res.status(201).json({
      status: 201, 
      body: newNote
    })
  },
  updateNote: async (req, res)=> {
    // const noteContent = {
    //   name: req.body.name, 
    //   description: req.body.description,
    // }

    // await NoteModel.updateOne({ _id: req.params.id }, noteContent);
 
    const noteUpdated = await NoteModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    res.status(200).json({
      status: 200, 
      body: noteUpdated
    })
  },
  deleteNote: async (req, res)=> {
    await NoteModel.deleteOne({ _id: req.params.id });

    // if(deleted.ok && !deleted.deletedCount) {
    //   throw new Error('No se pudo eliminar la nota');
    // }

    res.status(200).json({
      status: 200, 
      body: req.params.id
    });
  },
  toggleFav: async (req, res) => {
    const note = await NoteModel.findOne({ _id: req.params.id });
    note.isFav = !note.isFav;

    await note.save()

    res.status(200).json({
      status: 200, 
      body: note
    })
  }
}