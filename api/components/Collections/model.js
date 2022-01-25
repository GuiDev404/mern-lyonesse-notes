const { Schema, model } = require('mongoose');

const CollectionSchema  = new Schema({
  name: {
    type: String,
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
  },
  colorIcon: {
    type: String,
    default: "#0d6aff"
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = model('Collections', CollectionSchema);