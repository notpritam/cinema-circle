import mongoose from "mongoose";

const { Schema, model } = mongoose;

const castSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    bio: String,
    dateOfBirth: Date,
    nationality: String,
  },
  { timestamps: true }
);

const Cast = model("Cast", castSchema);
export default Cast;
