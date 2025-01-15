import mongoose, { Schema, Document } from "mongoose";

export interface IUserDocument extends Document {
  id: string;
  name: string;
}

const UserSchema: Schema = new Schema({
  id: { type: String, required: false },
  name: { type: String, required: true },
});

const User = mongoose.model<IUserDocument>("User", UserSchema);

export default User;
