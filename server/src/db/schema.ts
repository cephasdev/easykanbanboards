import mongoose, { Schema, Document } from "mongoose";

export interface ICard extends Document {
  id: string;
  title: string;
  description: string;
  status: string;
  createdBy: string;
  assignedTo: string;
  createdAt: string;
  updatedAt: string;
}

const CardSchema: Schema = new Schema({
  id: { type: String, required: false },
  title: { type: String, required: true },
  description: { type: String, required: false },
  status: { type: String, required: true },
  createdBy: { type: String, required: true },
  assignedTo: { type: String, required: true },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true },
});

const Card = mongoose.model<ICard>("Card", CardSchema);

export default Card;
