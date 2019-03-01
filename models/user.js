const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  // contentId: [String],
  // cvId: [{
  //   type: ObjectId,
  //   ref: 'Cv'
  // }],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;