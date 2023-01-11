import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

interface IUser {
  email: string;
  password: string;
}

interface UserModelInterface extends mongoose.Model<UserDoc> {
  build(attr: IUser): UserDoc;
}

interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, 'Email harus diisi'],
    },

    password: {
      type: String,
      required: [true, 'Password harus diisi'],
      minlength: 6,
    },
  },
  { timestamps: true }
);

userSchema.statics.build = (attr: IUser) => {
  return new User(attr);
};

userSchema.pre('save', async function (next) {
  const User = this;
  if (User.isModified('password')) {
    User.password = await bcrypt.hash(User.password, 12);
  }
  next();
});

const User = mongoose.model<UserDoc, UserModelInterface>('User', userSchema);

User.build({
  email: 'some email',
  password: 'some password',
});

export { User };
