import mongoose, { Schema, Document } from "mongoose";

export interface IAccount extends Document {
  user: mongoose.Types.ObjectId;
  bankName: string;
  number: string;
  code: number;
  postalCode: string;
}

const AccountSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  bankName: {
    type: String,
    enum: ["credit-agricole", "other"],
    required: true,
  },
  number: { type: String, required: true },
  code: { type: Number, required: true },
  postalCode: { type: String },
});

const AccountModel = mongoose.model<IAccount>("Account", AccountSchema);

export default AccountModel;
