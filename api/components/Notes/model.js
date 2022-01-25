const { Schema, model } = require('mongoose');

const NotesSchema  = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  collectionId: {
    type: Schema.Types.ObjectId,
    ref: 'Collections',
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Auth',
    required: true
  },
  isFav: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = model('Notes', NotesSchema);