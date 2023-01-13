import mongoose from 'mongoose';

interface IHistoryUser {
  userId: string;
  timestampLogin: Date;
  timestampLogout: Date;
  durationTime: string;
}

interface HistoryUserModelInterface extends mongoose.Model<HistoryUserDoc> {
  build(attr: IHistoryUser): HistoryUserDoc;
}

interface HistoryUserDoc extends mongoose.Document {
  userId: string;
  timestampLogin: Date;
  timestampLogout: Date;
  durationTime: string | number;
}

const HistoryUserSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    timestampLogin: {
      type: Date,
      required: [true, 'Waktu login harus diisi'],
    },
    timestampLogout: {
      type: Date,
    },
    durationTime: {
      type: Number,
    },
  },
  { timestamps: true }
);

HistoryUserSchema.statics.build = (attr: IHistoryUser) => {
  return new HistoryUser(attr);
};

const HistoryUser = mongoose.model<HistoryUserDoc, HistoryUserModelInterface>(
  'HistoryUser',
  HistoryUserSchema
);

export { HistoryUser };
