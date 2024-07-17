import mongoose from "mongoose";

const { Schema, model } = mongoose;

const theaterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: Schema.Types.ObjectId,
      ref: "Location",
      required: true,
    },
    screens: [
      {
        type: Schema.Types.ObjectId,
        ref: "Screen",
      },
    ],
  },
  { timestamps: true }
);

const Theater = model("Theater", theaterSchema);
export default Theater;
