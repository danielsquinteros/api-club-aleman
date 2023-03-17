const { Schema, model } = require('mongoose');

const UserSchema = Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'USER_ROLE',
      enum: ['ADMIN_ROLE', 'USER_ROLE'],
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = model('User', UserSchema);
