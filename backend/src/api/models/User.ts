import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  accounts: Array<mongoose.Types.ObjectId>;
}

// 2. Create a Schema corresponding to the document interface.
const UserSchema = new Schema<IUser>({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  accounts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "accounts",
    },
  ],
});

// Hash the password before saving the user
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare the password for login
UserSchema.methods.comparePassword = function (password: string) {
  return bcrypt.compare(password, this.password);
};

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
